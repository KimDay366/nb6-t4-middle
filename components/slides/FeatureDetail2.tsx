import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeatureDetail1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        {/* Left Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 02</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              ERD <br /> Modeling 작업
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">프로젝트 요구 사항을 바탕으로 데이터 베이스 모델링 작업을 진행 후 Prisma schema 작업을 진행 하였습니다.</p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-l-8 border-[#E2FF00]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">dbdiagram.io</p>
              </div>
              <div className="p-6 bg-gray-50 border-l-8 border-[#7FFFD4]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Link</h4>
                <p className="text-xl font-bold">
                  <a href="https://dbdiagram.io/d/nb6-4team-erd-694a3eae61d95806cf422f56" target="_blank">
                    작업 ERD 바로가기
                  </a>
                </p>
              </div>
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
        <div className="flex-1 relative">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full bg-[#fff]/5  overflow-hidden ">
            <img
              src="../../img/ERD_fin.png"
              className="w-full object-cover border-[2px] border-black"
              alt="Chat ScreenShot"
              style={{ marginTop: "150px", cursor: "pointer" }}
              onClick={() => setIsOpen(true)}
            />

            {/* <div className="absolute top-10 right-10 bg-black text-[#E2FF00] px-6 py-3 text-2xl font-black italic">MAIN UI_v2.0</div> */}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7FFFD4] -z-10" />

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 z-500 bg-black/80 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsOpen(false)}
                style={{ zIndex: "5000" }}
              >
                <motion.img
                  src="../../img/ERD_fin.png"
                  className="max-w-[90vw] max-h-[90vh] border-4 border-white"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.3 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()} // 배경 클릭만 닫히게
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
