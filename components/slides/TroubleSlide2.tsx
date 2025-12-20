
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, ShieldCheck } from 'lucide-react';

export default function TroubleSlide2() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
          <span className="text-3xl font-black text-white bg-blue-600 px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #02</span>
          <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">Security & Auth</h2>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
          <div className="relative">
              <div className="bg-gray-100 h-[500px] flex items-center justify-center relative border-4 border-black">
                  <img src="https://picsum.photos/seed/security/800/600" className="w-full h-full object-cover grayscale opacity-30" />
                  <div className="absolute inset-0 flex items-center justify-center flex-col gap-4">
                      <div className="w-32 h-32 bg-black text-[#7FFFD4] rounded-full flex items-center justify-center">
                          <ShieldCheck size={64} />
                      </div>
                      <span className="text-2xl font-black">HTTPS + JWT SECURED</span>
                  </div>
              </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
              <div className="flex gap-8 items-start">
                  <div className="w-20 h-20 bg-blue-100 flex items-center justify-center shrink-0">
                      <ShieldAlert className="text-blue-600" size={48} />
                  </div>
                  <div>
                      <h4 className="text-2xl font-black uppercase mb-4 text-blue-600">The Problem</h4>
                      <p className="text-3xl font-bold leading-tight break-keep">
                        브라우저 로컬 스토리지에 토큰을 보관할 시 XSS 공격에 취약하며 토큰 탈취 위험성이 크리티컬한 문제로 제기됨.
                      </p>
                  </div>
              </div>

              <div className="flex gap-8 items-start">
                  <div className="w-20 h-20 bg-[#7FFFD4] flex items-center justify-center shrink-0">
                      <ShieldCheck className="text-black" size={48} />
                  </div>
                  <div>
                      <h4 className="text-2xl font-black uppercase mb-4">The Solution</h4>
                      <p className="text-3xl font-bold leading-tight break-keep text-black/70 italic">
                        Access Token은 인메모리 보관, Refresh Token은 HttpOnly/Secure 쿠키 방식으로 전환하여 스크립트 접근 원천 차단.
                      </p>
                  </div>
              </div>
          </motion.div>
      </div>
    </div>
  );
}
