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
  image: string;
  color: string;
  targetId: SlideID;
}

const FEATURES: FeatureItem[] = [
  {
    id: "01",
    title: "REAL-TIME CHAT",
    desc: "WebSocket 기반 실시간 데이터 동기화 시스템. 메시지 송수신과 상태 관리를 시각화합니다.",
    image: "https://picsum.photos/seed/chat-overview/800/600",
    color: "#E2FF00",
    targetId: "f-detail-1",
  },
  {
    id: "02",
    title: "DATA DASHBOARD",
    desc: "복잡한 비즈니스 로직을 시각화하는 커스텀 차트 시스템. 데이터 직관성을 극대화했습니다.",
    image: "https://picsum.photos/seed/dash-overview/800/600",
    color: "#7FFFD4",
    targetId: "f-detail-2",
  },
  {
    id: "03",
    title: "SMART SEARCH",
    desc: "고도화된 필터링 엔진과 검색 최적화 기술 적용. 초고속 검색 결과물을 보장합니다.",
    image: "https://picsum.photos/seed/search-overview/800/600",
    color: "#E2FF00",
    targetId: "f-detail-3",
  },
];

export default function FeaturesSlide({ onNavigate }: FeaturesSlideProps) {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex items-end justify-between mb-20">
        <div className="relative">
          <motion.h2 initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} className="text-[110px] font-black leading-none tracking-tighter text-black uppercase">
            Core Functions
          </motion.h2>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 1 }} className="h-5 bg-[#E2FF00] absolute -bottom-2 left-0 w-full origin-left" />
        </div>
        <p className="text-xl font-black text-black/30 text-right uppercase tracking-widest max-w-xs">
          Click cards to see
          <br />
          detailed technical specs
        </p>
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
              <img src={feature.image} alt={feature.title} className="w-full h-full object-cover grayscale-[0.3] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" />
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
