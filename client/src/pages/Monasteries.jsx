import React, { useState } from "react";
import { X } from "lucide-react";
import axios from "axios";

const monasteries = [
  {
    name: "Rumtek Monastery",
    location: "Gangtok, East Sikkim",
    image: "/rumtek.jpg",
    view360: "/rumtekvedio.mp4",
    text: "Rumtek Monastery, also known as the Dharma Chakra Centre, is one of the largest and most important monasteries in Sikkim...",
  },
  {
    name: "Pemayangtse Monastery",
    location: "Pelling, West Sikkim",
    image: "/pemayangstay.jpg",
    view360: "/video360",
    text: "Pemayangtse Monastery, established in 1705 by Lama Lhatsun Chempo, is one of the oldest monasteries in Sikkim...",
  },
];

const languages = [
  { label: "English", code: "en" },
  { label: "Tamil", code: "ta" },
  { label: "Hindi", code: "hi" },
  { label: "Chinese", code: "zh" },
  { label: "Sikkimese", code: "sikkim" },
];

const Monasteries = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedMonastery, setSelectedMonastery] = useState(null);
  const [selectedLang, setSelectedLang] = useState("en");
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchAudio = async (text, lang) => {
  if (!text) return;
  try {
    setLoading(true);
    setAudioUrl(null);

    const response = await axios.post(
      "http://localhost:3001/api/tts",
      { text, language: lang },
      { responseType: "arraybuffer" } // 👈 important
    );

    // Try to read as text (error case)
    const asText = new TextDecoder("utf-8").decode(response.data);
    if (asText.startsWith("ERROR")) {
      alert(asText); // show VoiceRSS error
      return;
    }

    // Otherwise, treat as audio
    const blob = new Blob([response.data], { type: "audio/mpeg" });
    const url = URL.createObjectURL(blob);
    setAudioUrl(url);
  } catch (err) {
    console.error("Error fetching audio:", err);
    alert("Failed to generate audio. Check backend/API key.");
  } finally {
    setLoading(false);
  }
};


  const handleAudioClick = (monastery) => {
    setSelectedMonastery(monastery);
    setPopupOpen(true);
    setAudioUrl(null);
    setSelectedLang("en");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-12">
      <h1 className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 mb-12">
        Sacred Monasteries of Sikkim
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {monasteries.map((monastery, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
          >
            <div className="relative">
              <img
                src={monastery.image}
                alt={monastery.name}
                className="h-56 w-full object-cover"
              />
              <span className="absolute bottom-3 left-3 bg-blue-900 text-white text-xs px-3 py-1 rounded-full shadow-md">
                {monastery.location}
              </span>
            </div>

            <div className="p-6">
              <h2 className="text-lg font-semibold text-blue-900 mb-2">{monastery.name}</h2>
              <p className="text-gray-600 text-sm mb-5">
                Explore {monastery.name} with immersive 360° views and guided audio tours.
              </p>

              <div className="flex justify-between">
                <a
                  href={monastery.view360}
                  className="flex-1 mr-2 px-4 py-2 bg-blue-900 text-white text-sm font-medium rounded-lg hover:bg-blue-800 transition text-center"
                >
                  360° View
                </a>
                <button
                  onClick={() => handleAudioClick(monastery)}
                  className="flex-1 ml-2 px-4 py-2 bg-yellow-500 text-white text-sm font-medium rounded-lg hover:bg-yellow-600 transition text-center"
                >
                  Audio Guide
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Popup */}
      {popupOpen && selectedMonastery && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 p-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-y-auto max-h-[90vh] relative p-6">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-red-500"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-2xl font-bold mb-4">{selectedMonastery.name}</h2>
            <p className="text-gray-700 mb-4">{selectedMonastery.text}</p>

            <div className="mb-4">
              <label className="block mb-2 font-medium">Select Language:</label>
              <select
                className="w-full border px-3 py-2 rounded-lg"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.code} value={lang.code}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={() => fetchAudio(selectedMonastery.text, selectedLang)}
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-800 transition mb-4"
            >
              {loading ? "Generating Audio..." : "Play Audio"}
            </button>

            {audioUrl && (
              <audio controls className="w-full mt-2">
                <source src={audioUrl} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Monasteries;
