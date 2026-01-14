import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

const images = ["/img/oauthworkflow.png", "/img/ts_oauth.png"];

export default function TroubleSlide1() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
        <span className="text-3xl font-black text-white bg-red-600 px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #03</span>
        <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">구글 Oauth 구현</h2>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-20 h-20 bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-red-600" size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-red-600">The Problem</h4>
              <p className="text-3xl font-bold leading-tight break-keep">
                구글 OAuth 명세상 리다이렉트 URI가 프론트가 아닌 백엔드 콜백으로 고정되어 있어, 인증 워크플로우 전체를 동일 브라우저 컨텍스트로 유지해야 했고 최종 토큰을 JSON으로 응답할 수 없는 구조
              </p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-20 h-20 bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-green-600">The Solution</h4>
              <p className="text-3xl font-bold leading-tight break-keep text-black/70 italic">
                프론트로 직접 응답하는 대신, 백엔드에서 OAuth 콜백 완료 후 토큰을 쿠키에 담아 리다이렉트 방식으로 전달하도록 구조를 변경
              </p>
            </div>
          </div>
        </motion.div>

        <div className="flex-1 relative overflow-hidden h-[600px]">
          <div className="w-full h-full bg-[#fff]/5 shadow-2xl relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt="Chat Screenshot"
                className="absolute inset-0 w-full object-cover border-2px border-black "
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                style={{ width: "100%", border: "2px solid #000" }}
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
