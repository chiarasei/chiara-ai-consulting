import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Pause,
  ArrowLeft,
  Sunrise,
  HeartPulse,
  Wind,
  Moon,
  BedDouble,
  Sparkles,
} from "lucide-react";
import SEOHead from "@/components/SEOHead";

type Track = {
  id: string;
  title: string;
  description: string;
  duration: string;
  src: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Icon: any;
  
};

const TRACKS: Track[] = [
  {
    id: "morning",
    title: "Morning Grounding",
    description: "Start your day with a calm, centered breath.",
    duration: "8 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Scott_Buckley_-_Aurora.mp3",
    Icon: Sunrise,
  },
  {
    id: "anxiety",
    title: "Anxiety Reset",
    description: "Soft guidance to settle a busy, worried mind.",
    duration: "10 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/2/29/Moby_-_LA1.mp3",
    Icon: HeartPulse,
  },
  {
    id: "breath",
    title: "Breathwork for Calm",
    description: "A simple breathing rhythm to ease tension.",
    duration: "6 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/7/73/Moby_-_LA4.mp3",
    Icon: Wind,
  },
  {
    id: "evening",
    title: "Evening Wind Down",
    description: "Release the day with slow, gentle awareness.",
    duration: "12 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Moby_-_LA9.mp3",
    Icon: Moon,
  },
  {
    id: "sleep",
    title: "Sleep Meditation",
    description: "Drift into deep, restful sleep.",
    duration: "20 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Moby_-_LA12.mp3",
    Icon: BedDouble,
  },
  {
    id: "confidence",
    title: "Confidence Boost",
    description: "Reconnect with your quiet inner strength.",
    duration: "9 min",
    src: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Dewdrop_Fantasy_%28ISRC_USUAN1700001%29.mp3",
    Icon: Sparkles,
  },
];

const formatTime = (s: number) => {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const PsychologyHomePage = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const active = TRACKS.find((t) => t.id === activeId) || null;

  // Init audio element once
  useEffect(() => {
    const a = new Audio();
    a.preload = "metadata";
    audioRef.current = a;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration || 0);
    const onEnd = () => setIsPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.pause();
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  // Media Session for lock screen controls
  useEffect(() => {
    if (!active || !("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: active.title,
      artist: "Calm Sessions",
      album: "Wellbeing Audio",
    });
    navigator.mediaSession.setActionHandler("play", () => handlePlayPause());
    navigator.mediaSession.setActionHandler("pause", () => handlePlayPause());
    navigator.mediaSession.setActionHandler("seekto", (d) => {
      if (audioRef.current && d.seekTime != null) {
        audioRef.current.currentTime = d.seekTime;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  const playTrack = (track: Track) => {
    const a = audioRef.current;
    if (!a) return;
    if (activeId !== track.id) {
      a.src = track.src;
      setActiveId(track.id);
      setCurrent(0);
    }
    a.play().then(() => setIsPlaying(true)).catch(() => setIsPlaying(false));
  };

  const handlePlayPause = () => {
    const a = audioRef.current;
    if (!a || !active) return;
    if (a.paused) {
      a.play().then(() => setIsPlaying(true)).catch(() => {});
    } else {
      a.pause();
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v;
    setCurrent(v);
  };

  const scrollToSessions = () => {
    document.getElementById("sessions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#FBF7F1",
        color: "#2E3A2E",
        fontFamily:
          '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <SEOHead
        title="Calm Sessions — Guided Audio for a Calmer Mind"
        description="A warm, guided audio platform for anxiety, stress, sleep and emotional balance."
        keywords="meditation, guided audio, wellbeing, sleep, anxiety"
        canonicalPath="/demo/psychology"
      />

      {/* Top bar */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-5 flex items-center justify-between">
        <Link
          to="/recent-work"
          className="inline-flex items-center gap-2 text-sm"
          style={{ color: "#4A5D4A" }}
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>
        <div className="text-sm font-medium tracking-wide" style={{ color: "#3D5A40" }}>
          Calm Sessions
        </div>
        <div className="w-12" />
      </header>

      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 text-center overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at top, #E8F0E3 0%, #F5EEE2 55%, #FBF7F1 100%)",
        }}
      >
        <div className="max-w-xl mx-auto">
          <div
            className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-8 mx-auto"
            style={{ background: "#3D5A40" }}
          >
            <span
              className="text-white text-2xl"
              style={{ fontFamily: "Georgia, serif" }}
            >
              ✦
            </span>
          </div>
          <h1
            className="text-4xl md:text-6xl leading-tight mb-5"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 500,
              color: "#2E3A2E",
              letterSpacing: "-0.01em",
            }}
          >
            A Calmer Mind Starts Here
          </h1>
          <p
            className="text-base md:text-lg mb-10 leading-relaxed"
            style={{ color: "#5A6B5A" }}
          >
            Gentle, guided audio sessions for the moments that matter — morning,
            night, and everything in between.
          </p>
          <button
            onClick={scrollToSessions}
            className="px-8 py-4 rounded-full text-white text-sm tracking-wide transition-all hover:scale-[1.02] active:scale-[0.98] shadow-lg"
            style={{ background: "#3D5A40", boxShadow: "0 10px 30px -10px rgba(61,90,64,0.4)" }}
          >
            Begin Listening
          </button>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center">
          <p
            className="text-xs uppercase tracking-[0.25em] mb-6"
            style={{ color: "#8AA88A" }}
          >
            About
          </p>
          <p
            className="text-xl md:text-2xl leading-relaxed"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: "#3D4A3D",
              fontWeight: 400,
            }}
          >
            Calm Sessions is a guided audio platform for mental wellbeing.
            Whether you're working through anxiety, struggling to sleep, or
            simply needing a quiet moment, our sessions help you regulate, reset
            and return to yourself.
          </p>
        </div>
      </section>

      {/* Sessions */}
      <section id="sessions" className="px-6 pb-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-[0.25em] mb-3"
              style={{ color: "#8AA88A" }}
            >
              Library
            </p>
            <h2
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                color: "#2E3A2E",
                fontWeight: 500,
              }}
            >
              Your Sessions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRACKS.map((t) => {
              const isActive = activeId === t.id;
              const playingThis = isActive && isPlaying;
              return (
                <article
                  key={t.id}
                  className="rounded-3xl p-6 transition-all hover:-translate-y-1"
                  style={{
                    background: "#FFFFFF",
                    boxShadow: isActive
                      ? "0 12px 40px -12px rgba(61,90,64,0.3)"
                      : "0 4px 20px -8px rgba(46,58,46,0.08)",
                    border: isActive ? "1px solid #C5D5BD" : "1px solid #F0EAE0",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                    style={{ background: "#EEF2E8" }}
                  >
                    <t.Icon className="w-5 h-5" style={{ color: "#3D5A40" }} />
                  </div>
                  <h3
                    className="text-xl mb-2"
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      color: "#2E3A2E",
                      fontWeight: 500,
                    }}
                  >
                    {t.title}
                  </h3>
                  <p
                    className="text-sm mb-6 leading-relaxed"
                    style={{ color: "#6B7A6B" }}
                  >
                    {t.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span
                      className="text-xs tracking-wide"
                      style={{ color: "#9AAB9A" }}
                    >
                      {t.duration}
                    </span>
                    <button
                      onClick={() =>
                        playingThis ? handlePlayPause() : playTrack(t)
                      }
                      aria-label={playingThis ? "Pause" : "Play"}
                      className="w-11 h-11 rounded-full flex items-center justify-center transition-all hover:scale-105 active:scale-95"
                      style={{ background: "#3D5A40", color: "#FFFFFF" }}
                    >
                      {playingThis ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mini Player */}
      {active && (
        <div
          className="fixed bottom-0 left-0 right-0 z-30 px-4 pb-4 pt-2"
          style={{
            background:
              "linear-gradient(to top, #FBF7F1 70%, rgba(251,247,241,0))",
          }}
        >
          <div
            className="max-w-3xl mx-auto rounded-2xl p-4 flex items-center gap-4"
            style={{
              background: "#FFFFFF",
              boxShadow: "0 12px 40px -10px rgba(46,58,46,0.18)",
              border: "1px solid #EFE9DE",
            }}
          >
            <button
              onClick={handlePlayPause}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
              style={{ background: "#3D5A40", color: "#FFFFFF" }}
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-0.5" />
              )}
            </button>
            <div className="flex-1 min-w-0">
              <div
                className="text-sm font-medium truncate mb-1.5"
                style={{ color: "#2E3A2E" }}
              >
                {active.title}
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="range"
                  min={0}
                  max={duration || 0}
                  step={0.1}
                  value={current}
                  onChange={handleSeek}
                  className="flex-1 h-1 rounded-full appearance-none cursor-pointer accent-[#3D5A40]"
                  style={{
                    background: `linear-gradient(to right, #3D5A40 ${
                      duration ? (current / duration) * 100 : 0
                    }%, #E4DED2 0%)`,
                  }}
                />
                <span
                  className="text-xs tabular-nums flex-shrink-0"
                  style={{ color: "#8A9A8A" }}
                >
                  -{formatTime(Math.max(0, (duration || 0) - current))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsychologyHomePage;
