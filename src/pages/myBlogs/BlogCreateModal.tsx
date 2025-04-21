import React, { useState, useEffect } from "react";
import BlogServices from "../../services/blogs.services";

interface Category {
  _id: string;
  name: string;
}

interface BlogFormData {
  title: string;
  blog_image_url: string;
  category_id: string;
  content: string;
}

interface BlogCreateModalProps {
  onClose: any;
  onSubmit: (data: BlogFormData) => void;
}

const BlogCreateModal: React.FC<BlogCreateModalProps> = ({ onClose, onSubmit }) => {
  const [formData, setFormData] = useState<BlogFormData>({
    title: "",
    blog_image_url: "",
    category_id: "",
    content: "",
  });

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const res = await BlogServices.loadCategory(); // replace with your endpoint
      setCategories(res.data.data);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files)
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await BlogServices.uploadImage(formData);
      setFormData(prev => ({ ...prev, blog_image_url: res.data.data.path }));
    } catch (err) {
      console.error("Upload failed:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>Create New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input name="title" value={formData.title} onChange={handleChange} required />
          <label>Image</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          {loading && <p>Uploading...</p>}
          {formData.blog_image_url && <img src={formData.blog_image_url} alt="Preview" className="preview-image" />}
          <label>Category</label>
          <select name="category_id" value={formData.category_id} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
          <label>Content</label>
          <textarea name="content" value={formData.content} onChange={handleChange} rows={5} required />
          <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose}>Cancel</button>
          <button className="btn-submit" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BlogCreateModal;
