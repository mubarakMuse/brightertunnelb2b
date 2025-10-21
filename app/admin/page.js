"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import toast from "react-hot-toast";
import AdminAuth from "@/components/AdminAuth";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const AdminDashboard = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterYoe, setFilterYoe] = useState("all");

  // Form state
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    current_location: "",
    yoe: "",
    previous_companies: "",
    industry_experience: "",
    leadership_experience: "",
    programming_languages: "",
    tools: "",
    programming_skill: "",
    problem_solving_skill: "",
    debugging_skill: "",
    system_design_skill: "",
    ai_coding_proficiency: "",
    ai_experience: "",
    vetted_notes: "",
    past_project_discussion: "",
    overall_score: "",
    interviewer_name: "",
    interview_date: "",
    status: "pending",
    resume_url: "",
    portfolio_url: "",
    linkedin_url: "",
    github_url: ""
  });

  // Fetch candidates
  const fetchCandidates = async () => {
    try {
      const { data, error } = await supabase
        .from("candidates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCandidates(data || []);
    } catch (error) {
      toast.error("Error fetching candidates: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Convert comma-separated strings to arrays
      const processedData = {
        ...formData,
        yoe: formData.yoe ? parseInt(formData.yoe) : null,
        programming_skill: formData.programming_skill ? parseInt(formData.programming_skill) : null,
        problem_solving_skill: formData.problem_solving_skill ? parseInt(formData.problem_solving_skill) : null,
        debugging_skill: formData.debugging_skill ? parseInt(formData.debugging_skill) : null,
        system_design_skill: formData.system_design_skill ? parseInt(formData.system_design_skill) : null,
        ai_coding_proficiency: formData.ai_coding_proficiency ? parseInt(formData.ai_coding_proficiency) : null,
        overall_score: formData.overall_score ? parseInt(formData.overall_score) : null,
        previous_companies: formData.previous_companies ? formData.previous_companies.split(',').map(s => s.trim()).filter(s => s) : [],
        industry_experience: formData.industry_experience ? formData.industry_experience.split(',').map(s => s.trim()).filter(s => s) : [],
        programming_languages: formData.programming_languages ? formData.programming_languages.split(',').map(s => s.trim()).filter(s => s) : [],
        tools: formData.tools ? formData.tools.split(',').map(s => s.trim()).filter(s => s) : [],
        interview_date: formData.interview_date || null
      };

      if (editingCandidate) {
        // Update existing candidate
        const { error } = await supabase
          .from("candidates")
          .update(processedData)
          .eq("id", editingCandidate.id);

        if (error) throw error;
        toast.success("Candidate updated successfully!");
      } else {
        // Create new candidate
        const { error } = await supabase
          .from("candidates")
          .insert([processedData]);

        if (error) throw error;
        toast.success("Candidate added successfully!");
      }

      // Reset form and refresh data
      resetForm();
      fetchCandidates();
    } catch (error) {
      toast.error("Error saving candidate: " + error.message);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      current_location: "",
      yoe: "",
      previous_companies: "",
      industry_experience: "",
      leadership_experience: "",
      programming_languages: "",
      tools: "",
      programming_skill: "",
      problem_solving_skill: "",
      debugging_skill: "",
      system_design_skill: "",
      ai_coding_proficiency: "",
      ai_experience: "",
      vetted_notes: "",
      past_project_discussion: "",
      overall_score: "",
      interviewer_name: "",
      interview_date: "",
      status: "pending",
      resume_url: "",
      portfolio_url: "",
      linkedin_url: "",
      github_url: ""
    });
    setEditingCandidate(null);
    setShowForm(false);
  };

  // Edit candidate
  const editCandidate = (candidate) => {
    setFormData({
      ...candidate,
      previous_companies: candidate.previous_companies ? candidate.previous_companies.join(', ') : "",
      industry_experience: candidate.industry_experience ? candidate.industry_experience.join(', ') : "",
      programming_languages: candidate.programming_languages ? candidate.programming_languages.join(', ') : "",
      tools: candidate.tools ? candidate.tools.join(', ') : "",
      yoe: candidate.yoe ? candidate.yoe.toString() : "",
      programming_skill: candidate.programming_skill ? candidate.programming_skill.toString() : "",
      problem_solving_skill: candidate.problem_solving_skill ? candidate.problem_solving_skill.toString() : "",
      debugging_skill: candidate.debugging_skill ? candidate.debugging_skill.toString() : "",
      system_design_skill: candidate.system_design_skill ? candidate.system_design_skill.toString() : "",
      ai_coding_proficiency: candidate.ai_coding_proficiency ? candidate.ai_coding_proficiency.toString() : "",
      overall_score: candidate.overall_score ? candidate.overall_score.toString() : "",
      interview_date: candidate.interview_date || ""
    });
    setEditingCandidate(candidate);
    setShowForm(true);
  };

  // Delete candidate
  const deleteCandidate = async (id) => {
    if (!confirm("Are you sure you want to delete this candidate?")) return;

    try {
      const { error } = await supabase
        .from("candidates")
        .delete()
        .eq("id", id);

      if (error) throw error;
      toast.success("Candidate deleted successfully!");
      fetchCandidates();
    } catch (error) {
      toast.error("Error deleting candidate: " + error.message);
    }
  };

  // Filter candidates
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.current_location?.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = filterStatus === "all" || candidate.status === filterStatus;
    const matchesYoe = filterYoe === "all" || 
      (filterYoe === "0-2" && candidate.yoe <= 2) ||
      (filterYoe === "3-5" && candidate.yoe >= 3 && candidate.yoe <= 5) ||
      (filterYoe === "6-10" && candidate.yoe >= 6 && candidate.yoe <= 10) ||
      (filterYoe === "10+" && candidate.yoe > 10);

    return matchesSearch && matchesStatus && matchesYoe;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading candidates...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Candidate Management</h1>
          <p className="mt-2 text-gray-600">Manage your candidate database and evaluations</p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search candidates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <svg className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>

              {/* Status Filter */}
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="vetted">Vetted</option>
                <option value="interviewed">Interviewed</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
                <option value="hired">Hired</option>
              </select>

              {/* YOE Filter */}
              <select
                value={filterYoe}
                onChange={(e) => setFilterYoe(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Experience</option>
                <option value="0-2">0-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>

            {/* Add Candidate Button */}
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Candidate
            </button>
          </div>
        </div>

        {/* Candidates Table */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Experience</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Score</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredCandidates.map((candidate) => (
                  <tr key={candidate.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {candidate.first_name} {candidate.last_name}
                        </div>
                        <div className="text-sm text-gray-500">{candidate.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {candidate.yoe ? `${candidate.yoe} years` : 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {candidate.current_location || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="text-sm font-medium text-gray-900">
                          {candidate.overall_score ? `${candidate.overall_score}/10` : 'N/A'}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        candidate.status === 'approved' ? 'bg-green-100 text-green-800' :
                        candidate.status === 'rejected' ? 'bg-red-100 text-red-800' :
                        candidate.status === 'hired' ? 'bg-blue-100 text-blue-800' :
                        candidate.status === 'vetted' ? 'bg-purple-100 text-purple-800' :
                        candidate.status === 'interviewed' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {candidate.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => editCandidate(candidate)}
                          className="text-blue-600 hover:text-blue-900"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteCandidate(candidate.id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredCandidates.length === 0 && (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No candidates found</h3>
              <p className="mt-1 text-sm text-gray-500">Get started by adding a new candidate.</p>
            </div>
          )}
        </div>

        {/* Candidate Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingCandidate ? 'Edit Candidate' : 'Add New Candidate'}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                      <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Current Location</label>
                      <input
                        type="text"
                        name="current_location"
                        value={formData.current_location}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Years of Experience</label>
                      <input
                        type="number"
                        name="yoe"
                        value={formData.yoe}
                        onChange={handleInputChange}
                        min="0"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Professional Background */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Professional Background</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Previous Companies (comma-separated)</label>
                      <input
                        type="text"
                        name="previous_companies"
                        value={formData.previous_companies}
                        onChange={handleInputChange}
                        placeholder="Google, Microsoft, Amazon"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Industry Experience (comma-separated)</label>
                      <input
                        type="text"
                        name="industry_experience"
                        value={formData.industry_experience}
                        onChange={handleInputChange}
                        placeholder="Fintech, AI, HealthTech"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Leadership Experience</label>
                      <input
                        type="text"
                        name="leadership_experience"
                        value={formData.leadership_experience}
                        onChange={handleInputChange}
                        placeholder="Staff Engineer, Engineering Manager"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Technical Skills */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Technical Skills</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Programming Languages (comma-separated)</label>
                      <input
                        type="text"
                        name="programming_languages"
                        value={formData.programming_languages}
                        onChange={handleInputChange}
                        placeholder="JavaScript, Python, Java, Go"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tools & Frameworks (comma-separated)</label>
                      <input
                        type="text"
                        name="tools"
                        value={formData.tools}
                        onChange={handleInputChange}
                        placeholder="React, Node.js, Docker, AWS"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    {/* Skill Ratings */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Programming Skill (1-10)</label>
                        <input
                          type="number"
                          name="programming_skill"
                          value={formData.programming_skill}
                          onChange={handleInputChange}
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Problem Solving Skill (1-10)</label>
                        <input
                          type="number"
                          name="problem_solving_skill"
                          value={formData.problem_solving_skill}
                          onChange={handleInputChange}
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Debugging Skill (1-10)</label>
                        <input
                          type="number"
                          name="debugging_skill"
                          value={formData.debugging_skill}
                          onChange={handleInputChange}
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">System Design Skill (1-10)</label>
                        <input
                          type="number"
                          name="system_design_skill"
                          value={formData.system_design_skill}
                          onChange={handleInputChange}
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* AI Experience */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">AI Experience</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">AI Coding Proficiency (1-10)</label>
                      <input
                        type="number"
                        name="ai_coding_proficiency"
                        value={formData.ai_coding_proficiency}
                        onChange={handleInputChange}
                        min="1"
                        max="10"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">AI Experience Description</label>
                      <textarea
                        name="ai_experience"
                        value={formData.ai_experience}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Describe their experience with AI tools, projects, etc."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                  </div>

                  {/* Interview & Evaluation */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Interview & Evaluation</h3>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Vetted Notes</label>
                      <textarea
                        name="vetted_notes"
                        value={formData.vetted_notes}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Overall assessment and notes from the interview..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Past Project Discussion</label>
                      <textarea
                        name="past_project_discussion"
                        value={formData.past_project_discussion}
                        onChange={handleInputChange}
                        rows="3"
                        placeholder="Summary of projects discussed during interview..."
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Overall Score (1-10)</label>
                        <input
                          type="number"
                          name="overall_score"
                          value={formData.overall_score}
                          onChange={handleInputChange}
                          min="1"
                          max="10"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Interviewer Name</label>
                        <input
                          type="text"
                          name="interviewer_name"
                          value={formData.interviewer_name}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Interview Date</label>
                        <input
                          type="date"
                          name="interview_date"
                          value={formData.interview_date}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        name="status"
                        value={formData.status}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="pending">Pending</option>
                        <option value="vetted">Vetted</option>
                        <option value="interviewed">Interviewed</option>
                        <option value="approved">Approved</option>
                        <option value="rejected">Rejected</option>
                        <option value="hired">Hired</option>
                      </select>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Links & Resources</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Resume URL (Google Drive Link)</label>
                        <input
                          type="url"
                          name="resume_url"
                          value={formData.resume_url}
                          onChange={handleInputChange}
                          placeholder="https://drive.google.com/file/d/..."
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <p className="mt-1 text-xs text-gray-500">
                          Paste the Google Drive shareable link here. Make sure the file is set to &quot;Anyone with the link can view&quot;
                        </p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio URL</label>
                        <input
                          type="url"
                          name="portfolio_url"
                          value={formData.portfolio_url}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn URL</label>
                        <input
                          type="url"
                          name="linkedin_url"
                          value={formData.linkedin_url}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">GitHub URL</label>
                        <input
                          type="url"
                          name="github_url"
                          value={formData.github_url}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="flex justify-end space-x-4 pt-6 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                    >
                      {editingCandidate ? 'Update Candidate' : 'Add Candidate'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </AdminAuth>
  );
};

export default AdminDashboard;
