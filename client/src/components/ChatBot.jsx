import React, { useState, useRef, useEffect } from 'react';
import api from '../services/api';

/**
 * XpenseFlow AI Chatbot — powered by Google Gemini
 * A floating chat widget that appears when the support_agent FAB is clicked.
 */
const ChatBot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([
    {
      role: 'model',
      text: "Hi! I'm XpenseFlow AI Assistant 👋\nI can help you with expense submissions, approval workflows, and policy questions.\n\nHow can I help you today?",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 200);
    }
  }, [isOpen]);

  const sendMessage = async () => {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    // Add user message
    const userMsg = { role: 'user', text: trimmed };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      // Build history for Gemini (skip the initial greeting)
      const history = messages.slice(1).map(m => ({
        role: m.role === 'model' ? 'model' : 'user',
        parts: [{ text: m.text }],
      }));

      const { data } = await api.post('/chat', {
        message: trimmed,
        history,
      });

      setMessages(prev => [
        ...prev,
        { role: 'model', text: data.reply || 'Sorry, something went wrong.' },
      ]);
    } catch (err) {
      const errorMsg = err.response?.data?.error || err.message || 'Failed to connect';
      setMessages(prev => [
        ...prev,
        { role: 'model', text: `⚠️ ${errorMsg}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed bottom-24 right-6 z-[60] w-[380px] max-h-[520px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden"
      style={{ animation: 'chatSlideUp 0.25s ease-out' }}
    >
      {/* Header */}
      <div className="bg-primary px-5 py-4 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-white/20 rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-lg">smart_toy</span>
          </div>
          <div>
            <h3 className="text-white font-black text-sm">XpenseFlow AI</h3>
            <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest">Powered by Gemini</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-white/60 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 min-h-[280px] max-h-[340px] bg-slate-50/50">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] px-4 py-3 rounded-2xl text-[13px] leading-relaxed ${
                msg.role === 'user'
                  ? 'bg-primary text-white rounded-br-sm font-medium'
                  : 'bg-white text-slate-700 rounded-bl-sm border border-slate-100 shadow-sm'
              }`}
              style={{ whiteSpace: 'pre-wrap' }}
            >
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-white text-slate-400 px-4 py-3 rounded-2xl rounded-bl-sm border border-slate-100 shadow-sm">
              <div className="flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                <div className="w-2 h-2 bg-primary/40 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="border-t border-slate-100 px-4 py-3 bg-white flex items-center gap-2 flex-shrink-0">
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about expenses, policies..."
          className="flex-1 text-sm border-none outline-none bg-transparent placeholder-slate-400 text-slate-800 font-medium"
          disabled={loading}
        />
        <button
          onClick={sendMessage}
          disabled={!input.trim() || loading}
          className="w-9 h-9 bg-primary text-white rounded-xl flex items-center justify-center hover:brightness-110 active:scale-95 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <span className="material-symbols-outlined text-lg">send</span>
        </button>
      </div>

      {/* Inline animation keyframe */}
      <style>{`
        @keyframes chatSlideUp {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default ChatBot;
