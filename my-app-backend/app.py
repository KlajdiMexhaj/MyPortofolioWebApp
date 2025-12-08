import os
from flask import Flask, request, jsonify, send_from_directory
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres:Klajdi12!@localhost:5432/my_portofolio_db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['UPLOAD_FOLDER'] = 'uploads'  # folder to store uploaded files
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024  # 50 MB max

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif', 'mp4', 'mov', 'avi'}

db = SQLAlchemy(app)


def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(200), nullable=False)
    description = db.Column(db.Text, nullable=True)
    role = db.Column(db.String(200), nullable=True)
    technologies_used = db.Column(db.String(300), nullable=True)
    timeline = db.Column(db.String(100), nullable=True)
    media_url = db.Column(db.String(500), nullable=True)
    links = db.Column(db.String(500), nullable=True)
    created_at = db.Column(db.DateTime, default=db.func.now()) 

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "role": self.role,
            "technologies_used": self.technologies_used,
            "timeline": self.timeline,
            "media_url": self.media_url,
            "links": self.links,
            "created_at": self.created_at.isoformat() if self.created_at else None
        }
    
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)


# Routes

@app.route('/api/projects',methods=['GET'])
def get_projects():
    projects = Project.query.order_by(Project.created_at.desc()).all()
    return jsonify([p.to_dict() for p in projects])


@app.route('/api/projects', methods=['POST'])
def create_project():
    if 'media' not in request.files:
        return jsonify({"error": "No media file uploaded"}), 400
    
    file = request.files['media']
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(file_path)

        data=request.form
        new_project = Project(
            title=data['title'],
            description=data.get('description'),
            role=data.get('role'),
            technologies_used=data.get('technologies_used'),
            timeline=data.get('timeline'),
            media_url=filename,
            links=data.get('links')
        )
        db.session.add(new_project)
        db.session.commit()
        return jsonify(new_project.to_dict()),201
    else:
        return jsonify({"error": "Invalid file type"}), 400
    
@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()  # create table if not exists
    app.run(debug=True, host='0.0.0.0', port=5001)
