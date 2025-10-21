"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const NewCandidatePage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    resume_link: "",
    location: "",
    yoe: "",
    role: "backend",
    programming_languages: [],
    tools: []
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

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
          programming_languages: formData.programming_languages,
          tools: formData.tools,
          status: "submitted"
        }]);

      if (insertError) throw insertError;

      setSuccess(true);
      setTimeout(() => {
        router.push('/candidates');
      }, 2000);
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

  const handleProgrammingLanguageChange = (lang) => {
    setFormData(prev => ({
      ...prev,
      programming_languages: prev.programming_languages.includes(lang)
        ? prev.programming_languages.filter(l => l !== lang)
        : [...prev.programming_languages, lang]
    }));
  };

  const handleToolChange = (tool) => {
    setFormData(prev => ({
      ...prev,
      tools: prev.tools.includes(tool)
        ? prev.tools.filter(t => t !== tool)
        : [...prev.tools, tool]
    }));
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile Submitted Successfully!</h1>
            <p className="text-gray-600 mb-4">
              Thank you for submitting your profile. We&apos;ll review it and get back to you soon.
            </p>
          <p className="text-sm text-gray-500">
            Redirecting to candidates page...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Submit Your Profile
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join our talent pool and connect with top companies looking for engineering talent.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}

            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Resume Link *
              </label>
              <input
                type="text"
                name="resume_link"
                value={formData.resume_link}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Any resume link or text"
              />
              <p className="text-xs text-gray-500 mt-1">
                Any resume link or text description
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
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
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
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

            {/* Top 3 Programming Languages */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Top 3 Programming Languages (Select your strongest)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'JavaScript', 'TypeScript', 'Python', 'Java', 'Go', 'Rust',
                  'C++', 'C#', 'PHP', 'Ruby', 'Swift', 'Kotlin'
                ].map((lang) => (
                  <label key={lang} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.programming_languages.includes(lang)}
                      onChange={() => handleProgrammingLanguageChange(lang)}
                      disabled={!formData.programming_languages.includes(lang) && formData.programming_languages.length >= 3}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 disabled:opacity-50"
                    />
                    <span className="text-sm text-gray-700">{lang}</span>
                  </label>
                ))}
              </div>
              {formData.programming_languages.length > 0 && (
                <div className="mt-3 p-3 bg-blue-50 rounded-lg">
                  <p className="text-sm font-medium text-blue-900 mb-1">Selected Languages ({formData.programming_languages.length}/3):</p>
                  <div className="flex flex-wrap gap-1">
                    {formData.programming_languages.map((lang) => (
                      <span key={lang} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Cloud Experience */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-3">
                Cloud Experience (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {[
                  'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes'
                ].map((tool) => (
                  <label key={tool} className="flex items-center space-x-2 cursor-pointer p-2 rounded-lg hover:bg-gray-50">
                    <input
                      type="checkbox"
                      checked={formData.tools.includes(tool)}
                      onChange={() => handleToolChange(tool)}
                      className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <span className="text-sm text-gray-700">{tool}</span>
                  </label>
                ))}
              </div>
              {formData.tools.length > 0 && (
                <div className="mt-3 p-3 bg-green-50 rounded-lg">
                  <p className="text-sm font-medium text-green-900 mb-1">Selected Tools:</p>
                  <div className="flex flex-wrap gap-1">
                    {formData.tools.map((tool) => (
                      <span key={tool} className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={() => router.push('/candidates')}
                className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Submitting..." : "Submit Profile"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewCandidatePage;
