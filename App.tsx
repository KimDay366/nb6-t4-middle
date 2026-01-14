import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, List } from "lucide-react";
import { SlideID } from "./types";
import MainSlide from "./components/slides/MainSlide";
import TocSlide from "./components/slides/TocSlide";
import TeamSlide from "./components/slides/TeamSlide";
import TeamSlideOrigin from "./components/slides/TeamSlide_origin";
import ProgressSlide from "./components/slides/ProgressSlide";
import DetailsSlide from "./components/slides/DetailsSlide";
import FeaturesSlide from "./components/slides/FeaturesSlide";
import FeatureDetail1 from "./components/slides/FeatureDetail1";
import FeatureDetail2 from "./components/slides/FeatureDetail2";
import FeatureDetail3 from "./components/slides/FeatureDetail3";
import FeatureDetail4 from "./components/slides/FeatureDetail4";
import TroubleSlide1 from "./components/slides/TroubleSlide1";
import TroubleSlide2 from "./components/slides/TroubleSlide2";
import TroubleSlide3 from "./components/slides/TroubleSlide3";
import RoadmapSlide from "./components/slides/RoadmapSlide";

const SLIDE_IDS: SlideID[] = ["main", "toc", "team", "progress", "features", "f-detail-1", "f-detail-2", "f-detail-3", "f-detail-4", "trouble-1", "trouble-2", "trouble-3", "roadmap"];
// SLIDE_IDS 제거 : "details", "trouble-1", "trouble-2", "trouble-3","teamorigin",

export default function App() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(0);
  const [scale, setScale] = useState(1);

  const handleResize = useCallback(() => {
    const targetWidth = 1920;
    const targetHeight = 1080;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const scaleW = windowWidth / targetWidth;
    const scaleH = windowHeight / targetHeight;
    const newScale = Math.min(scaleW, scaleH);

    setScale(newScale);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  const goToSlideById = (id: SlideID) => {
    const targetIdx = SLIDE_IDS.indexOf(id);
    if (targetIdx === -1 || targetIdx === currentIdx) return;

    setDirection(targetIdx > currentIdx ? 1 : -1);
    setCurrentIdx(targetIdx);
  };

  const paginate = (newDirection: number) => {
    const nextIdx = currentIdx + newDirection;
    if (nextIdx < 0 || nextIdx >= SLIDE_IDS.length) return;
    setDirection(newDirection);
    setCurrentIdx(nextIdx);
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") paginate(1);
      if (e.key === "ArrowLeft") paginate(-1);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [currentIdx]);

  const renderSlide = (id: SlideID) => {
    switch (id) {
      case "main":
        return <MainSlide />;
      case "toc":
        return <TocSlide onNavigate={goToSlideById} />;
      case "team":
        return <TeamSlide />;
      case "progress":
        return <ProgressSlide />;
      case "features":
        return <FeaturesSlide onNavigate={goToSlideById} />;
      case "f-detail-1":
        return <FeatureDetail1 />;
      case "f-detail-2":
        return <FeatureDetail2 />;
      case "f-detail-3":
        return <FeatureDetail3 />;
      case "f-detail-4":
        return <FeatureDetail4 />;
      case "trouble-1":
        return <TroubleSlide1 />;
      case "trouble-2":
        return <TroubleSlide2 />;
      case "trouble-3":
        return <TroubleSlide3 />;
      case "roadmap":
        return <RoadmapSlide />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center overflow-hidden">
      <div
        style={{
          width: "1920px",
          height: "1080px",
          transform: `scale(${scale})`,
          transformOrigin: "center center",
        }}
        className="bg-white relative overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.08)] shrink-0 border border-black/5"
      >
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIdx}
            custom={direction}
            variants={{
              enter: (dir: number) => ({
                x: dir > 0 ? "100%" : "-100%",
                opacity: 0,
                filter: "blur(20px)",
              }),
              center: {
                x: 0,
                opacity: 1,
                filter: "blur(0px)",
                zIndex: 1,
              },
              exit: (dir: number) => ({
                x: dir < 0 ? "100%" : "-100%",
                opacity: 0,
                filter: "blur(20px)",
                zIndex: 0,
              }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 260, damping: 30 },
              opacity: { duration: 0.3 },
            }}
            className="absolute inset-0 w-full h-full"
          >
            {renderSlide(SLIDE_IDS[currentIdx])}
          </motion.div>
        </AnimatePresence>

        {/* Global Branding Overlay (Top Left) */}
        <div className="absolute top-12 left-12 z-50 pointer-events-none">
          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-[#E2FF00]" />
            <span className="text-black font-black text-2xl tracking-[0.4em] uppercase">TEAM4 MOONSHOT PROJECT</span>
          </div>
        </div>

        {/* Global TOC Shortcut Button (Top Right) */}
        <button
          onClick={() => goToSlideById("toc")}
          className={`absolute top-12 right-12 z-50 flex items-center gap-4 bg-black px-8 py-4 rounded-xl shadow-2xl hover:bg-[#E2FF00] hover:text-black transition-all group ${
            SLIDE_IDS[currentIdx] === "toc" ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <span className="text-white group-hover:text-black font-black text-xl tracking-widest uppercase italic">Index</span>
          <List size={28} className="text-[#E2FF00] group-hover:text-black" />
        </button>

        {/* Floating Controls (Bottom Right) */}
        <div className="absolute bottom-10 right-10 z-50 flex items-center gap-8 bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-black/10 shadow-xl">
          <div className="flex flex-col items-end">
            <span className="text-black/30 text-xl font-black tracking-tighter uppercase">Section</span>
            <div className="text-black font-black text-5xl leading-none">
              {String(currentIdx + 1).padStart(2, "0")}
              <span className="text-black/20 text-3xl mx-2">/</span>
              <span className="text-black/20 text-3xl">{String(SLIDE_IDS.length).padStart(2, "0")}</span>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => paginate(-1)}
              disabled={currentIdx === 0}
              className="w-15 h-20 rounded-xl border-4 border-black flex items-center justify-center hover:bg-black hover:text-white transition-all disabled:opacity-5 group"
            >
              <ChevronLeft size={40} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => paginate(1)}
              disabled={currentIdx === SLIDE_IDS.length - 1}
              className="w-15 h-20 rounded-xl border-4 border-black flex items-center justify-center hover:bg-black hover:text-[#E2FF00] transition-all disabled:opacity-5 group"
            >
              <ChevronRight size={40} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
