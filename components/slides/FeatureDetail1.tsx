import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function FeatureDetail1() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        {/* Left Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 01</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              ERD <br /> Modeling 작업
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">ERD 작업에 대한 여러 의견을 취합하여 수정 필요 😉</p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-l-8 border-[#E2FF00]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">dbdiagram.io</p>
              </div>
              {/* <div className="p-6 bg-gray-50 border-l-8 border-[#7FFFD4]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Performance</h4>
                <p className="text-xl font-bold">{"<"} 100ms</p>
              </div> */}
            </div>
            <ul className="space-y-4">
              {["수정 필요 1", "수정 필요 2", "수정 필요 3"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-xl font-bold">
                  <div className="w-3 h-3 bg-black rounded-full" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side: Huge Screenshot */}
        <div className="flex-1 relative">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full h-full bg-[#fff]/5  overflow-hidden ">
            <img src="../../img/ERD_fin.png" className="w-full object-cover border-[2px] border-black" alt="Chat ScreenShot" style={{ marginTop: "150px" }} />
            {/* <div className="absolute top-10 right-10 bg-black text-[#E2FF00] px-6 py-3 text-2xl font-black italic">MAIN UI_v2.0</div> */}
          </motion.div>

          {/* Decorative elements */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7FFFD4] -z-10" />
        </div>
      </div>
    </div>
  );
}
