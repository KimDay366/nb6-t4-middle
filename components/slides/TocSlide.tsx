import React from "react";
import { motion } from "framer-motion";
import { SlideID } from "../../types";

interface TocSlideProps {
  onNavigate: (id: SlideID) => void;
}

interface TocItem {
  id: number;
  title: string;
  desc: string;
  slideId: SlideID;
}

const ITEMS: TocItem[] = [
  { id: 1, title: "INTRO", desc: "Main Page", slideId: "main" },
  { id: 2, title: "INDEX", desc: "Table of Contents", slideId: "toc" },
  { id: 3, title: "TEAM 소개", desc: "Members & Roles", slideId: "team" },
  { id: 4, title: "진행 상황", desc: "Project Progress", slideId: "progress" },
  // { id: 5, title: "세부 작업 내용", desc: "Done & To-do", slideId: "details" },
  { id: 5, title: "주요 구현 내용", desc: "Key Functions", slideId: "features" },
  // { id: 6, title: "TROUBLE SHOOTING", desc: "Troubleshooting", slideId: "trouble-1" },
  { id: 6, title: "최종 목표", desc: "Final Roadmap", slideId: "roadmap" },
];

const TocSlide: React.FC<TocSlideProps> = ({ onNavigate }) => {
  return (
    <div className="w-full h-full bg-white p-24 flex flex-col justify-center">
      <motion.h2 initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="text-8xl font-black mb-16 text-black border-l-[24px] border-[#E2FF00] pl-10">
        INDEX
      </motion.h2>

      <div className="grid grid-cols-2 gap-x-24 gap-y-12">
        {ITEMS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => onNavigate(item.slideId)}
            className="group cursor-pointer flex items-center gap-10 border-b-2 border-black/10 pb-6 hover:border-black transition-colors"
          >
            <span className="text-4xl font-black text-black/20 group-hover:text-[#E2FF00] transition-colors">{String(item.id).padStart(2, "0")}</span>
            <div className="flex flex-col">
              <span className="text-5xl font-extrabold text-black group-hover:translate-x-4 transition-transform">{item.title}</span>
              <span className="text-xl text-black/40 font-bold uppercase tracking-widest mt-1">{item.desc}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/4 bg-[#7FFFD4]/5 -z-0 pointer-events-none" />
    </div>
  );
};

export default TocSlide;
