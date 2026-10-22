import React, { useState } from 'react';
import { X, Calendar, Clock, Users, MapPin, Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';
import { BUSINESS_INFO } from '../data/cafeData';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [date, setDate] = useState(() => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  });
  const [time, setTime] = useState('19:00');
  const [guests, setGuests] = useState(2);
  const [seatingArea, setSeatingArea] = useState<'courtyard' | 'veranda' | 'lounge' | 'any'>('courtyard');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [dietary, setDietary] = useState('Standard Pure Veg');
  const [specialNote, setSpecialNote] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const ref = `KOI-${Math.floor(1000 + Math.random() * 9000)}`;
    setBookingRef(ref);
    setConfirmed(true);
  };

  const resetAndClose = () => {
    setConfirmed(false);
    onClose();
  };

  const areaLabels = {
    courtyard: 'The Sunken Courtyard (Alfresco)',
    veranda: 'The Arched Veranda (Shaded)',
    lounge: 'The Coffee Bar & Indoor Lounge',
    any: 'First Available Best Table',
  };

  const whatsappConfirmationLink = () => {
    const text = encodeURIComponent(
      `Hello Koi Cafe & Social, I'd like to confirm my table reservation:\n\nReference: ${bookingRef}\nName: ${name}\nDate: ${date}\nTime: ${time}\nGuests: ${guests}\nArea: ${areaLabels[seatingArea]}\nDietary: ${dietary}\nNotes: ${specialNote || 'None'}`
    );
    return `https://wa.me/919910750890?text=${text}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#24211E]/70 backdrop-blur-sm overflow-y-auto animate-fade-in">
      <div
        className="relative w-full max-w-xl bg-[#FAF7F2] rounded-2xl shadow-warm-lg border border-[#24211E]/12 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 border-b border-[#24211E]/10 flex items-center justify-between bg-[#F4EFE6]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#7C756B]">
              Koi Cafe &amp; Social · Shobhagpura
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-[#24211E] mt-0.5">
              {confirmed ? 'Reservation Confirmed' : 'Reserve a Table'}
            </h3>
          </div>
          <button
            onClick={resetAndClose}
            type="button"
            className="p-2 text-[#7C756B] hover:text-[#24211E] rounded-md transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {!confirmed ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Seating Area Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-2">
                  1. Preferred Sanctuary Atmosphere
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {(
                    [
                      { key: 'courtyard', label: 'Sunken Courtyard', sub: 'Alfresco & Olive Foliage' },
                      { key: 'veranda', label: 'Arched Veranda', sub: 'Shaded Sculptural Arches' },
                      { key: 'lounge', label: 'Indoor Lounge', sub: 'Air-Conditioned & Fluted Bar' },
                      { key: 'any', label: 'First Available', sub: 'Best Courtyard Table' },
                    ] as const
                  ).map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSeatingArea(item.key)}
                      className={`p-3 text-left rounded-xl border transition-all ${
                        seatingArea === item.key
                          ? 'border-[#24211E] bg-[#FAF7F2] shadow-warm-sm'
                          : 'border-[#24211E]/10 bg-[#F4EFE6]/60 hover:bg-[#F4EFE6]'
                      }`}
                    >
                      <p className="text-xs font-semibold text-[#24211E]">{item.label}</p>
                      <p className="text-[11px] text-[#7C756B] mt-0.5">{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date, Time, and Guest Count */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  >
                    <optgroup label="Lunch (11:00 AM - 3:30 PM)">
                      <option value="11:30">11:30 AM</option>
                      <option value="12:30">12:30 PM</option>
                      <option value="13:30">1:30 PM</option>
                      <option value="14:30">2:30 PM</option>
                    </optgroup>
                    <optgroup label="Afternoon Brews (3:30 PM - 6:30 PM)">
                      <option value="16:00">4:00 PM</option>
                      <option value="17:00">5:00 PM</option>
                      <option value="18:00">6:00 PM</option>
                    </optgroup>
                    <optgroup label="Sunset & Dinner (6:30 PM - 11:00 PM)">
                      <option value="19:00">7:00 PM</option>
                      <option value="19:30">7:30 PM</option>
                      <option value="20:00">8:00 PM</option>
                      <option value="20:30">8:30 PM</option>
                      <option value="21:00">9:00 PM</option>
                      <option value="21:30">9:30 PM</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Guests
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, '9-12', '12+ (Gathering)'].map((num, i) => (
                      <option key={i} value={typeof num === 'number' ? num : 10}>
                        {num} {typeof num === 'number' && num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Primary Guest Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rohini Sharma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Mobile Phone (For SMS/WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>
              </div>

              {/* Dietary Preferences & Special Notes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Dietary Customization
                  </label>
                  <select
                    value={dietary}
                    onChange={(e) => setDietary(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  >
                    <option value="Standard Pure Veg">Standard 100% Pure Veg</option>
                    <option value="Strict Jain (No Root Veg)">Strict Jain (No Onion/Garlic/Potato)</option>
                    <option value="Vegan (Dairy-Free)">Vegan (Oat Milk & Plant-Based)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-[#7C756B] mb-1.5">
                    Special Occasion / Notes
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Birthday, quiet work session, anniversary"
                    value={specialNote}
                    onChange={(e) => setSpecialNote(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-[#F4EFE6] border border-[#24211E]/12 rounded-lg text-[#24211E] focus:outline-none focus:border-[#C26747]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-semibold uppercase tracking-wider bg-[#24211E] hover:bg-[#C26747] text-[#FAF7F2] rounded-xl transition-all shadow-warm-md flex items-center justify-center gap-2 active:scale-[0.99]"
                >
                  <span>Confirm Table Reservation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <p className="text-[11px] text-center text-[#7C756B] mt-2">
                  No advance deposit required · Free cancellation anytime
                </p>
              </div>
            </form>
          ) : (
            /* Confirmation State */
            <div className="text-center py-4 space-y-6">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#5D634E]/10 text-[#5D634E] flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C26747]">
                  Booking Reference #{bookingRef}
                </span>
                <h4 className="text-2xl font-serif text-[#24211E] mt-1">
                  We look forward to welcoming you, {name}.
                </h4>
                <p className="text-sm text-[#554F47] mt-2 max-w-md mx-auto font-light">
                  Your table has been reserved in <strong>{areaLabels[seatingArea]}</strong> for{' '}
                  <strong>{guests} {guests === 1 ? 'guest' : 'guests'}</strong> on <strong>{date}</strong> at <strong>{time}</strong>.
                </p>
              </div>

              {/* Summary Card */}
              <div className="p-4 bg-[#F4EFE6] rounded-xl border border-[#24211E]/8 text-left text-xs space-y-2 max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-[#7C756B]">Venue:</span>
                  <span className="font-medium text-[#24211E]">Koi Cafe &amp; Social, Shobhagpura</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C756B]">Atmosphere:</span>
                  <span className="font-medium text-[#24211E]">{areaLabels[seatingArea]}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#7C756B]">Dietary Style:</span>
                  <span className="font-medium text-[#5D634E]">{dietary}</span>
                </div>
                {specialNote && (
                  <div className="flex justify-between">
                    <span className="text-[#7C756B]">Occasion Note:</span>
                    <span className="font-medium text-[#24211E]">{specialNote}</span>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={whatsappConfirmationLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#5D634E] hover:bg-[#484D3C] text-[#FAF7F2] rounded-xl transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Confirmation on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={resetAndClose}
                  className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider bg-[#FAF7F2] border border-[#24211E]/20 text-[#24211E] rounded-xl hover:bg-[#F4EFE6] transition-colors"
                >
                  Close &amp; Return
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
