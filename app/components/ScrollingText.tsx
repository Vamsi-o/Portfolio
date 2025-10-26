'use client'
import React, { useEffect, useRef, useState } from "react";

export default function ScrollingText({ items }: { items: string[] }) {
  const list = items && items.length ? items : ["Your text here"];
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const REPEAT_COUNT = 1;
  const repeated = Array.from({ length: REPEAT_COUNT }).flatMap(() => list);
  const [duration, setDuration] = useState<number>(20);

  useEffect(() => {
    const updateDuration = () => {
      const track = trackRef.current;
      if (!track) return;
      const full = track.scrollWidth || 1;
      const single = Math.max(1, Math.round(full / 2));
      const speed = 80;
      const computed = Math.max(10, Math.min(60, Math.round(single / speed)));
      setDuration(computed);
    };
    updateDuration();
    window.addEventListener("resize", updateDuration);
    return () => window.removeEventListener("resize", updateDuration);
  }, [list.join("|")]);

  return (
    <>
      <style jsx>{`
  .wrapper {
    overflow: hidden;
    white-space: nowrap;
    background: transparent; /* ✅ transparent */
    padding: 2rem 0;
    position: relative;
  }

  /* ✅ Softer fade — barely visible */
  .wrapper::before,
  .wrapper::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 80px;
    pointer-events: none;
    z-index: 2;
  }

  .wrapper::before {
    left: 0;
    background: linear-gradient(
      to right,
      rgba(15, 15, 30, 0.7),
      rgba(15, 15, 30, 0)
    );
  }

  .wrapper::after {
    right: 0;
    background: linear-gradient(
      to left,
      rgba(15, 15, 30, 0.7),
      rgba(15, 15, 30, 0)
    );
  }

  .track {
    display: inline-flex;
    align-items: center;
    will-change: transform;
    animation: scroll var(--dur) linear infinite;
    transform: translate3d(0, 0, 0);
  }

  .item {
    display: inline-block;
    padding: 0 5rem;
    color: rgba(255, 255, 255, 0.85); /* ✅ brighter, elegant gray */
    font-weight: 500;
    font-size: 1.4rem;
    letter-spacing: 0.5px;
    transition: color 0.3s ease, opacity 0.3s ease;
  }

  .track:hover {
    animation-play-state: paused;
  }

  .item:hover {
    color: #fff; /* ✅ pure white on hover */
  }

  @keyframes scroll {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`}</style>


      <div className="wrapper" ref={containerRef}>
        <div
          className="track"
          ref={trackRef}
          style={{ ["--dur" as any]: `${duration}s` }}
          aria-hidden={false}
        >
          {repeated.map((item, i) => (
            <span key={i} className="item">
              {item}
            </span>
          ))}
          {repeated.map((item, i) => (
            <span key={`dup-${i}`} className="item" aria-hidden="true">
              {item}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}
