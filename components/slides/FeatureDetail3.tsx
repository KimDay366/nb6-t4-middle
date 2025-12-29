import React from "react";
import { motion } from "framer-motion";

export default function FeatureDetail1() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        {/* Left Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 01</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              Real-time
              <br />
              Chat Engine
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">
              단순한 텍스트 전달을 넘어, 실시간 읽음 처리, 타이핑 인디케이터, 파일 전송 상태 동기화가 완벽하게 구현된 채팅 모듈입니다.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-l-8 border-[#E2FF00]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">Socket.io</p>
              </div>
              <div className="p-6 bg-gray-50 border-l-8 border-[#7FFFD4]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Performance</h4>
                <p className="text-xl font-bold">Latency {"<"} 100ms</p>
              </div>
            </div>
            <ul className="space-y-4">
              {["End-to-End Encryption", "Message Persistence (Redis)", "Infinite Scroll History"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-3 h-3 bg-black rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Huge Screenshot */}
        <div className="flex-1 relative">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full bg-[#E2FF00]/5 border-[20px] border-black overflow-hidden shadow-2xl">
            <img src="https://picsum.photos/seed/chat-large/1600/1200" className="w-full h-full object-cover" alt="Chat ScreenShot" />
            <div className="absolute top-10 right-10 bg-black text-[#E2FF00] px-6 py-3 text-2xl font-black italic">MAIN UI_v2.0</div>
          </motion.div>
          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7FFFD4] -z-10" />
        </div>
      </div>
    </div>
  );
}
