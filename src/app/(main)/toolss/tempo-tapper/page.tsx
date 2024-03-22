"use client";
import React, { useState } from "react";

const TempoTapper = () => {
  const [taps, setTaps] = useState<number[]>([]);
  const [bpm, setBpm] = useState(0);

  const handleTap = () => {
    const now = Date.now();
    const newTaps = [...taps, now];

    // Keep only the last few taps to calculate the BPM
    const relevantTaps = newTaps.slice(-10);
    setTaps(relevantTaps);

    if (relevantTaps.length > 1) {
      const intervals = relevantTaps
        .slice(1)
        .map((tap, i) => tap - relevantTaps[i]);
      const averageInterval =
        intervals.reduce((sum, interval) => sum + interval, 0) /
        intervals.length;
      const newBpm = 60000 / averageInterval;
      setBpm(Math.round(newBpm));
      // setBpm((newBpm));
    }
  };

  return (
    <div className="mt-36  flex flex-col items-center justify-center ">
      <div>
        <h1 className="mb-4 flex items-center justify-center  text-3xl font-semibold">
          Tempo Tapper
        </h1>
        <div className=" mt-8 flex flex-col items-center justify-center text-lg">
          <div>
            Tap the button to the beat of the music to calculate the BPM.
          </div>
        </div>
      </div>
      <button
        onClick={handleTap}
        className="btn btn-circle btn-primary btn-lg mb-4 mt-9  p-32 text-center "
      >
        TAP
        <br />
      </button>
      <div className="text-5xl font-semibold">BPM: {bpm}</div>
      <div className=" mt-10 text-sm">
        The bpm is calculated based on the last 6 taps.
      </div>
    </div>
  );
};

export default TempoTapper;
