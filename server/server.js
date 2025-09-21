// server.js
const express = require("express");
const cors = require("cors");
const axios = require("axios");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Map frontend language codes to VoiceRSS codes
const languageMap = {
  en: "en-us",
  hi: "hi-in",
  ta: "ta-in",
  zh: "zh-cn",
  sikkim: "en-us", // fallback
};

app.post("/api/tts", async (req, res) => {
  const { text, language } = req.body;
  if (!text) return res.status(400).json({ error: "Text is required" });

  try {
    const response = await axios.get("https://api.voicerss.org/", {
      params: {
        key: process.env.VOICERSS_API_KEY,
        hl: languageMap[language] || "en-us",
        src: text,
        c: "MP3",
        f: "44khz_16bit_stereo",
      },
      responseType: "arraybuffer",
    });

    const audioBuffer = Buffer.from(response.data);
    const asText = audioBuffer.toString("utf8");

    // ✅ If API returned an error instead of MP3
    if (asText.startsWith("ERROR")) {
      console.error("VoiceRSS Error:", asText);
      return res.status(400).json({ error: asText });
    }

    // ✅ Otherwise, return MP3
    res.set({
      "Content-Type": "audio/mpeg",
      "Content-Length": audioBuffer.length,
    });
    res.end(audioBuffer);
  } catch (err) {
    console.error("Error generating audio:", err.message);
    res.status(500).json({ error: "Failed to generate audio" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
