'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchContacts, updateContactStatus, deleteContact } from '../../../Services/api.admin';
import { FiSearch, FiFilter, FiTrash2, FiMail, FiCheck, FiRefreshCcw } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function ContactsPage() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    try {
      setLoading(true);
      const res = await fetchContacts();
      setContacts(Array.isArray(res) ? res : res.contacts || []);
    } catch (err) {
      toast.error('Failed to load contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (id, status) => {
    try {
      await updateContactStatus(id, status);
      toast.success(`Marked as ${status}`);
      setContacts(contacts.map(c => c._id === id ? { ...c, status } : c));
    } catch (err) {
      toast.error('Failed to update status');
    }
  };

  const handleDelete = async (id) => {
    if(!window.confirm('Delete this message completely?')) return;
    try {
      await deleteContact(id);
      toast.success('Message deleted');
      setContacts(contacts.filter(c => c._id !== id));
    } catch (err) {
      toast.error('Failed to delete message');
    }
  };

  const filteredContacts = contacts.filter(c => {
    const s = c.name?.toLowerCase().includes(search.toLowerCase()) || c.email?.toLowerCase().includes(search.toLowerCase());
    const f = filter === 'all' || c.status === filter;
    return s && f;
  });

  const getStatusBadge = (status) => {
    if(status === 'new') return <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">New</span>;
    if(status === 'read') return <span className="bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Read</span>;
    if(status === 'replied') return <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Replied</span>;
    return <span className="bg-gray-500/10 text-gray-400 px-3 py-1 rounded-full text-xs font-bold uppercase">{status}</span>;
  }

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
            Inbox Messages
          </h1>
          <p className="text-gray-400 text-sm font-medium">Read and manage contact form submissions</p>
        </div>
        
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
          <div className="relative flex-1 md:w-64">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search by name or email..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono"
            />
          </div>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer"
          >
            <option value="all" className="bg-[#0f172a]">All Messages</option>
            <option value="new" className="bg-[#0f172a]">New Inbox</option>
            <option value="read" className="bg-[#0f172a]">Read</option>
            <option value="replied" className="bg-[#0f172a]">Replied</option>
          </select>
        </div>
      </div>

      <div className="space-y-4">
        {loading ? (
          <div className="flex justify-center py-20 px-6 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-md">
            <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce"></div>
          </div>
        ) : filteredContacts.length === 0 ? (
          <div className="bg-white/5 rounded-3xl border border-white/10 py-20 text-center text-gray-500 font-medium backdrop-blur-md">
            No messages found.
          </div>
        ) : (
          <AnimatePresence>
            {filteredContacts.map(contact => (
              <motion.div
                key={contact._id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={`bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 relative overflow-hidden group transition-colors ${contact.status === 'new' ? 'hover:bg-indigo-500/5 hover:border-indigo-500/30' : 'hover:bg-white/10'}`}
              >
                {contact.status === 'new' && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-purple-500"></div>
                )}
                
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Column - Meta */}
                  <div className="w-full lg:w-1/4 shrink-0 border-b lg:border-b-0 lg:border-r border-white/10 pb-4 lg:pb-0 lg:pr-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 flex items-center justify-center font-bold text-xl text-indigo-300 border border-white/10">
                          {contact.name?.charAt(0) || '?'}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{contact.name}</h4>
                          <span className="text-xs text-gray-500">{new Date(contact.createdAt).toLocaleDateString()}</span>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <a href={`mailto:${contact.email}`} className="text-sm font-medium text-indigo-400 hover:text-indigo-300 hover:underline transition-colors flex items-center gap-2">
                           <FiMail /> {contact.email}
                        </a>
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      {getStatusBadge(contact.status || 'new')}
                    </div>
                  </div>

                  {/* Right Column - Message & Actions */}
                  <div className="flex-1 flex flex-col justify-between">
                     <p className="text-gray-300 text-sm leading-relaxed whitespace-pre-wrap font-medium flex-1">
                        "{contact.message}"
                     </p>
                     
                     <div className="mt-6 flex items-center justify-end gap-3 pt-4 border-t border-white/5">
                        {contact.status === 'new' && (
                          <button onClick={() => handleStatusUpdate(contact._id, 'read')} className="flex items-center gap-2 px-4 py-2 bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                            <FiEye /> Mark Read
                          </button>
                        )}
                        {(contact.status === 'new' || contact.status === 'read') && (
                          <button onClick={() => handleStatusUpdate(contact._id, 'replied')} className="flex items-center gap-2 px-4 py-2 bg-blue-500/10 text-blue-400 hover:bg-blue-500/20 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                            <FiCheck /> Mark Replied
                          </button>
                        )}
                        <button onClick={() => handleDelete(contact._id)} className="flex items-center gap-2 px-4 py-2 text-gray-500 hover:text-red-400 hover:bg-red-400/10 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors ml-auto">
                           <FiTrash2 /> Delete
                        </button>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}
