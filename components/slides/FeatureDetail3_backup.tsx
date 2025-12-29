
import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureDetail3() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="mb-12">
          <span className="text-2xl font-black text-[#E2FF00] bg-black px-6 py-2 mb-4 inline-block uppercase tracking-tighter">Function 03 / Engineering Focus</span>
          <h2 className="text-[100px] font-black text-black leading-[0.85] uppercase tracking-tighter">Smart Search {'&'}<br/>Optimization</h2>
      </div>

      <div className="flex-1 flex gap-12">
          <div className="w-3/5 bg-black p-4 relative">
              <img 
                src="https://picsum.photos/seed/search-large/1200/800" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all"
                alt="Search ScreenShot"
              />
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-8 border-l-8 border-[#E2FF00]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-8 border-r-8 border-[#7FFFD4]" />
          </div>
          
          <div className="flex-1 flex flex-col justify-center gap-12 pl-10">
              <div className="border-l-4 border-black pl-8">
                  <h4 className="text-4xl font-black mb-4 uppercase">Advanced Filter</h4>
                  <p className="text-xl text-black/50 font-bold leading-relaxed break-keep">
                    수천 개의 데이터 사이에서 사용자 의도에 딱 맞는 결과를 0.2초 내로 찾아냅니다. 다중 조건 필터링과 자동 완성 기능이 탑재되었습니다.
                  </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                      <span className="text-6xl font-black italic text-black/10">0.2s</span>
                      <span className="text-lg font-black uppercase">Search Speed</span>
                  </div>
                  <div className="flex flex-col gap-2">
                      <span className="text-6xl font-black italic text-black/10">Alg-X</span>
                      <span className="text-lg font-black uppercase">Internal Engine</span>
                  </div>
              </div>

              <div className="bg-[#E2FF00] p-8">
                  <h5 className="text-2xl font-black uppercase mb-4">Core Tech Stack</h5>
                  <div className="flex flex-wrap gap-3">
                      {['ElasticSearch', 'React-Query', 'Debounce Optim', 'Full-Text Search'].map(tag => (
                          <span key={tag} className="px-3 py-1 bg-black text-white text-sm font-bold">{tag}</span>
                      ))}
                  </div>
              </div>
          </div>
      </div>
    </div>
  );
}
