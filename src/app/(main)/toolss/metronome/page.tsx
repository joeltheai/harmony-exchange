"use client";
import { useState, useEffect, useRef } from "react";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const Metronome = () => {
  const [bpm, setBpm] = useState(60);
  const [isPlaying, setIsPlaying] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const tickRef = useRef<OscillatorNode | null>(null);

  useEffect(() => {
    // Initialize audio context
    audioContextRef.current = new (window.AudioContext ||
      window.AudioContext)();
    return () => {
      // Clean up on unmount
      audioContextRef.current?.close();
    };
  }, []);

  const playTick = () => {
    if (audioContextRef.current) {
      const tick = audioContextRef.current.createOscillator();
      tick.frequency.value = 400; // Frequency in hertz (Hz)
      tick.type = "square";
      tick.connect(audioContextRef.current.destination);
      tick.start();
      tick.stop(audioContextRef.current.currentTime + 0.1); // Stop after 0.1 seconds
      tickRef.current = tick;
    }
  };

  const startMetronome = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playTick();
      const interval = (60 / bpm) * 1000;
      timerRef.current = setInterval(playTick, interval);
    }
  };

  const stopMetronome = () => {
    if (isPlaying) {
      setIsPlaying(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
      tickRef.current?.stop();
    }
  };

  const handleBpmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBpm = parseInt(e.target.value);
    setBpm(newBpm);
    if (isPlaying) {
      // Update the interval
      stopMetronome();
      startMetronome();
    }
  };

  return (
    <MaxWidthWrapper>
      <div className=" p-24">
        <div className="metronome p-5">
          <div className=" mb-4">
            <label
              htmlFor="bpm-range"
              className="mb-2 block text-lg font-medium text-gray-700"
            >
              BPM: {bpm}
            </label>
            <input
              id="bpm-range"
              type="range"
              min="40"
              max="240"
              value={bpm}
              onChange={handleBpmChange}
              className="range range-success range-sm"
            />
          </div>
          <div className="flex gap-2">
            <button
              onClick={startMetronome}
              disabled={isPlaying}
              className="btn btn-primary btn-md"
            >
              Start
            </button>
            <button
              onClick={stopMetronome}
              disabled={!isPlaying}
              className="btn btn-secondary btn-md"
            >
              Stop
            </button>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Metronome;
