'use client'

import React, { useState } from 'react'
import { motion } from 'motion/react'
import { submitApplication } from '../../Services/Join'
import toast, { Toaster } from 'react-hot-toast'

export default function Join() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    university: '',
    program: '',
    year: '',
    skills: '',
    interests: '',
    github: '',
    linkedin: '',
    reason: ''
  })

  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await submitApplication(formData)

      if (res.success === false) {
        // Handle validation errors from the backend
        const errorMessage = res.errors ? res.errors.join(', ') : res.message
        throw new Error(errorMessage)
      }

      toast.success(res?.message || 'Application submitted! We will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        university: '',
        program: '',
        year: '',
        skills: '',
        interests: '',
        github: '',
        linkedin: '',
        reason: ''
      })
    } catch (err) {
      toast.error(err?.message || 'Failed to submit. Please try again later.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-[var(--color-background)] relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-20 right-20 w-[300px] h-[300px] bg-primary/20 rounded-full -z-10 blur-2xl sm:w-[200px] sm:h-[200px] sm:top-10 sm:right-10"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute bottom-20 left-10 w-[200px] h-[200px] bg-blue-300/30 rounded-full -z-10 blur-xl sm:w-[150px] sm:h-[150px] sm:bottom-10 sm:left-5"
      />

      <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 gradient-text">
            Join Ninja Junction
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-primary mx-auto mb-4 lg:mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Become a member to collaborate, contribute, and innovate together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-sm p-6 lg:p-8 rounded-2xl shadow-xl border border-primary/10">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">University / College</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. VIT, BITS, IIT ..."
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Program</label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. B.Tech CSE"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. 2nd year"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. React, Node.js, UI/UX, ML"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Interests</label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="Hackathons, Open Source, Startups, AI, etc."
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="https://github.com/yourid"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 text-sm lg:text-base focus:outline-none"
                  placeholder="https://linkedin.com/in/yourid"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Why do you want to join?</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 lg:p-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 hover:border-primary/50 resize-none text-sm lg:text-base focus:outline-none"
                  placeholder="Tell us about yourself and what you’d like to do at Ninja Junction"
                />
              </div>

              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                  className="w-full bg-primary text-white py-3 lg:py-4 px-6 lg:px-8 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-200 shadow-lg hover:shadow-xl text-sm lg:text-base disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Submitting…' : 'Apply for Membership'}
                </motion.button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>

      {/* <Toaster position="top-center" reverseOrder={false} /> */}
    </div>
  )
}

