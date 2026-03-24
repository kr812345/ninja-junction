'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchEvents, createEvent, updateEvent, deleteEvent } from '../../../Services/api.admin';
import { FiSearch, FiEdit2, FiTrash2, FiX, FiPlus, FiCalendar } from 'react-icons/fi';
import toast from 'react-hot-toast';

export default function EventsPage() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [formData, setFormData] = useState({
    id: null,
    name: '',
    description: '',
    image: '',
    sponsor: '',
    timestamp: ''
  });

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    try {
      setLoading(true);
      const res = await fetchEvents();
      // Ensure backend array maps over successfully
      setEvents(Array.isArray(res) ? res : res.events || []);
    } catch (err) {
      toast.error('Failed to load events: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setIsEditing(false);
    setFormData({ id: null, name: '', description: '', image: '', sponsor: '', timestamp: '' });
    setShowModal(true);
  };

  const openEditModal = (event) => {
    setIsEditing(true);
    setFormData({
      id: event._id,
      name: event.name || '',
      description: event.description || '',
      image: event.image || '',
      sponsor: event.sponsor || '',
      timestamp: event.timestamp ? new Date(event.timestamp).toISOString().slice(0, 16) : ''
    });
    setShowModal(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      if (isEditing) {
        const { id, ...dataToUpdate } = formData;
        const res = await updateEvent(id, dataToUpdate);
        toast.success('Event updated!');
        setEvents(events.map(ev => ev._id === id ? res.event || res : ev));
        // Force a data refresh just in case 
        loadEvents();
      } else {
        const { id, ...dataToCreate } = formData;
        const res = await createEvent(dataToCreate);
        toast.success('Event created!');
        setEvents([res.event || res, ...events]);
        loadEvents();
      }
      setShowModal(false);
    } catch (err) {
      toast.error(err.message || 'Operation failed');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm('Delete this event permanently?')) return;
    try {
      await deleteEvent(id);
      toast.success('Event deleted');
      setEvents(events.filter(e => e._id !== id));
    } catch (err) {
      toast.error('Delete failed');
    }
  };

  const filteredEvents = events.filter(e => 
    e.name?.toLowerCase().includes(search.toLowerCase()) || 
    e.sponsor?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto pb-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent mb-1">
            Events Manager
          </h1>
          <p className="text-gray-400 text-sm font-medium">Create, edit, and organize community events</p>
        </div>
        
        <div className="flex flex-col md:flex-row w-full md:w-auto gap-3">
          <button 
            onClick={openAddModal}
            className="flex items-center justify-center gap-2 px-5 py-2.5 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-bold rounded-xl transition-all shadow-lg active:scale-95 border border-indigo-400/50"
          >
            <FiPlus className="text-lg" />
            <span>New Event</span>
          </button>
          
          <div className="relative flex-1 md:w-72">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input 
              type="text"
              placeholder="Search events..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all font-mono"
            />
          </div>
        </div>
      </div>

      {/* Events Grid */}
      {loading ? (
        <div className="flex justify-center py-20">
           <div className="w-4 h-4 rounded-full bg-indigo-500 animate-bounce"></div>
        </div>
      ) : filteredEvents.length === 0 ? (
        <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl py-16 text-center text-gray-500 font-medium">
          {search ? "No events matched your search." : "No events created yet."}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filteredEvents.map(event => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-xl group flex flex-col"
              >
                <div className="h-48 w-full bg-black/40 relative overflow-hidden shrink-0">
                  {event.image ? (
                    <img src={event.image} alt={event.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 bg-gradient-to-br from-indigo-500/10 to-transparent">
                       <FiCalendar className="text-4xl mb-2 opacity-50" />
                       <span className="text-xs uppercase tracking-widest font-bold">No Image</span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button onClick={() => openEditModal(event)} className="p-2 bg-black/60 backdrop-blur-md text-gray-300 hover:text-white rounded-lg hover:bg-indigo-500 transition-colors">
                      <FiEdit2 />
                    </button>
                    <button onClick={() => handleDelete(event._id)} className="p-2 bg-black/60 backdrop-blur-md text-gray-300 hover:text-white rounded-lg hover:bg-red-500 transition-colors">
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white line-clamp-1 group-hover:text-indigo-300 transition-colors">{event.name}</h3>
                  </div>
                  
                  <div className="text-xs text-indigo-400 font-mono mb-3">
                    {new Date(event.timestamp).toLocaleString(undefined, { weekday: 'short', month: 'short', day: 'numeric', hour: '2-digit', minute:'2-digit' })}
                  </div>
                  
                  <p className="text-sm text-gray-400 line-clamp-3 mb-4 flex-1">
                    {event.description}
                  </p>
                  
                  {event.sponsor && (
                    <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[10px] text-gray-600 uppercase font-bold tracking-widest">Sponsored By</span>
                      <span className="text-xs text-emerald-400 font-medium bg-emerald-400/10 px-2 py-1 rounded-md">{event.sponsor}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}

      {/* Modal Form */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-[#02050a]/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="bg-[#0f172a] border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-3xl w-full max-w-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-white/5 shrink-0">
                <h2 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                  {isEditing ? 'Edit Event' : 'Create Event'}
                </h2>
                <button onClick={() => setShowModal(false)} className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                  <FiX className="text-lg" />
                </button>
              </div>
              
              <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 space-y-5">
                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Event Name *</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Date & Time *</label>
                    <input type="datetime-local" required value={formData.timestamp} onChange={(e) => setFormData({...formData, timestamp: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Sponsor</label>
                    <input type="text" value={formData.sponsor} onChange={(e) => setFormData({...formData, sponsor: e.target.value})} className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Image URL *</label>
                  <input type="url" required value={formData.image} onChange={(e) => setFormData({...formData, image: e.target.value})} placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm" />
                </div>

                <div>
                  <label className="text-xs text-gray-500 uppercase font-bold tracking-wider mb-1 block">Description *</label>
                  <textarea required value={formData.description} onChange={(e) => setFormData({...formData, description: e.target.value})} rows="4" className="w-full bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-white focus:outline-none focus:border-indigo-500 text-sm"></textarea>
                </div>
                
                <div className="pt-6 border-t border-white/10 flex justify-end gap-3">
                  <button type="button" onClick={() => setShowModal(false)} className="px-6 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/10">
                    Cancel
                  </button>
                  <button type="submit" disabled={isSubmitting} className="px-6 py-2.5 rounded-xl text-sm font-bold bg-indigo-500 hover:bg-indigo-600 text-white transition-all shadow-lg active:scale-95 disabled:opacity-50">
                    {isSubmitting ? 'Saving...' : (isEditing ? 'Update Event' : 'Publish')}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
