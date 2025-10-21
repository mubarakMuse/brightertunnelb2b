"use client";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

const ClientLogin = ({ isOpen, onClose, onLogin }) => {
  const [accessCode, setAccessCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      if (!accessCode.trim()) {
        throw new Error("Please enter your access code");
      }

      // Check if access code exists
      const { data: client, error: clientError } = await supabase
        .from("clients")
        .select("*")
        .eq("access_code", accessCode.trim().toUpperCase())
        .single();

      if (clientError || !client) {
        throw new Error("Invalid access code. Please check and try again.");
      }

      // Store client info in localStorage
      localStorage.setItem("client", JSON.stringify(client));
      
      onLogin(client);
      handleClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setAccessCode("");
    setError("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Client Login</h2>
          <button
            onClick={handleClose}
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

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Access Code
            </label>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent font-mono text-center text-lg"
              placeholder="Enter your access code"
              maxLength="6"
            />
            <p className="text-xs text-gray-500 mt-1">
              Enter the 6-character code you received when you registered
            </p>
          </div>

          <div className="bg-blue-50 rounded-lg p-4">
            <h3 className="font-medium text-blue-900 mb-2">Don&apos;t have an access code?</h3>
            <p className="text-sm text-blue-700">
              Contact us to get your company set up with access to our candidate pool.
            </p>
            <div className="text-sm text-blue-600 mt-2">
              <p>Email: mubarak@brightertunnel.com</p>
              <p>Phone: [Your contact number]</p>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Logging in..." : "Access Candidates"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ClientLogin;
