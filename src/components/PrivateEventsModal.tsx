import React, { useState } from 'react';
import { X, Check, Users, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface PrivateEventsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivateEventsModal: React.FC<PrivateEventsModalProps> = ({ isOpen, onClose }) => {
  const [eventType, setEventType] = useState('Intimate Celebration / Birthday');
  const [expectedGuests, setExpectedGuests] = useState('15 - 30 Guests');
  const [preferredDate, setPreferredDate] = useState('');
  const [hostName, setHostName] = useState('');
  const [hostPhone, setHostPhone] = useState('');
  const [customNotes, setCustomNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hostName.trim() || !hostPhone.trim()) return;
    setSubmitted(true);
  };

  const whatsappInquiryUrl = () => {
    const text = encodeURIComponent(
      `Hello Koi Cafe & Social, I would like to inquire about hosting a private event:\n\nHost: ${hostName}\nPhone: ${hostPhone}\nType: ${eventType}\nGuests: ${expectedGuests}\nPreferred Date: ${preferredDate || 'Flexible'}\nNotes: ${customNotes || 'None'}`
    );
    return `https://wa.me/919910750890?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#24211E]/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-lg bg-[#FAF7F2] rounded-2xl shadow-warm-lg border border-[#24211E]/12 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#24211E]/10 flex items-center justify-between bg-[#F4EFE6]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C756B]">
              Bespoke Gatherings
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#24211E] mt-0.5">
              Private Events &amp; Courtyard Buyouts
            </h3>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="p-2 text-[#7C756B] hover:text-[#24211E] rounded-md transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <p className="text-xs text-[#554F47] leading-relaxed font-light">
                From quiet morning brand launches and architectural book club circles to candlelit birthday dinners and family anniversaries, our courtyard and arched veranda offer an unforgettable backdrop.
              </p>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                  Type of Gathering
                </label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                >
                  <option value="Intimate Celebration / Birthday">Intimate Celebration / Birthday</option>
                  <option value="Family Anniversary Dinner">Family Anniversary Dinner</option>
                  <option value="Creative Workshop / Book Club">Creative Workshop / Book Reading</option>
                  <option value="Corporate Coffee & Mixer">Corporate Coffee &amp; Team Mixer</option>
                  <option value="Editorial / Brand Photography Session">Editorial / Brand Photography Session</option>
                  <option value="Full Sanctuary Buyout">Full Sanctuary Buyout</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Estimated Guests
                  </label>
                  <select
                    value={expectedGuests}
                    onChange={(e) => setExpectedGuests(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  >
                    <option value="10 - 20 Guests">10 - 20 Guests</option>
                    <option value="20 - 40 Guests">20 - 40 Guests</option>
                    <option value="40 - 70 Guests">40 - 70 Guests (Courtyard + Lounge)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Host Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Vikramaditya"
                    value={hostName}
                    onChange={(e) => setHostName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Host Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 99107 50890"
                    value={hostPhone}
                    onChange={(e) => setHostPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                  Custom Menu or Styling Requests
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Sourdough pizza course, pour-over coffee bar, custom floral decoration"
                  value={customNotes}
                  onChange={(e) => setCustomNotes(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#24211E] hover:bg-[#C26747] text-[#FAF7F2] rounded-xl transition-all shadow-warm-md flex items-center justify-center gap-2"
              >
                <span>Submit Private Event Inquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </form>
          ) : (
            <div className="text-center py-6 space-y-5">
              <div className="w-12 h-12 mx-auto rounded-full bg-[#5D634E]/10 text-[#5D634E] flex items-center justify-center">
                <Check className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-2xl font-serif text-[#24211E]">
                  Inquiry Received, {hostName}
                </h4>
                <p className="text-xs text-[#554F47] mt-1.5 max-w-sm mx-auto leading-relaxed font-light">
                  Our events curator will review availability for your {eventType.toLowerCase()} and contact you within 24 hours.
                </p>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={whatsappInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#5D634E] hover:bg-[#484D3C] text-[#FAF7F2] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct via WhatsApp</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] border border-[#24211E]/20 text-[#24211E] rounded-xl hover:bg-[#F4EFE6]"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
