import React from "react";
import { motion } from "framer-motion";

const MainSlide: React.FC = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-40 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-[#E2FF00]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          rotate: -360,
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-[#7FFFD4]/10 rounded-full blur-3xl"
      />

      <div className="relative z-10 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-8">
          <span className="px-6 py-2 bg-black text-[#E2FF00] font-black text-xl uppercase tracking-widest">Dev Academy Project</span>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-[150px] leading-[0.9] font-black italic text-black">
          MOONSHOT
          <br />
          중간 발표
          <br />
          <span className="text-transparent" style={{ WebkitTextStroke: "2px black" }}>
            TEAM4
          </span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 flex items-end justify-between border-t-4 border-black pt-8 origin-left"
        >
          <div className="text-3xl font-bold max-w-xl">
            우리 팀의 열정과 기술이 담긴
            <br /> 중급 프로젝트 결과물을 소개합니다.
          </div>
          <div className="text-right">
            {/* <div className="text-[#E2FF00] bg-black px-4 py-1 inline-block text-xl font-black mb-2 uppercase">Team. Neon Mind</div> */}
            <div className="text-black/40 text-lg uppercase tracking-wider">2025 CODEIT BootCamp</div>
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-40 -translate-y-1/2 flex flex-col gap-4">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
            className={`h-16 w-32 ${i % 2 === 0 ? "bg-[#E2FF00]" : "bg-[#7FFFD4]"}`}
          />
        ))}
      </div>

      <motion.div animate={{ x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 font-black text-black/20 flex items-center gap-4">
        <span className="text-sm tracking-widest uppercase italic">Press arrow keys or use buttons to navigate</span>
        <div className="w-20 h-[2px] bg-black/10" />
      </motion.div>
    </div>
  );
};

export default MainSlide;
