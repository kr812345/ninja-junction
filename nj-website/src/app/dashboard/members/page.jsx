'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchMembers, updateMemberStatus, deleteMember, addMember } from '../../../Services/api.admin';
import { FiSearch, FiFilter, FiTrash2, FiX, FiEye, FiPlus } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function MembersPage() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newMember, setNewMember] = useState({
    name: '', email: '', university: '', program: '', year: '', 
    location: { city: '', country: '' }, github: '', linkedin: '', 
    skills: '', interests: '', reason: ''
  });

  useEffect(() => {
    loadMembers();
  }, []);

  const loadMembers = async () => {
    try {
      setLoading(true);
      const res = await fetchMembers();
      setMembers(res.members || res || []);
    } catch (err) {
      toast.error('Failed to load members: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const payload = {
      ...newMember,
      github: newMember.github?.trim() || undefined,
      linkedin: newMember.linkedin?.trim() || undefined,
      skills: newMember.skills?.trim() || undefined,
      interests: newMember.interests?.trim() || undefined,
    };
    try {
      const data = await addMember(payload);
      toast.success('Member added successfully!');
      // Assuming data is the full member or { member: {...} }
      setMembers([data.member || data, ...members]);
      setShowAddModal(false);
      setNewMember({
        name: '', email: '', university: '', program: '', year: '',
        location: { city: '', country: '' }, github: '', linkedin: '',
        skills: '', interests: '', reason: ''
      });
    } catch (err) {
      toast.error('Failed to add member: ' + err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = async (id, newStatus) => {
    try {
      await updateMemberStatus(id, newStatus);
      toast.success(`Status updated to ${newStatus}`);
      setMembers(members.map(m => m._id === id ? { ...m, status: newStatus } : m));
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this member application? This action cannot be reversed.')) return;
    try {
      await deleteMember(id);
      toast.success('Member deleted successfully');
      setMembers(members.filter(m => m._id !== id));
      if (selectedMember && selectedMember._id === id) setSelectedMember(null);
    } catch (err) {
      toast.error('Failed to delete member');
    }
  };

  const filteredMembers = members.filter(m => {
    const matchesSearch = 
      m.name?.toLowerCase().includes(search.toLowerCase()) || 
      m.email?.toLowerCase().includes(search.toLowerCase()) ||
      m.university?.toLowerCase().includes(search.toLowerCase()) ||
      m.skills?.toLowerCase().includes(search.toLowerCase());
    const matchesFilter = filterStatus === 'all' || m.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status) => {
    switch(status) {
      case 'accepted': return 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20';
      case 'rejected': return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'reviewed': return 'bg-blue-500/10 text-blue-400 border-blue-500/20';
      default: return 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'; // pending
    }
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
            Members Directory
          </h1>
          <p className="text-gray-400 text-sm font-medium">Manage community applications and review members</p>
        </div>
        
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center justify-center gap-2 px-5 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg active:scale-95 border border-indigo-400/50"
          >
            <FiPlus className="text-lg text-white" />
            <span>Add Member</span>
          </button>
          
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search by name, email, or skills..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono"
            />
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-4 pr-10 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all cursor-pointer h-full"
            >
              <option value="all" className="bg-[#0f172a] text-gray-300">All Status</option>
              <option value="pending" className="bg-[#0f172a] text-gray-300">Pending</option>
              <option value="reviewed" className="bg-[#0f172a] text-gray-300">Reviewed</option>
              <option value="accepted" className="bg-[#0f172a] text-gray-300">Accepted</option>
              <option value="rejected" className="bg-[#0f172a] text-gray-300">Rejected</option>
            </select>
            <FiFilter className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table Area */}
      <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[800px]">
            <thead>
              <tr className="border-b border-white/10 text-xs uppercase tracking-wider text-gray-400 bg-white/5">
                <th className="px-6 py-4 font-medium">Applicant</th>
                <th className="px-6 py-4 font-medium">University / Location</th>
                <th className="px-6 py-4 font-medium">Applied On</th>
                <th className="px-6 py-4 font-medium text-center">Status</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {loading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-16 text-center">
                     <div className="flex justify-center space-x-2">
                       <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                       <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                       <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce"></div>
                    </div>
                  </td>
                </tr>
              ) : filteredMembers.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-16 text-center text-gray-500 font-medium">
                    {search !== '' ? "No members found matching your search criteria." : "No applications are currently registered."}
                  </td>
                </tr>
              ) : (
                <AnimatePresence>
                  {filteredMembers.map((member) => (
                    <motion.tr 
                      key={member._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="hover:bg-white/5 transition-colors group"
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center font-bold text-indigo-300 border border-white/10 shrink-0 uppercase">
                            {member.name?.charAt(0) || '?'}
                          </div>
                          <div>
                            <div className="font-medium text-white group-hover:text-indigo-300 transition-colors">{member.name || 'Unnamed'}</div>
                            <div className="text-xs text-gray-400 mt-0.5">{member.email}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-300 font-medium">{member.university || 'N/A'}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{member.location?.city ? `${member.location.city}, ${member.location.country}` : 'Location unknown'}</div>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-400">
                        {member.createdAt ? new Date(member.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' }) : 'Unknown'}
                      </td>
                      <td className="px-6 py-4 text-center">
                        <select 
                            value={member.status || 'pending'}
                            onChange={(e) => handleStatusChange(member._id, e.target.value)}
                            className={`text-xs bg-black/40 border border-white/10 rounded-full px-3 py-1.5 focus:outline-none focus:border-indigo-500 cursor-pointer appearance-none text-center ${getStatusColor(member.status || 'pending')}`}
                          >
                            <option value="pending">Pending</option>
                            <option value="reviewed">Reviewed</option>
                            <option value="accepted">Accepted</option>
                            <option value="rejected">Rejected</option>
                          </select>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-1">
                          <button 
                            onClick={() => setSelectedMember(member)}
                            className="p-2.5 text-gray-400 hover:text-indigo-400 hover:bg-white/10 rounded-xl transition-all"
                            title="View Full Details"
                          >
                            <FiEye className="text-lg" />
                          </button>
                          
                          <button 
                            onClick={() => handleDelete(member._id)}
                            className="p-2.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-xl transition-all ml-1"
                            title="Delete Permanently"
                          >
                            <FiTrash2 className="text-lg" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add New Member Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowAddModal(false)}
              className="absolute inset-0 bg-[#02050a]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-[#0f172a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Add New Member</h2>
                <button onClick={() => setShowAddModal(false)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors group">
                  <FiX className="text-lg group-hover:rotate-90 transition-transform" />
                </button>
              </div>
              
              <form onSubmit={handleAddMember} className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Full Name *</label>
                    <input type="text" required value={newMember.name} onChange={(e) => setNewMember({...newMember, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Email *</label>
                    <input type="email" required value={newMember.email} onChange={(e) => setNewMember({...newMember, email: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">University *</label>
                    <input type="text" required value={newMember.university} onChange={(e) => setNewMember({...newMember, university: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Program *</label>
                      <input type="text" required value={newMember.program} onChange={(e) => setNewMember({...newMember, program: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                    </div>
                    <div>
                      <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Year *</label>
                      <input type="text" required value={newMember.year} onChange={(e) => setNewMember({...newMember, year: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">City *</label>
                    <input type="text" required value={newMember.location.city} onChange={(e) => setNewMember({...newMember, location: {...newMember.location, city: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Country *</label>
                    <input type="text" required value={newMember.location.country} onChange={(e) => setNewMember({...newMember, location: {...newMember.location, country: e.target.value}})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">GitHub Link</label>
                    <input type="url" value={newMember.github} onChange={(e) => setNewMember({...newMember, github: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" placeholder="https://github.com/..." />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">LinkedIn Link</label>
                    <input type="url" value={newMember.linkedin} onChange={(e) => setNewMember({...newMember, linkedin: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" placeholder="https://linkedin.com/in/..." />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Skills (comma separated)</label>
                  <input type="text" value={newMember.skills} onChange={(e) => setNewMember({...newMember, skills: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                </div>
                
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Interests</label>
                  <textarea value={newMember.interests} onChange={(e) => setNewMember({...newMember, interests: e.target.value})} rows="2" className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm"></textarea>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Reason for Joining *</label>
                  <textarea required value={newMember.reason} onChange={(e) => setNewMember({...newMember, reason: e.target.value})} rows="3" className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm"></textarea>
                </div>

                <div className="pt-6 border-t border-white/10 flex justify-end gap-4">
                  <button type="button" onClick={() => setShowAddModal(false)} className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 rounded-xl text-sm font-bold bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-lg active:scale-95 disabled:opacity-50">
                    {isSubmitting ? 'Adding...' : 'Add Member'}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setSelectedMember(null)}
              className="absolute inset-0 bg-[#02050a]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-[#0f172a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Application Profile</h2>
                <button onClick={() => setSelectedMember(null)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors group">
                  <FiX className="text-lg group-hover:rotate-90 transition-transform" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 space-y-8 overflow-y-auto custom-scrollbar flex-1 pb-10">
                <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                   <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center font-bold text-3xl text-indigo-300 border border-white/10 uppercase shadow-inner">
                      {selectedMember.name?.charAt(0) || '?'}
                   </div>
                   <div>
                      <h3 className="text-2xl font-bold text-white tracking-tight">{selectedMember.name}</h3>
                      <p className="text-indigo-400 mt-1 hover:underline"><a href={`mailto:${selectedMember.email}`}>{selectedMember.email}</a></p>
                      <div className="mt-2 inline-block">
                         <span className={`px-3 py-1 text-xs font-bold rounded-full border tracking-wide uppercase ${getStatusColor(selectedMember.status)}`}>
                            {selectedMember.status}
                         </span>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">University</label>
                    <p className="text-gray-300 mt-1 font-medium">{selectedMember.university || 'Not Provided'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Program / Year</label>
                    <p className="text-gray-300 mt-1 font-medium">{selectedMember.program || 'Not Provided'} {selectedMember.year ? `- ${selectedMember.year}` : ''}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Location</label>
                    <p className="text-gray-300 mt-1 font-medium">{selectedMember.location?.city ? `${selectedMember.location.city}, ${selectedMember.location.country}` : 'Not Provided'}</p>
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em]">Social Links</label>
                    <div className="flex gap-4 mt-1 font-medium">
                      {selectedMember.github ? <a href={selectedMember.github} target="_blank" className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors flex items-center gap-1">GitHub ↗</a> : <span className="text-gray-600">No GitHub</span>}
                      {selectedMember.linkedin ? <a href={selectedMember.linkedin} target="_blank" className="text-blue-400 hover:text-blue-300 hover:underline transition-colors flex items-center gap-1">LinkedIn ↗</a> : <span className="text-gray-600">No LinkedIn</span>}
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] block mb-3">Skills / Tech Stack</label>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.skills ? selectedMember.skills.split(',').map((skill, i) => (
                      <span key={i} className="bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 px-3.5 py-1.5 rounded-full text-xs font-medium backdrop-blur-sm">
                        {skill.trim()}
                      </span>
                    )) : <span className="text-gray-500 text-sm font-medium italic">No specific skills listed</span>}
                  </div>
                </div>
                
                {selectedMember.interests && (
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] block mb-2">Interests</label>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedMember.interests}</p>
                  </div>
                )}

                <div className="bg-gradient-to-br from-white/5 to-transparent -mx-6 md:-mx-8 px-6 md:px-8 py-6 border-t border-white/5">
                  <label className="text-[10px] text-gray-500 uppercase font-bold tracking-[0.2em] mb-3 block">Reason for Joining</label>
                  <p className="text-gray-300 text-sm leading-relaxed italic bg-black/20 p-5 rounded-2xl border border-white/5 shadow-inner">
                    "{selectedMember.reason || 'No specific reason provided'}"
                  </p>
                </div>
              </div>
              
              <div className="p-5 border-t border-white/10 bg-black/40 flex justify-end gap-4 shrink-0 backdrop-blur-md">
                 <button onClick={() => setSelectedMember(null)} className="px-6 py-2 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                   Close View
                 </button>
                 <select 
                    value={selectedMember.status || 'pending'}
                    onChange={(e) => {
                      handleStatusChange(selectedMember._id, e.target.value);
                      setSelectedMember({...selectedMember, status: e.target.value});
                    }}
                    className={`px-5 py-2.5 rounded-xl text-sm font-bold border focus:outline-none appearance-none cursor-pointer tracking-wide uppercase transition-all shadow-lg ${getStatusColor(selectedMember.status || 'pending')}`}
                  >
                    <option value="pending" className="bg-[#0f172a] text-white">Return to Pending</option>
                    <option value="reviewed" className="bg-[#0f172a] text-white">Mark as Reviewed</option>
                    <option value="accepted" className="bg-[#0f172a] text-emerald-400">Accept Member</option>
                    <option value="rejected" className="bg-[#0f172a] text-red-400">Reject Member</option>
                 </select>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
