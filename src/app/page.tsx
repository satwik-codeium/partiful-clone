'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PartyInvite() {
  const [formData, setFormData] = useState({
    name: '',
    bringing: '',
    plusOne: 'no'
  });

  const [submitted, setSubmitted] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        staggerChildren: 0.1
      }
    },
    exit: { 
      opacity: 0, 
      y: -50,
      transition: { duration: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" as const }
    }
  };

  const buttonVariants = {
    hover: { 
      scale: 1.05,
      boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)",
      transition: { duration: 0.2 }
    },
    tap: { scale: 0.98 }
  };

  const successVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
        staggerChildren: 0.2
      }
    }
  };

  const celebrationVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    },
    bounce: {
      scale: [1, 1.2, 1],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 2
      }
    }
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            variants={successVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center"
          >
            <motion.div 
              variants={celebrationVariants}
              animate="bounce"
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <motion.h2 
              variants={itemVariants}
              className="text-3xl font-bold text-gray-800 mb-4"
            >
              Thank You!
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-gray-600 mb-2"
            >
              Your RSVP has been submitted successfully.
            </motion.p>
            <motion.p 
              variants={itemVariants}
              className="text-sm text-gray-500"
            >
              We can't wait to celebrate with you!
            </motion.p>
            <motion.button 
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setSubmitted(false)}
              className="mt-6 bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Another RSVP
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white rounded-2xl shadow-xl p-8 max-w-lg w-full"
          >
            <motion.div variants={itemVariants} className="text-center mb-8">
              <motion.div 
                className="text-6xl mb-4"
                animate={{ 
                  rotate: [0, -5, 5, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              >
                🎂
              </motion.div>
              <motion.h1 
                variants={itemVariants}
                className="text-4xl font-bold text-gray-800 mb-2"
              >
                Happy Birthday ABCD!
              </motion.h1>
              <motion.p 
                variants={itemVariants}
                className="text-gray-600 text-lg"
              >
                You're invited to celebrate with us!
              </motion.p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your full name"
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="bringing" className="block text-sm font-medium text-gray-700 mb-2">
                  What are you bringing to the party? *
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="bringing"
                  name="bringing"
                  value={formData.bringing}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="e.g., Cake, Drinks, Snacks, etc."
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="plusOne" className="block text-sm font-medium text-gray-700 mb-2">
                  Will you be bringing a plus one? *
                </label>
                <motion.select
                  whileFocus={{ scale: 1.02 }}
                  id="plusOne"
                  name="plusOne"
                  value={formData.plusOne}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                >
                  <option value="no">No</option>
                  <option value="yes">Yes</option>
                </motion.select>
              </motion.div>

              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                🎉 Submit RSVP
              </motion.button>
            </form>

            <motion.div 
              variants={itemVariants}
              className="mt-6 text-center text-sm text-gray-500"
            >
              <p>Can't wait to celebrate with you! 🥳</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

}
