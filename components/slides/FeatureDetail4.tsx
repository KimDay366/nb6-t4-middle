import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["render.png", "", "", "", ""];

export default function FeatureDetail1() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        {/* Left Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 04</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              다양한 기능 구현 및 <br /> 최종 배포
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">
              회원가입부터 프로젝트·업무 관리까지 이어지는 협업 시스템의 핵심 기능을 구현했습니다. 사용자 관리, 멤버 초대·권한 관리, 프로젝트 및 할 일·댓글 기능을 개발했습니다. 파일 업로드를 포함한
              업무 흐름 전반을 통합해 실제 사용 가능한 서비스 구조를 완성했습니다.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-l-8 border-[#E2FF00]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">
                  <a href="https://www.notion.so/Team-Project-2ce61538a9e2806ba419d21e4473dc06?source=copy_link" target="_blank">
                    렌더 링크 쓸까요?
                  </a>
                </p>
              </div>
              {/* <div className="p-6 bg-gray-50 border-l-8 border-[#7FFFD4]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Performance</h4>
                <p className="text-xl font-bold">포포몬스 {"<"} 100ms</p>
              </div> */}
            </div>
            {/* <ul className="space-y-4">
              {["수정 필요 1", "수정 필요 2", "수정 필요 3"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-3 h-3 bg-black rounded-full" /> {item}
                </li>
              ))}
            </ul> */}
          </div>
        </div>

        {/* Right Side: Huge Screenshot */}
        {/* <div className="flex-1 relative">
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             animate={{ opacity: 1, scale: 1 }}
             className="w-full h-full bg-[#E2FF00]/5 border-[20px] border-black overflow-hidden shadow-2xl"
           >
              <img 
                src="https://picsum.photos/seed/chat-large/1600/1200" 
                className="w-full h-full object-cover"
                alt="Chat ScreenShot"
              />
              <div className="absolute top-10 right-10 bg-black text-[#E2FF00] px-6 py-3 text-2xl font-black italic">
                MAIN UI_v2.0
              </div>
           </motion.div> */}

        {/* Right Side: Image Slider */}
        <div className="flex-1 relative overflow-hidden">
          <div className="w-full h-full bg-[#fff]/5 shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={`../../img/${images[index]}`}
                alt="Chat Screenshot"
                className="absolute inset-0 w-full object-cover border-2px] border-black "
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "100%", top: "10%", border: "2px solid #000" }}
              />
            </AnimatePresence>

            {/* <div className="absolute top-10 right-10 bg-black text-[#E2FF00] px-6 py-3 text-2xl font-black italic">MAIN UI_v{index + 1}.0</div> */}

            {/* Controls */}
            <div className="absolute bottom-10 left-10 flex gap-4">
              <button onClick={prev} className="px-6 py-3 bg-black text-[#fff] font-black">
                ←
              </button>
              <button onClick={next} className="px-6 py-3 bg-black text-[#fff] font-black">
                →
              </button>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7FFFD4] -z-10" />
        </div>
      </div>
    </div>
  );
}
