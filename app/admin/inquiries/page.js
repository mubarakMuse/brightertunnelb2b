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

const InquiriesPage = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [selectedInquiry, setSelectedInquiry] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);

  // Fetch inquiries with candidate details
  const fetchInquiries = async () => {
    try {
      const { data, error } = await supabase
        .from('candidate_inquiries_with_details')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setInquiries(data || []);
    } catch (error) {
      toast.error("Error fetching inquiries: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  // Update inquiry status
  const updateInquiryStatus = async (inquiryId, newStatus) => {
    try {
      const { error } = await supabase
        .from('candidate_inquiries')
        .update({ status: newStatus })
        .eq('id', inquiryId);

      if (error) throw error;
      
      toast.success("Status updated successfully!");
      fetchInquiries();
    } catch (error) {
      toast.error("Error updating status: " + error.message);
    }
  };

  // Filter inquiries
  const filteredInquiries = inquiries.filter(inquiry => 
    filterStatus === "all" || inquiry.status === filterStatus
  );

  // Get status color
  const getStatusColor = (status) => {
    switch (status) {
      case 'new': return 'bg-blue-100 text-blue-800';
      case 'contacted': return 'bg-yellow-100 text-yellow-800';
      case 'interested': return 'bg-green-100 text-green-800';
      case 'not_interested': return 'bg-red-100 text-red-800';
      case 'hired': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (loading) {
    return (
      <AdminAuth>
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading inquiries...</p>
          </div>
        </div>
      </AdminAuth>
    );
  }

  return (
    <AdminAuth>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Client Inquiries</h1>
            <p className="mt-2 text-gray-600">Manage inquiries from companies interested in your candidates</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="text-2xl font-bold text-blue-600">
                {inquiries.filter(i => i.status === 'new').length}
              </div>
              <div className="text-sm text-gray-600">New</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="text-2xl font-bold text-yellow-600">
                {inquiries.filter(i => i.status === 'contacted').length}
              </div>
              <div className="text-sm text-gray-600">Contacted</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="text-2xl font-bold text-green-600">
                {inquiries.filter(i => i.status === 'interested').length}
              </div>
              <div className="text-sm text-gray-600">Interested</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="text-2xl font-bold text-red-600">
                {inquiries.filter(i => i.status === 'not_interested').length}
              </div>
              <div className="text-sm text-gray-600">Not Interested</div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
              <div className="text-2xl font-bold text-purple-600">
                {inquiries.filter(i => i.status === 'hired').length}
              </div>
              <div className="text-sm text-gray-600">Hired</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="new">New</option>
                  <option value="contacted">Contacted</option>
                  <option value="interested">Interested</option>
                  <option value="not_interested">Not Interested</option>
                  <option value="hired">Hired</option>
                </select>
              </div>
              <div className="text-sm text-gray-600">
                {filteredInquiries.length} inquiry{filteredInquiries.length !== 1 ? 'ies' : ''} found
              </div>
            </div>
          </div>

          {/* Inquiries Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Candidate</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {inquiry.company_name}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {inquiry.first_name} {inquiry.last_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {inquiry.yoe} years • {inquiry.overall_score}/10
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div>
                          <div className="text-sm font-medium text-gray-900">
                            {inquiry.contact_name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {inquiry.email}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(inquiry.status)}`}>
                          {inquiry.status.replace('_', ' ')}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {new Date(inquiry.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => {
                              setSelectedInquiry(inquiry);
                              setShowDetailsModal(true);
                            }}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            View
                          </button>
                          <select
                            value={inquiry.status}
                            onChange={(e) => updateInquiryStatus(inquiry.id, e.target.value)}
                            className="text-sm border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="new">New</option>
                            <option value="contacted">Contacted</option>
                            <option value="interested">Interested</option>
                            <option value="not_interested">Not Interested</option>
                            <option value="hired">Hired</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredInquiries.length === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No inquiries found</h3>
                <p className="mt-1 text-sm text-gray-500">Inquiries from companies will appear here.</p>
              </div>
            )}
          </div>
        </div>

        {/* Inquiry Details Modal */}
        {showDetailsModal && selectedInquiry && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Inquiry Details</h2>
                  <button
                    onClick={() => {
                      setShowDetailsModal(false);
                      setSelectedInquiry(null);
                    }}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {/* Company Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Company Information</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Company:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.company_name}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Contact:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.contact_name}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Email:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.email}</span>
                      </div>
                      {selectedInquiry.phone && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Phone:</span>
                          <span className="ml-2 text-sm text-gray-900">{selectedInquiry.phone}</span>
                        </div>
                      )}
                      <div>
                        <span className="text-sm font-medium text-gray-600">Status:</span>
                        <span className={`ml-2 inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(selectedInquiry.status)}`}>
                          {selectedInquiry.status.replace('_', ' ')}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Date:</span>
                        <span className="ml-2 text-sm text-gray-900">
                          {new Date(selectedInquiry.created_at).toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-gray-900">Candidate Information</h3>
                    <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-600">Name:</span>
                        <span className="ml-2 text-sm text-gray-900">
                          {selectedInquiry.first_name} {selectedInquiry.last_name}
                        </span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Experience:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.yoe} years</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Location:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.current_location}</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Score:</span>
                        <span className="ml-2 text-sm text-gray-900">{selectedInquiry.overall_score}/10</span>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-600">Skills:</span>
                        <span className="ml-2 text-sm text-gray-900">
                          {selectedInquiry.programming_languages?.join(', ')}
                        </span>
                      </div>
                      {selectedInquiry.tools && selectedInquiry.tools.length > 0 && (
                        <div>
                          <span className="text-sm font-medium text-gray-600">Tools:</span>
                          <span className="ml-2 text-sm text-gray-900">
                            {selectedInquiry.tools.join(', ')}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Message</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-sm text-gray-900 whitespace-pre-wrap">
                      {selectedInquiry.message}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <a
                      href={`mailto:${selectedInquiry.email}?subject=Re: Inquiry about ${selectedInquiry.first_name} ${selectedInquiry.last_name}&body=Hi ${selectedInquiry.contact_name},%0A%0AThank you for your interest in ${selectedInquiry.first_name} ${selectedInquiry.last_name}.%0A%0A`}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm"
                    >
                      Reply via Email
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText(selectedInquiry.email);
                        toast.success('Email copied to clipboard');
                      }}
                      className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200 text-sm"
                    >
                      Copy Email
                    </button>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600">Status:</span>
                    <select
                      value={selectedInquiry.status}
                      onChange={(e) => {
                        updateInquiryStatus(selectedInquiry.id, e.target.value);
                        setSelectedInquiry(prev => ({ ...prev, status: e.target.value }));
                      }}
                      className="px-3 py-1 border border-gray-300 rounded text-sm"
                    >
                      <option value="new">New</option>
                      <option value="contacted">Contacted</option>
                      <option value="interested">Interested</option>
                      <option value="not_interested">Not Interested</option>
                      <option value="hired">Hired</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminAuth>
  );
};

export default InquiriesPage;



