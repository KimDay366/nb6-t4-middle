import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["ERD_fin.png", "prisma_studio.png", "ps_sch_project.png"];

export default function FeatureDetail1() {
  const [index, setIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        {/* Left Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 02</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              ERD <br /> Modeling <br /> & Prisma Schema 작업
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">
              프로젝트 요구 사항을 바탕으로 데이터 베이스 모델링 작업을 진행 후 Prisma schema 작업을 진행 하였습니다.
              <br />
              <span style={{ color: "#999", fontSize: "20px" }}>( 이미지를 클릭 하면 확대 됩니다 )</span>
            </p>
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
          </div>
        </div>

        <div className="flex-1 relative overflow-hidden">
          <motion.div className="flex" animate={{ x: `-${index * 100}%` }} transition={{ type: "spring", stiffness: 200, damping: 25 }}>
            {images.map((src, i) => (
              <div key={i} className="min-w-full flex justify-center">
                <img src={`../../img/${images[index]}`} className="w-full object-cover border-2 border-black cursor-pointer" style={{ marginTop: "150px" }} onClick={() => setIsOpen(true)} />
              </div>
            ))}
          </motion.div>

          <div className="absolute bottom-10 left-10 flex gap-4">
            <button onClick={prev} className="px-6 py-3 bg-black text-[#fff] font-black">
              ←
            </button>
            <button onClick={next} className="px-6 py-3 bg-black text-[#fff] font-black">
              →
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                className="fixed inset-0 bg-black/80 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                style={{ zIndex: 5000 }}
                onClick={() => setIsOpen(false)}
              >
                <motion.img
                  src={`../../img/${images[index]}`}
                  className="max-w-[90vw] max-h-[90vh] border-4 border-white"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1.2 }}
                  exit={{ scale: 0.8 }}
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
