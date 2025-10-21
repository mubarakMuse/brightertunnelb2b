"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const CandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // Fetch all candidates
  const fetchCandidates = async () => {
    try {
      const { data, error } = await supabase
        .from("candidates")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setCandidates(data || []);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  // Filter and sort candidates
  const filteredCandidates = candidates.filter(candidate => {
    const matchesSearch = 
      candidate.first_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.last_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      candidate.programming_languages?.some(lang => 
        lang.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      candidate.tools?.some(tool => 
        tool.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesStatus = filterStatus === "all" || candidate.status === filterStatus;

    return matchesSearch && matchesStatus;
  }).sort((a, b) => {
    // Sort by status priority: interviewed > resume_checked > submitted
    const statusOrder = { 'interviewed': 1, 'resume_checked': 2, 'submitted': 3 };
    const aOrder = statusOrder[a.status] || 4;
    const bOrder = statusOrder[b.status] || 4;
    
    if (aOrder !== bOrder) {
      return aOrder - bOrder;
    }
    
    // If same status, sort by creation date (newest first)
    return new Date(b.created_at) - new Date(a.created_at);
  });

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case "submitted":
        return "bg-yellow-100 text-yellow-800";
      case "resume_check":
        return "bg-blue-100 text-blue-800";
      case "interviewed":
        return "bg-green-100 text-green-800";
      case "approved":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Get role display name
  const getRoleDisplay = (role) => {
    switch (role) {
      case "backend": return "Backend";
      case "frontend": return "Frontend";
      case "ai/ml": return "AI/ML";
      case "fullstack": return "Full Stack";
      case "other": return "Other";
      default: return role;
    }
  };


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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Engineering Talent Pool
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Discover pre-screened engineering talent ready to join your team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/candidates/new"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-center"
              >
                Submit Your Profile
              </a>
              <a
                href="/clients"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium text-center"
              >
                For Clients - View Candidates
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search candidates..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              <option value="submitted">Submitted</option>
              <option value="resume_checked">Resume Checked</option>
              <option value="interviewed">Interviewed</option>
            </select>
          </div>

            {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
              {filteredCandidates.length} candidate{filteredCandidates.length !== 1 ? 's' : ''} found
          </div>
        </div>

        {/* Candidates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCandidates.map((candidate) => (
            <div key={candidate.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {candidate.first_name} {candidate.last_name.charAt(0)}.
                    </h3>
                    <p className="text-sm text-gray-500">
                      {getRoleDisplay(candidate.role)}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(candidate.status)}`}>
                      {candidate.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </div>
                  </div>
                </div>

                {/* Programming Languages Preview */}
                {candidate.programming_languages && candidate.programming_languages.length > 0 && (
                <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Languages</h4>
                  <div className="flex flex-wrap gap-1">
                      {candidate.programming_languages.slice(0, 4).map((lang, index) => (
                      <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        {lang}
                      </span>
                    ))}
                      {candidate.programming_languages.length > 4 && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        +{candidate.programming_languages.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                )}

                {/* Tools Preview */}
                {candidate.tools && candidate.tools.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Tools & Tech</h4>
                    <div className="flex flex-wrap gap-1">
                      {candidate.tools.slice(0, 3).map((tool, index) => (
                        <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                          {tool}
                        </span>
                      ))}
                      {candidate.tools.length > 3 && (
                        <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                          +{candidate.tools.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredCandidates.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No candidates found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search criteria.</p>
          </div>
        )}
      </div>

    </div>
  );
};

export default CandidatesPage;