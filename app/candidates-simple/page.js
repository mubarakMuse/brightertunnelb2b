"use client";
import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const SimpleCandidatesPage = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [passcode, setPasscode] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentClient, setCurrentClient] = useState(null);

  // Check if already authenticated
  useEffect(() => {
    const stored = localStorage.getItem("candidates_authenticated");
    const storedClient = localStorage.getItem("current_client");
    if (stored === "true" && storedClient) {
      setIsAuthenticated(true);
      setCurrentClient(JSON.parse(storedClient));
    }
  }, []);

  // Fetch approved candidates
  const fetchCandidates = async () => {
    try {
      const { data, error } = await supabase
        .from("candidates")
        .select("*")
        .order("overall_score", { ascending: false });

      if (error) throw error;
      setCandidates(data || []);
    } catch (error) {
      console.error("Error fetching candidates:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchCandidates();
    }
  }, [isAuthenticated]);

  // Handle passcode authentication
  const handlePasscodeSubmit = async (e) => {
    e.preventDefault();
    
    try {
      // Check passcode against clients table
      const { data: client, error } = await supabase
        .from('clients')
        .select('*')
        .eq('passcode', passcode)
        .eq('is_active', true)
        .single();

      if (error || !client) {
        alert("Invalid passcode");
        return;
      }

      // Update last access time
      await supabase
        .from('clients')
        .update({ last_access: new Date().toISOString() })
        .eq('id', client.id);

      setCurrentClient(client);
      setIsAuthenticated(true);
      localStorage.setItem("candidates_authenticated", "true");
      localStorage.setItem("current_client", JSON.stringify(client));
    } catch (error) {
      console.error("Authentication error:", error);
      alert("Error authenticating. Please try again.");
    }
  };

  // Filter candidates based on search
  const filteredCandidates = candidates.filter(candidate => {
    if (!searchTerm) return true;
    const searchLower = searchTerm.toLowerCase();
    return (
      candidate.first_name?.toLowerCase().includes(searchLower) ||
      candidate.last_name?.toLowerCase().includes(searchLower) ||
      candidate.current_location?.toLowerCase().includes(searchLower) ||
      candidate.programming_languages?.some(lang => 
        lang.toLowerCase().includes(searchLower)
      ) ||
      candidate.tools?.some(tool => 
        tool.toLowerCase().includes(searchLower)
      )
    );
  });

  // Get skill level color
  const getSkillColor = (score) => {
    if (score >= 8) return "bg-green-100 text-green-800";
    if (score >= 6) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  // Handle email contact
  const handleEmailContact = async (candidate) => {
    // Track the contact in database
    try {
      await supabase
        .from('client_contacts')
        .insert([{
          client_id: currentClient.id,
          candidate_id: candidate.id,
          contact_type: 'email',
          notes: 'Client contacted via email'
        }]);
    } catch (error) {
      console.error("Error tracking contact:", error);
    }

    // Create email to candidate with CC to you
    const subject = `Job Opportunity - ${currentClient.company_name}`;
    const body = `Hi ${candidate.first_name},

I hope this email finds you well. I'm reaching out on behalf of ${currentClient.company_name} regarding a potential job opportunity.

We came across your profile through Brighter Tunnel's candidate database and were impressed by your background:

- Experience: ${candidate.yoe} years
- Location: ${candidate.current_location}
- Skills: ${candidate.programming_languages?.join(', ') || 'Not specified'}
- Overall Score: ${candidate.overall_score}/10

We'd love to learn more about your experience and discuss potential opportunities at ${currentClient.company_name}.

Would you be available for a brief conversation this week?

Best regards,
${currentClient.contact_name}
${currentClient.company_name}
${currentClient.email}`;

    // Email to candidate with CC to you
    const mailtoLink = `mailto:${candidate.email}?cc=mubarak@brightertunnel.com&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
  };

  // Show passcode form if not authenticated
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Access Candidate Database
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter passcode to view available candidates
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handlePasscodeSubmit}>
            <div>
              <label htmlFor="passcode" className="sr-only">
                Passcode
              </label>
              <input
                id="passcode"
                name="passcode"
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Enter passcode"
              />
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Access Database
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Available Candidates</h1>
              <p className="mt-1 text-gray-600">Pre-screened and ready to join your team</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {currentClient?.contact_name} from {currentClient?.company_name}
              </div>
              <button
                onClick={() => {
                  localStorage.removeItem("candidates_authenticated");
                  localStorage.removeItem("current_client");
                  setIsAuthenticated(false);
                  setCurrentClient(null);
                }}
                className="text-gray-500 hover:text-gray-700 text-sm"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search */}
        <div className="mb-6">
          <div className="relative max-w-md">
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
                      {candidate.first_name} {candidate.last_name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {candidate.yoe ? `${candidate.yoe} years experience` : 'Experience not specified'}
                    </p>
                    <p className="text-sm text-gray-500">
                      {candidate.current_location || 'Location not specified'}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSkillColor(candidate.overall_score)}`}>
                      {candidate.overall_score ? `${candidate.overall_score}/10` : 'N/A'}
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {candidate.programming_languages?.slice(0, 4).map((lang, index) => (
                      <span key={index} className="inline-flex px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                        {lang}
                      </span>
                    ))}
                    {candidate.programming_languages?.length > 4 && (
                      <span className="inline-flex px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded">
                        +{candidate.programming_languages.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Tools */}
                {candidate.tools && candidate.tools.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Tools & Frameworks</h4>
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

                {/* AI Experience */}
                {candidate.ai_coding_proficiency >= 7 && (
                  <div className="mb-4">
                    <div className="inline-flex items-center px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded">
                      <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      AI Expert
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex space-x-2">
                  <button
                    onClick={() => {
                      setSelectedCandidate(candidate);
                      setShowModal(true);
                    }}
                    className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-200 text-sm font-medium"
                  >
                    View Details
                  </button>
                  {candidate.resume_url && (
                    <button
                      onClick={() => {
                        // Convert Google Drive link to direct view link if needed
                        let resumeUrl = candidate.resume_url;
                        if (resumeUrl.includes('drive.google.com/file/d/')) {
                          const fileId = resumeUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)?.[1];
                          if (fileId) {
                            resumeUrl = `https://drive.google.com/file/d/${fileId}/view`;
                          }
                        }
                        window.open(resumeUrl, '_blank');
                      }}
                      className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 text-sm font-medium"
                    >
                      Resume
                    </button>
                  )}
                  <button
                    onClick={() => handleEmailContact(candidate)}
                    className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
                  >
                    Contact
                  </button>
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

      {/* Candidate Details Modal */}
      {showModal && selectedCandidate && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedCandidate.first_name} {selectedCandidate.last_name}
                </h2>
                <button
                  onClick={() => {
                    setShowModal(false);
                    setSelectedCandidate(null);
                  }}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Candidate Details */}
              <div className="space-y-6">
                {/* Basic Info */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm font-medium text-gray-600">Experience:</span>
                    <span className="ml-2 text-sm text-gray-900">{selectedCandidate.yoe} years</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Location:</span>
                    <span className="ml-2 text-sm text-gray-900">{selectedCandidate.current_location}</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Overall Score:</span>
                    <span className="ml-2 text-sm text-gray-900">{selectedCandidate.overall_score}/10</span>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-600">Status:</span>
                    <span className="ml-2 text-sm text-gray-900 capitalize">{selectedCandidate.status}</span>
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedCandidate.programming_languages?.map((lang, index) => (
                      <span key={index} className="inline-flex px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                {selectedCandidate.tools && selectedCandidate.tools.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Tools & Frameworks</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.tools.map((tool, index) => (
                        <span key={index} className="inline-flex px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Industry Experience */}
                {selectedCandidate.industry_experience && selectedCandidate.industry_experience.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Industry Experience</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.industry_experience.map((industry, index) => (
                        <span key={index} className="inline-flex px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                          {industry}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Previous Companies */}
                {selectedCandidate.previous_companies && selectedCandidate.previous_companies.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Previous Companies</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedCandidate.previous_companies.map((company, index) => (
                        <span key={index} className="inline-flex px-3 py-1 text-sm font-medium bg-gray-100 text-gray-800 rounded-full">
                          {company}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* AI Experience */}
                {selectedCandidate.ai_coding_proficiency >= 7 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">AI Experience</h3>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="font-medium text-purple-900">AI Coding Proficiency: {selectedCandidate.ai_coding_proficiency}/10</span>
                      </div>
                      {selectedCandidate.ai_experience && (
                        <p className="text-sm text-purple-800">{selectedCandidate.ai_experience}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Vetted Notes */}
                {selectedCandidate.vetted_notes && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Interview Notes</h3>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <p className="text-sm text-gray-700 whitespace-pre-wrap">{selectedCandidate.vetted_notes}</p>
                    </div>
                  </div>
                )}

                {/* Resume and Contact Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  {selectedCandidate.resume_url && (
                    <button
                      onClick={() => {
                        // Convert Google Drive link to direct view link if needed
                        let resumeUrl = selectedCandidate.resume_url;
                        if (resumeUrl.includes('drive.google.com/file/d/')) {
                          const fileId = resumeUrl.match(/\/file\/d\/([a-zA-Z0-9-_]+)/)?.[1];
                          if (fileId) {
                            resumeUrl = `https://drive.google.com/file/d/${fileId}/view`;
                          }
                        }
                        window.open(resumeUrl, '_blank');
                      }}
                      className="w-full bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-medium"
                    >
                      View Resume
                    </button>
                  )}
                  <button
                    onClick={() => {
                      handleEmailContact(selectedCandidate);
                      setShowModal(false);
                      setSelectedCandidate(null);
                    }}
                    className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
                  >
                    Contact About This Candidate
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimpleCandidatesPage;
