
import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureDetail2() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex gap-20 h-full flex-row-reverse">
        {/* Right Side: Technical Info */}
        <div className="w-1/3 flex flex-col justify-between py-10">
          <div className="text-right">
            <span className="text-2xl font-black text-[#7FFFD4] bg-black px-4 py-1 mb-6 inline-block uppercase">Function 02</span>
            <h2 className="text-7xl font-black text-black leading-tight uppercase mb-8">Data<br/>Visualization</h2>
            <p className="text-2xl font-medium text-black/60 leading-relaxed break-keep">
              프로젝트의 모든 지표를 한눈에 파악할 수 있는 대시보드입니다. 고성능 차트 라이브러리를 커스터마이징하여 복잡한 데이터를 직관적으로 풀어냈습니다.
            </p>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gray-50 border-r-8 border-[#7FFFD4] text-right">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Tech Stack</h4>
                <p className="text-xl font-bold">Recharts / D3</p>
              </div>
              <div className="p-6 bg-gray-50 border-r-8 border-[#E2FF00] text-right">
                <h4 className="text-xs font-black text-black/30 mb-2 uppercase">Customizing</h4>
                <p className="text-xl font-bold">100% SVG Based</p>
              </div>
            </div>
            <ul className="space-y-4 flex flex-col items-end">
               {['Interactive Filtering', 'Real-time Stats Stream', 'PDF Report Export'].map((item, i) => (
                 <li key={i} className="flex items-center gap-4 text-xl font-bold">
                    {item} <div className="w-3 h-3 bg-[#7FFFD4] rounded-full" />
                 </li>
               ))}
            </ul>
          </div>
        </div>

        {/* Left Side: Huge Screenshot */}
        <div className="flex-1 relative">
           <motion.div 
             initial={{ opacity: 0, x: -50 }}
             animate={{ opacity: 1, x: 0 }}
             className="w-full h-full bg-[#7FFFD4]/5 border-[20px] border-black overflow-hidden shadow-2xl"
           >
              <img 
                src="https://picsum.photos/seed/dash-large/1600/1200" 
                className="w-full h-full object-cover"
                alt="Dashboard ScreenShot"
              />
              <div className="absolute bottom-10 left-10 bg-black text-[#7FFFD4] px-6 py-3 text-2xl font-black italic">
                ANALYTICS_v1.5
              </div>
           </motion.div>
        </div>
      </div>
    </div>
  );
}
