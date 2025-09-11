import React, { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import clsx from "clsx";

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null); // store clicked event
  const [popupOpen, setPopupOpen] = useState(false); // popup toggle

  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);

  const startDay = startOfMonth.getDay();
  const totalDays = endOfMonth.getDate();

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const today = new Date();

  // Example events with details
  const events = {
    "2025-07-04": { name: "Independence Day", details: "National holiday in the USA" },
    "2025-07-20": { name: "Meeting", details: "Team meeting at 10 AM in conference room" },
    "2025-09-25": { name: "Project Deadline", details: "Final submission of client project" },
    "2025-09-10": { name: "Holi", details: "Festival of colors celebration" },
  };

  const handleDateClick = (dateStr, dateNum) => {
    if (events[dateStr]) {
      setSelectedEvent({ date: dateStr, ...events[dateStr] });
    } else {
      setSelectedEvent({ date: dateStr, name: null });
    }
    setPopupOpen(true);
  };

  return (
    <div className="w-[99vw] h-[120vh] flex flex-col justify-between items-center gap-5">
      <h1 className="text-start w-full text-[2rem] font-bold pl-4 pt-3">Events Calendar</h1>
      <div className="w-[90%] h-[110vh] border border-gray-300 rounded-xl shadow-md overflow-hidden mb-4">

        {/* Header */}
        <div className="flex items-center justify-between py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4">
          <button onClick={prevMonth} className="p-2 hover:bg-white/20 rounded-full transition">
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h2 className="text-[1.5rem] font-bold">
            {currentDate.toLocaleString("default", { month: "long" })} {currentDate.getFullYear()}
          </h2>
          <button onClick={nextMonth} className="p-2 hover:bg-white/20 rounded-full transition">
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Days of week */}
        <div className="grid grid-cols-7 bg-slate-100 text-slate-600 font-semibold uppercase text-center">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-3 border-b">{day}</div>
          ))}
        </div>

        {/* Dates grid */}
        <div className="grid grid-cols-7">
          {Array(startDay).fill(null).map((_, i) => (
            <div key={i} className="h-28 border-r border-b"></div>
          ))}

          {Array.from({ length: totalDays }, (_, i) => {
            const dateNum = i + 1;
            const dateStr = `${currentDate.getFullYear()}-${String(
              currentDate.getMonth() + 1
            ).padStart(2, "0")}-${String(dateNum).padStart(2, "0")}`;

            const isToday =
              today.getDate() === dateNum &&
              today.getMonth() === currentDate.getMonth() &&
              today.getFullYear() === currentDate.getFullYear();

            const hasEvent = events[dateStr];

            return (
              <div
                key={dateNum}
                onClick={() => handleDateClick(dateStr, dateNum)}
                className={clsx(
                  "h-28 p-2 border-b border-r flex flex-col justify-between cursor-pointer transition hover:bg-slate-50",
                  isToday && "bg-blue-100 border-blue-400 shadow-inner"
                )}
              >
                <div className="flex justify-end">
                  <span className={clsx("text-[1.3rem] font-semibold", isToday && "text-blue-600")}>
                    {dateNum}
                  </span>
                </div>
                {hasEvent && (
                  <div className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-md shadow-sm truncate">
                    {hasEvent.name}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Popup */}
      {popupOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white w-[400px] rounded-xl shadow-lg p-6 relative animate-fadeIn">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            {selectedEvent?.name ? (
              <>
                <h3 className="text-xl font-bold mb-2">{selectedEvent.name}</h3>
                <p className="text-gray-600">{selectedEvent.details}</p>
                <p className="mt-3 text-sm text-blue-500">📅 {selectedEvent.date}</p>
              </>
            ) : (
              <h3 className="text-lg font-semibold text-gray-700">No event on this date</h3>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;
