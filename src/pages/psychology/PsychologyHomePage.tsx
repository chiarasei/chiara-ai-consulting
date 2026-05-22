import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Play, Pause, ArrowLeft, Headphones } from "lucide-react";
import SEOHead from "@/components/SEOHead";

type Track = {
  id: string;
  title: string;
  description: string;
  duration: string;
  src: string;
};

const TRACKS: Track[] = [
  {
    id: "morning",
    title: "Morning Grounding",
    description: "Start your day with a calm, centered breath.",
    duration: "8 min",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
  },
  {
    id: "anxiety",
    title: "Anxiety Reset",
    description: "Soft guidance to settle a busy, worried mind.",
    duration: "10 min",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  },
  {
    id: "evening",
    title: "Evening Wind Down",
    description: "Release the day and prepare for restful sleep.",
    duration: "12 min",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
  },
];

// Calm palette
const bg = "#F5F1EA";
const surface = "#FFFFFF";
const ink = "#2B2A2A";
const muted = "#7A7775";
const accent = "#6B8E7F"; // sage
const accentSoft = "#E4ECE6";

const formatTime = (s: number) => {
  if (!isFinite(s) || isNaN(s)) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
};

const PsychologyAudioDemo = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const activeTrack = TRACKS.find((t) => t.id === activeId) || null;

  // Initialize the single audio element once
  useEffect(() => {
    const el = new Audio();
    el.preload = "metadata";
    audioRef.current = el;

    const onTime = () => setCurrent(el.currentTime);
    const onMeta = () => setDuration(el.duration);
    const onEnd = () => setIsPlaying(false);
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);

    el.addEventListener("timeupdate", onTime);
    el.addEventListener("loadedmetadata", onMeta);
    el.addEventListener("ended", onEnd);
    el.addEventListener("play", onPlay);
    el.addEventListener("pause", onPause);

    return () => {
      el.pause();
      el.removeEventListener("timeupdate", onTime);
      el.removeEventListener("loadedmetadata", onMeta);
      el.removeEventListener("ended", onEnd);
      el.removeEventListener("play", onPlay);
      el.removeEventListener("pause", onPause);
    };
  }, []);

  // Media Session API for lock screen / background controls
  useEffect(() => {
    if (!activeTrack || !("mediaSession" in navigator)) return;
    navigator.mediaSession.metadata = new MediaMetadata({
      title: activeTrack.title,
      artist: "Guided Sessions",
      album: "Psychology & Wellbeing",
    });
    navigator.mediaSession.setActionHandler("play", () => audioRef.current?.play());
    navigator.mediaSession.setActionHandler("pause", () => audioRef.current?.pause());
    navigator.mediaSession.setActionHandler("seekto", (details) => {
      if (audioRef.current && details.seekTime != null) {
        audioRef.current.currentTime = details.seekTime;
      }
    });
  }, [activeTrack]);

  const handleToggle = (track: Track) => {
    const el = audioRef.current;
    if (!el) return;
    if (activeId === track.id) {
      if (el.paused) el.play();
      else el.pause();
      return;
    }
    el.src = track.src;
    el.currentTime = 0;
    setActiveId(track.id);
    setCurrent(0);
    setDuration(0);
    el.play().catch(() => {});
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const el = audioRef.current;
    if (!el) return;
    const v = Number(e.target.value);
    el.currentTime = v;
    setCurrent(v);
  };

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{
        background: bg,
        color: ink,
        fontFamily: "'DM Sans', 'Inter', system-ui, sans-serif",
      }}
    >
      <SEOHead
        title="Guided Sessions — Psychology & Wellbeing Audio Demo"
        description="A calm audio meditation demo with guided sessions for grounding, anxiety relief, and sleep."
        keywords="meditation, guided audio, wellbeing, psychology, mindfulness"
        canonicalPath="/demo/psychology"
      />

      {/* Demo banner */}
      <div
        className="text-center text-xs py-2.5 px-4 flex flex-col sm:flex-row items-center justify-center gap-1.5 sm:gap-3"
        style={{ background: ink, color: "rgba(255,255,255,0.85)" }}
      >
        <span>🎧 A calm wellbeing audio experience demo.</span>
        <Link to="/" className="inline-flex items-center gap-1 underline font-semibold text-white">
          <ArrowLeft className="w-3 h-3" />
          Built by ChiaraAI Consulting
        </Link>
      </div>

      {/* Hero */}
      <header className="px-6 pt-16 pb-12 md:pt-24 md:pb-20 text-center">
        <div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6"
          style={{ background: accentSoft, color: accent }}
        >
          <Headphones className="w-3.5 h-3.5" />
          Guided audio
        </div>
        <h1
          className="text-4xl md:text-6xl font-light tracking-tight leading-[1.1] max-w-2xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', 'Instrument Serif', Georgia, serif" }}
        >
          Guided Sessions for Your Mind
        </h1>
        <p className="mt-5 text-base md:text-lg max-w-md mx-auto leading-relaxed" style={{ color: muted }}>
          Short, gentle audio sessions to help you slow down, breathe, and feel a little more like yourself.
        </p>
      </header>

      {/* Listen */}
      <main className="flex-1 px-4 md:px-6 pb-32">
        <section className="max-w-2xl mx-auto">
          <div className="flex items-baseline justify-between mb-6 px-2">
            <h2 className="text-xl md:text-2xl font-medium">Listen</h2>
            <span className="text-xs uppercase tracking-widest" style={{ color: muted }}>
              {TRACKS.length} sessions
            </span>
          </div>

          <ul className="space-y-4">
            {TRACKS.map((track) => {
              const isActive = activeId === track.id;
              const isThisPlaying = isActive && isPlaying;
              return (
                <li
                  key={track.id}
                  className="rounded-3xl p-5 md:p-6 transition-all duration-300"
                  style={{
                    background: surface,
                    boxShadow: isActive
                      ? "0 10px 40px -10px rgba(107, 142, 127, 0.3)"
                      : "0 2px 12px -4px rgba(43, 42, 42, 0.06)",
                    border: `1px solid ${isActive ? accentSoft : "rgba(43,42,42,0.05)"}`,
                  }}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handleToggle(track)}
                      aria-label={isThisPlaying ? `Pause ${track.title}` : `Play ${track.title}`}
                      className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center transition-transform active:scale-95"
                      style={{
                        background: isThisPlaying ? accent : accentSoft,
                        color: isThisPlaying ? "#fff" : accent,
                      }}
                    >
                      {isThisPlaying ? (
                        <Pause className="w-5 h-5 md:w-6 md:h-6" />
                      ) : (
                        <Play className="w-5 h-5 md:w-6 md:h-6 ml-0.5" />
                      )}
                    </button>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-base md:text-lg font-medium truncate">{track.title}</h3>
                      </div>
                      <p className="text-sm leading-snug truncate" style={{ color: muted }}>
                        {track.description}
                      </p>
                      <span
                        className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full"
                        style={{ background: accentSoft, color: accent }}
                      >
                        {track.duration}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <p className="text-center text-xs mt-10" style={{ color: muted }}>
            Find a quiet moment. Use headphones if you can.
          </p>
        </section>
      </main>

      {/* Mini player */}
      {activeTrack && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 px-3 pb-3 md:px-4 md:pb-4"
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}
        >
          <div
            className="max-w-2xl mx-auto rounded-2xl p-3 md:p-4 backdrop-blur-xl"
            style={{
              background: "rgba(255,255,255,0.92)",
              boxShadow: "0 -4px 30px rgba(43,42,42,0.12)",
              border: `1px solid ${accentSoft}`,
            }}
          >
            <div className="flex items-center gap-3">
              <button
                onClick={() => handleToggle(activeTrack)}
                aria-label={isPlaying ? "Pause" : "Play"}
                className="flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center transition-transform active:scale-95"
                style={{ background: accent, color: "#fff" }}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-sm font-medium truncate">{activeTrack.title}</span>
                  <span className="text-xs tabular-nums flex-shrink-0" style={{ color: muted }}>
                    {formatTime(current)} / {formatTime(duration)}
                  </span>
                </div>
                <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: accentSoft }}>
                  <div
                    className="absolute inset-y-0 left-0 rounded-full transition-[width] duration-100"
                    style={{ width: `${pct}%`, background: accent }}
                  />
                  <input
                    type="range"
                    min={0}
                    max={duration || 0}
                    step={0.1}
                    value={current}
                    onChange={handleSeek}
                    aria-label="Seek"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PsychologyAudioDemo;
