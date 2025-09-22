import React, { useState ,useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

const Calendar = () => {
  const navigate=useNavigate();
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState(null); // store clicked event
  const [popupOpen, setPopupOpen] = useState(false); // popup toggle
  const [showFullText, setShowFullText] = useState(false);
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const gotoMain=()=>{
    navigate("/main")
  }
   useEffect(() => {
    setShowFullText(false);
  }, [popupOpen, selectedEvent]);


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
  // 1. Rumtek Monastery
  "2025-07-04": {
    name: "Rumtek Monastery",
    details:
      "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the largest and most important monasteries in Sikkim. Built in the 1960s under the direction of the 16th Karmapa, it is a replica of the original Kagyu headquarters in Tibet. The monastery houses many sacred relics and serves as a vital center for Buddhist learning. Surrounded by lush hills, it offers stunning views of Gangtok and plays a major role in preserving Tibetan Buddhist traditions.",
    year: "1960",
    place: "Rumtek, East Sikkim",
    image:
      "https://www.esikkimtourism.in/wp-content/uploads/2019/03/rumtek-bnnnr.jpg",

    hotels: [
      { name: "Hotel Rumtek Residency", address: "Rumtek Road, East Sikkim", rating: 4.5, contact: "919876543210" },
      { name: "Golden Hill Hotel", address: "Gangtok Highway, East Sikkim", rating: 4.2, contact: "919111122233" },
      { name: "Peaceful Stay Lodge", address: "Near Monastery Gate, Rumtek", rating: 4.0, contact: "919222233344" },
      { name: "Rumtek View Inn", address: "Hilltop, Rumtek", rating: 4.7, contact: "919333344455" },
    ],

    vehicles: [
      { name: "Sikkim Tours Van", owner: "Tashi Lama", number: "SK01 AB 1234", rating: 4.8, contact: "919123456789" },
      { name: "Himalayan Travel Jeep", owner: "Pema Sherpa", number: "SK02 XY 5678", rating: 4.6, contact: "919555566677" },
    ],
  },

  // 2. Pemayangtse Monastery
  "2025-07-20": {
    name: "Pemayangtse Monastery",
    details:
      "Pemayangtse Monastery, established in 1705 by Lama Lhatsun Chempo, is one of the oldest monasteries in Sikkim. It follows the Nyingma tradition of Tibetan Buddhism and holds a sacred position in the religious life of the region. The monastery is known for its exquisite sculptures, murals, and a unique wooden structure representing the celestial palace. It overlooks the mighty Kanchenjunga range, making it a significant spiritual and cultural site.",
    year: "1705",
    place: "Pelling, West Sikkim",
    image:
      "https://holidays.tripfactory.com/sikkim/wp-content/uploads/sites/18/2024/05/Pemayangtse-Monastery.webp",

    hotels: [
      { name: "Pelling Heights Hotel", address: "Pelling Main Road, West Sikkim", rating: 4.6, contact: "919234567890" },
      { name: "Kanchenjunga View Inn", address: "Upper Pelling, West Sikkim", rating: 4.3, contact: "919888899900" },
      { name: "Peaceful Monastery Stay", address: "Near Pemayangtse Gate, Pelling", rating: 4.4, contact: "919777766655" },
      { name: "Sikkim Comfort Lodge", address: "Lower Pelling Road", rating: 4.1, contact: "919666677788" },
    ],

    vehicles: [
      { name: "West Sikkim Taxi", owner: "Sonam Lepcha", number: "SK03 PQ 2345", rating: 4.7, contact: "919345678901" },
      { name: "Pelling Tour SUV", owner: "Karma Bhutia", number: "SK04 RS 6789", rating: 4.5, contact: "919555599900" },
    ],
  },

  // 3. Pang Lhabsol Festival
  "2025-09-10": {
    name: "Pang Lhabsol Festival",
    details:
      "Pang Lhabsol is one of the most unique festivals of Sikkim, celebrated to honor Mount Kanchenjunga, the guardian deity of Sikkim. The festival features colorful mask dances, traditional rituals, and grand offerings. It is an important cultural and spiritual event where monks perform sacred dances to invoke blessings for the land and its people.",
    place: "Tashiding, West Sikkim",
    image:
      "https://www.holidify.com/images/cmsuploads/compressed/de46ef2791b04b35c986797281fb0693_20240208115001.jpg",

    hotels: [
      { name: "Tashiding Eco Lodge", address: "Near Tashiding Monastery", rating: 4.4, contact: "919444455566" },
      { name: "Himalaya Retreat", address: "West Sikkim", rating: 4.2, contact: "919555566677" },
      { name: "Peace Garden Stay", address: "Tashiding Road", rating: 4.3, contact: "919666677788" },
      { name: "Mount View Lodge", address: "West Sikkim Hills", rating: 4.5, contact: "919777788899" },
    ],

    vehicles: [
      { name: "Festival Shuttle Van", owner: "Dorjee Tamang", number: "SK05 KL 3456", rating: 4.6, contact: "919888899900" },
      { name: "Sikkim Heritage Jeep", owner: "Phurba Sherpa", number: "SK06 MN 7890", rating: 4.7, contact: "919999900001" },
    ],
  },

  // 4. Losar Festival (Tibetan New Year)
  "2025-02-28": {
    name: "Losar Festival",
    details:
      "Losar, the Tibetan New Year, is celebrated with great enthusiasm in Sikkim. It marks the beginning of the new year according to the Tibetan lunar calendar. The festival involves prayers, feasts, family gatherings, and traditional dances. Monasteries are beautifully decorated, and rituals are performed to bring peace and prosperity for the coming year.",
    place: "Gangtok, Sikkim",
    image:
      "https://blog.thomascook.in/wp-content/uploads/2018/02/nintchdbpict0003057897761-e1518706372398.jpg",

    hotels: [
      { name: "Gangtok Central Hotel", address: "MG Marg, Gangtok", rating: 4.6, contact: "919111122233" },
      { name: "Himalayan Residency", address: "Near Ridge Park, Gangtok", rating: 4.3, contact: "919222233344" },
      { name: "Buddha View Inn", address: "Enchey Monastery Road", rating: 4.4, contact: "919333344455" },
      { name: "Golden Dragon Hotel", address: "Upper Gangtok", rating: 4.7, contact: "919444455566" },
    ],

    vehicles: [
      { name: "Losar Travel Bus", owner: "Ngawang Lepcha", number: "SK07 UV 4567", rating: 4.5, contact: "919555566677" },
      { name: "Festive Ride Jeep", owner: "Jigme Bhutia", number: "SK08 WX 8910", rating: 4.8, contact: "919666677788" },
    ],
  },
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
      <h1 className="text-start w-full lg:text-[2rem] text-[1.4rem] font-bold pl-4 pt-3"><span><i className="fa-solid fa-arrow-left text-[1.1rem] mr-5 lg:text-[1.7rem] cursor-pointer" onClick={gotoMain}></i></span>Events Calendar</h1>
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
    <div className="bg-white lg:w-[500px] w-[350px] max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto relative animate-fadeIn">
      
      {/* Close button */}
      <button
        onClick={() => setPopupOpen(false)}
        className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
      >
        <X className="w-6 h-6" />
      </button>

      {selectedEvent?.name ? (
        <>
          {/* Image */}
          {selectedEvent.image && (
            <img
              src={selectedEvent.image}
              alt={selectedEvent.name}
              className="w-full h-56 object-cover"
            />
          )}

          {/* Details */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">{selectedEvent.name}</h2>

            {/* Read More / Less */}
            <p className="text-gray-600 leading-relaxed">
              {showFullText
                ? selectedEvent.details
                : `${selectedEvent.details.slice(0, 200)}${
                    selectedEvent.details.length > 200 ? "..." : ""
                  }`}
            </p>
            {selectedEvent.details?.length > 200 && (
              <button
                onClick={() => setShowFullText(!showFullText)}
                className="text-blue-500 text-sm hover:underline"
              >
                {showFullText ? "Read less" : "Read more"}
              </button>
            )}

            {/* Extra info */}
            {selectedEvent.year && (
              <div className="text-sm text-gray-700 space-y-1">
                <p>📅 Built Year: <span className="font-medium">{selectedEvent.year}</span></p>
                <p>📍 Location: <span className="font-medium">{selectedEvent.place}</span></p>
              </div>
            )}

            {/* Hotel Section */}
            {selectedEvent.hotels?.length > 0 && (
              <div className="pt-4">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🏨 Nearby Hotels</h3>
                <div className="space-y-3">
                  {selectedEvent.hotels.map((hotel, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-xl shadow-sm flex flex-col bg-gray-50"
                    >
                      <h4 className="font-semibold text-gray-800">{hotel.name}</h4>
                      <p className="text-sm text-gray-600">📍 {hotel.address}</p>
                      <p className="text-sm text-yellow-500">⭐ {hotel.rating} / 5</p>
                      <a
                        href={`https://wa.me/${hotel.contact}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-2 bg-green-500 text-white py-2 px-3 rounded-lg shadow hover:bg-green-600 transition w-max"
                      >
                        <i className="fab fa-whatsapp"></i> Contact Hotel
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Vehicle Section */}
            {selectedEvent.vehicles?.length > 0 && (
              <div className="pt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">🚐 Tourist Vehicles</h3>
                <div className="space-y-3">
                  {selectedEvent.vehicles.map((veh, idx) => (
                    <div
                      key={idx}
                      className="p-4 border rounded-xl shadow-sm flex flex-col bg-gray-50"
                    >
                      <h4 className="font-semibold text-gray-800">{veh.name}</h4>
                      <p className="text-sm text-gray-600">👤 Owner: {veh.owner}</p>
                      <p className="text-sm text-gray-600">🔢 Plate: {veh.number}</p>
                      <p className="text-sm text-yellow-500">⭐ {veh.rating} / 5</p>
                      <a
                        href={`https://wa.me/${veh.contact}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 flex items-center gap-2 bg-blue-500 text-white py-2 px-3 rounded-lg shadow hover:bg-blue-600 transition w-max"
                      >
                        <i className="fab fa-whatsapp"></i> Contact Vehicle
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      ) : (
        <div className="p-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700">No event on this date</h3>
          <p className="text-gray-500 text-sm mt-2">It’s just a normal day 🙂</p>
        </div>
      )}
    </div>
  </div>
)}


    </div>
  );
};

export default Calendar;
