import React, { useState } from "react";

const ProjectForm: React.FC = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    role: "",
    technologies_used: "",
    timeline: "",
    links: ""
  });

  const [mediaFile, setMediaFile] = useState<File | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setMediaFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("title", formData.title);
    formDataToSend.append("description", formData.description);
    formDataToSend.append("role", formData.role);
    formDataToSend.append("technologies_used", formData.technologies_used);
    formDataToSend.append("timeline", formData.timeline);
    formDataToSend.append("links", formData.links);
    if (mediaFile) formDataToSend.append("media", mediaFile);

    try {
      const response = await fetch("http://localhost:5001/api/projects", {
        method: "POST",
        body: formDataToSend,
      });
      if (response.ok) {
        const data = await response.json();
        alert("Project added successfully!");
        console.log(data);
        setFormData({
          title: "",
          description: "",
          role: "",
          technologies_used: "",
          timeline: "",
          links: ""
        });
        setMediaFile(null);
      } else {
        alert("Failed to add project.");
      }
    } catch (error) {
      console.error(error);
      alert("Error uploading file.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "40px auto" }}>
      <h2>Add New Project</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <input name="title" placeholder="Title" value={formData.title} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
        <input name="role" placeholder="Role" value={formData.role} onChange={handleChange} />
        <input name="technologies_used" placeholder="Technologies Used" value={formData.technologies_used} onChange={handleChange} />
        <input name="timeline" placeholder="Timeline" value={formData.timeline} onChange={handleChange} />
        <input type="file" accept="image/*,video/*" onChange={handleFileChange} />
        <input name="links" placeholder="Links" value={formData.links} onChange={handleChange} />
        <button type="submit" style={{ padding: "8px 16px", backgroundColor: "#00B0B9", color: "white", border: "none" }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProjectForm;
