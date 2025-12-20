
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap } from 'lucide-react';

export default function TroubleSlide3() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
          <span className="text-3xl font-black text-black bg-[#E2FF00] px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #03</span>
          <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">Mobile Experience</h2>
      </div>

      <div className="flex gap-20 items-center">
          <div className="w-1/3 flex justify-center">
              <div className="w-[300px] h-[600px] border-[12px] border-black rounded-[50px] overflow-hidden shadow-2xl relative">
                  <img src="https://picsum.photos/seed/mobile/400/800" className="w-full h-full object-cover" />
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-2 bg-black rounded-full" />
              </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-1 space-y-12"
          >
              <div className="p-10 bg-gray-50 border-r-[20px] border-black text-right">
                  <div className="flex items-center justify-end gap-4 mb-4">
                      <h4 className="text-3xl font-black uppercase text-black/30">The Challenge</h4>
                      <Smartphone className="text-black" size={40} />
                  </div>
                  <p className="text-4xl font-black leading-tight break-keep">
                    복잡한 필터 및 설정 UI가 모바일 작은 화면에서 뎁스가 너무 깊어 사용자가 길을 잃는 현상 발생.
                  </p>
              </div>

              <div className="p-10 bg-[#E2FF00] border-r-[20px] border-black text-right">
                  <div className="flex items-center justify-end gap-4 mb-4">
                      <h4 className="text-3xl font-black uppercase text-black">The Breakthrough</h4>
                      <Zap className="text-black" size={40} />
                  </div>
                  <p className="text-4xl font-black leading-tight break-keep">
                    Bottom Sheet 인터랙션 라이브러리를 직접 커스터마이징하여 한 손 조작이 가능한 직관적 UX 시스템을 재설계함.
                  </p>
              </div>
          </motion.div>
      </div>
    </div>
  );
}
