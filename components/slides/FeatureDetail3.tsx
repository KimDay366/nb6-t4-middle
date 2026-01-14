import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = ["restApiAuth.png", "authGitLog.png", "oauthwork.png"];

export default function FeatureDetail1() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full">
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div>
            <span className="text-2xl font-black text-[#E2FF00] bg-black px-4 py-1 mb-6 inline-block">FUNCTION 03</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">
              User 관련
              <br />
              Auth / Oauth 작업
            </h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">
              전체 시스템에서 공통으로 사용되는 사용자 등록 기능을 구현했습니다. 일반 회원 가입과 OAuth 기반 구글 회원 가입을 각각 분리해 처리했습니다. Oauth의 전체 흐름을 파악하기 위하여 Passport를
              사용하지 않고, 직접 전체 구조를 구현하였습니다
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-l-8 border-[#E2FF00]">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">VSCode & GitHub</p>
              </div>
            </div>
          </div>
        </div>

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

            <div className="absolute bottom-10 left-10 flex gap-4">
              <button onClick={prev} className="px-6 py-3 bg-black text-[#fff] font-black">
                ←
              </button>
              <button onClick={next} className="px-6 py-3 bg-black text-[#fff] font-black">
                →
              </button>
            </div>
          </div>
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#7FFFD4] -z-10" />
        </div>
      </div>
    </div>
  );
}
