'use client';

import { useState } from 'react';

export default function PartyInvite() {
  const [formData, setFormData] = useState({
    name: '',
    bringing: '',
    plusOne: 'no'
  });

  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('RSVP Submitted:', formData);
    setSubmitted(true);
    // Here you would typically send the data to a server
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
          <p className="text-gray-600 mb-2">Your RSVP has been submitted successfully.</p>
          <p className="text-sm text-gray-500">We can't wait to celebrate with you!</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
          >
            Submit Another RSVP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full">
        {/* Birthday Title */}
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎂</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Happy Birthday ABCD!
          </h1>
          <p className="text-gray-600 text-lg">
            You're invited to celebrate with us!
          </p>
        </div>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="bringing" className="block text-sm font-medium text-gray-700 mb-2">
              What are you bringing to the party? *
            </label>
            <input
              type="text"
              id="bringing"
              name="bringing"
              value={formData.bringing}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
              placeholder="e.g., Cake, Drinks, Snacks, etc."
            />
          </div>

          <div>
            <label htmlFor="plusOne" className="block text-sm font-medium text-gray-700 mb-2">
              Will you be bringing a plus one? *
            </label>
            <select
              id="plusOne"
              name="plusOne"
              value={formData.plusOne}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
            >
              <option value="no">No</option>
              <option value="yes">Yes</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            🎉 Submit RSVP
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Can't wait to celebrate with you! 🥳</p>
        </div>
      </div>
    </div>
  );
}
