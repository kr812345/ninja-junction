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
      {/* Premium crystal grid background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div
              className="absolute inset-0 opacity-[0.12]"
              style={{
                  backgroundImage: `
                      linear-gradient(to right, #4F46E5 1px, transparent 1px),
                      linear-gradient(to bottom, #4F46E5 1px, transparent 1px)
                  `,
                  backgroundSize: '30px 30px',
              }}
          />
          <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] bg-indigo-500/[0.12] rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-cyan-500/[0.10] rounded-full blur-[100px]" />
          <div
              className="absolute inset-0"
              style={{
                  background: 'radial-gradient(ellipse at center, transparent 40%, var(--color-background) 80%)',
              }}
          />
          <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                  backgroundImage: 'radial-gradient(circle, #4F46E5 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
              }}
          />
      </div>

      <div className="container mx-auto py-16 px-4 relative pt-24 lg:pt-32 xl:pt-40 sm:pt-20 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h1 className="bold-heading text-5xl md:text-7xl mb-6">
            JOIN MEMBERSHIP
          </h1>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-[var(--color-primary)] mx-auto mb-4 lg:mb-6"></div>
          <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] font-serif italic max-w-2xl mx-auto px-4">
            Become a member to collaborate, contribute, and innovate together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white/80 backdrop-blur-md p-6 lg:p-8 rounded-3xl shadow-xl border border-black/5">
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">University / College</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. VIT, BITS, IIT ..."
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Program</label>
                <input
                  type="text"
                  name="program"
                  value={formData.program}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. B.Tech CSE"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Year</label>
                <input
                  type="text"
                  name="year"
                  value={formData.year}
                  onChange={handleChange}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. 2nd year"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Skills</label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="e.g. React, Node.js, UI/UX, ML"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Interests</label>
                <input
                  type="text"
                  name="interests"
                  value={formData.interests}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="Hackathons, Open Source, Startups, AI, etc."
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">GitHub</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="https://github.com/yourid"
                />
              </div>

              <div className="col-span-1">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">LinkedIn</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 text-sm lg:text-base focus:outline-none"
                  placeholder="https://linkedin.com/in/yourid"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-[var(--color-text-primary)] mb-2">Why do you want to join?</label>
                <textarea
                  name="reason"
                  value={formData.reason}
                  onChange={handleChange}
                  rows={5}
                  required
                  className="w-full p-3 lg:p-4 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent transition-all duration-200 hover:border-indigo-500/30 resize-none text-sm lg:text-base focus:outline-none"
                  placeholder="Tell us about yourself and what you’d like to do at Ninja Junction"
                />
              </div>

              <div className="md:col-span-2">
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={submitting}
                  className="w-full py-4 px-8 bg-[var(--color-primary)] text-white font-bold uppercase tracking-wider rounded-xl shadow-lg hover:bg-[var(--color-primary-dark)] hover:-translate-y-1 hover:shadow-xl transition-all duration-300 outline-none disabled:opacity-60 disabled:cursor-not-allowed"
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

