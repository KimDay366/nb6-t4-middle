import React from "react";
import { motion } from "framer-motion";
import { SlideID } from "../../types";

interface FeaturesSlideProps {
  onNavigate: (id: SlideID) => void;
}

interface FeatureItem {
  id: string;
  title: string;
  desc: string;
  img: string;
  color: string;
  targetId: SlideID;
}

const FEATURES: FeatureItem[] = [
  {
    id: "01",
    title: "노션을 활용한 팀 작업",
    desc: " ",
    img: "timeline.png",
    color: "#E2FF00",
    targetId: "f-detail-1",
  },
  {
    id: "02",
    title: "ERD Modeling 작업",
    desc: " ",
    img: "ERD_fin.png",
    color: "#E2FF00",
    targetId: "f-detail-2",
  },
  {
    id: "03",
    title: "일반 User Auth",
    desc: "",
    img: "restApiAuth.png",
    color: "#7FFFD4",
    targetId: "f-detail-3",
  },
];

export default function FeaturesSlide({ onNavigate }: FeaturesSlideProps) {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex items-end justify-between mb-20">
        <div className="relative">
          <motion.h2
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-[90px] font-black leading-none tracking-tighter text-black uppercase "
            style={{ paddingTop: "15px" }}
          >
            주요 구현 내용
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1 }} className="h-5 bg-[#E2FF00] absolute left-0 -bottom-5 w-full origin-left" />
        </div>
        <p className="text-xl font-black text-black/30 text-right uppercase tracking-widest max-w-xs">Click cards to see</p>
      </div>

      <div className="flex-1 grid grid-cols-3 gap-16">
        {FEATURES.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + index * 0.1 }}
            onClick={() => onNavigate(feature.targetId)}
            className="flex flex-col group h-full cursor-pointer"
          >
            <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden mb-12 border-2 border-black/5 group-hover:border-black transition-all duration-500 shadow-sm group-hover:shadow-2xl">
              <img
                src={`../../img/${feature.img}`}
                alt={feature.title}
                className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="px-6 py-3 bg-white text-black font-black uppercase text-xl">View Details +</span>
              </div>
              <div className="absolute bottom-0 right-0 w-16 h-16" style={{ background: `linear-gradient(135deg, transparent 50%, ${feature.color} 50%)` }} />
            </div>

            <div className="flex flex-col">
              <h3 className="text-5xl font-black tracking-tight group-hover:text-[#E2FF00] bg-black group-hover:bg-black transition-all inline-block px-4 py-2 self-start mb-4 text-white uppercase">
                {feature.title}
              </h3>
              <p className="text-2xl font-medium text-black/50 leading-relaxed pr-8">{feature.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
