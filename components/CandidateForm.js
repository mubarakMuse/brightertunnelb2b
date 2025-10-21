"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CandidateForm = ({ isOpen, onClose, onSuccess }) => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    resume_link: "",
    location: "",
    yoe: "",
    role: "backend",
    tech_stack: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Validate required fields
      if (!formData.first_name || !formData.last_name || !formData.resume_link || !formData.location || !formData.yoe) {
        throw new Error("Please fill in all required fields");
      }

      // Validate YOE is a number
      if (isNaN(formData.yoe) || formData.yoe < 0) {
        throw new Error("Years of experience must be a valid number");
      }

      // Insert candidate into database
      const { error: insertError } = await supabase
        .from("candidates")
        .insert([{
          first_name: formData.first_name,
          last_name: formData.last_name,
          resume_link: formData.resume_link,
          location: formData.location,
          yoe: parseInt(formData.yoe),
          role: formData.role,
          tools: formData.tech_stack,
          status: "submitted"
        }]);

      if (insertError) throw insertError;

      // Reset form
      setFormData({
        first_name: "",
        last_name: "",
        resume_link: "",
        location: "",
        yoe: "",
        role: "backend",
        tech_stack: []
      });

      onSuccess?.();
      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTechStackChange = (tech) => {
    setFormData(prev => ({
      ...prev,
      tech_stack: prev.tech_stack.includes(tech)
        ? prev.tech_stack.filter(t => t !== tech)
        : [...prev.tech_stack, tech]
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Submit Your Profile</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name *
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name *
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Resume Link *
            </label>
            <input
              type="url"
              name="resume_link"
              value={formData.resume_link}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="https://drive.google.com/file/..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="San Francisco, CA"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Years of Experience *
            </label>
            <input
              type="number"
              name="yoe"
              value={formData.yoe}
              onChange={handleChange}
              required
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="5"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Role *
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="backend">Backend Developer</option>
              <option value="frontend">Frontend Developer</option>
              <option value="ai/ml">AI/ML Engineer</option>
              <option value="fullstack">Full Stack Developer</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tech Stack (Select all you're proficient with)
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Jenkins',
                'Git', 'GitHub', 'GitLab', 'PostgreSQL', 'MongoDB', 'Redis',
                'Elasticsearch', 'Kafka', 'RabbitMQ', 'Nginx', 'Apache',
                'Terraform', 'Ansible', 'Chef', 'Puppet', 'Prometheus', 'Grafana'
              ].map((tech) => (
                <label key={tech} className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.tech_stack.includes(tech)}
                    onChange={() => handleTechStackChange(tech)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="text-sm text-gray-700">{tech}</span>
                </label>
              ))}
            </div>
            {formData.tech_stack.length > 0 && (
              <div className="mt-2">
                <p className="text-xs text-gray-500">Selected: {formData.tech_stack.join(', ')}</p>
              </div>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit Profile"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CandidateForm;
