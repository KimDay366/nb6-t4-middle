
import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Lightbulb } from 'lucide-react';

const TROUBLES = [
  {
    tag: 'PERFORMANCE',
    issue: '메인 대시보드에서 대량의 데이터를 실시간으로 렌더링할 때 프레임 드랍 발생.',
    solution: 'React.memo와 useMemo를 적극 활용하고, 차트 데이터 가공 로직을 Web Worker로 분리하여 메인 스레드 부하 감소.'
  },
  {
    tag: 'SECURITY',
    issue: 'API 요청 시 사용자 토큰 탈취 위험성 노출.',
    solution: 'Refresh Token 도입 및 HttpOnly 쿠키 방식을 적용하여 클라이언트 사이드 스크립트 접근 차단.'
  },
  {
    tag: 'UI/UX',
    issue: '모바일 환경에서 복잡한 필터 UI가 화면을 가려 조작 불편.',
    solution: 'Bottom Sheet 패턴을 도입하고, 검색 필터를 단계별 모달 방식으로 변경하여 가독성 확보.'
  }
];

const TroubleshootingSlide: React.FC = () => {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-20">
        <h2 className="text-[120px] font-black text-black leading-none tracking-tighter">TROUBLE<br/>SHOOTING</h2>
      </motion.div>

      <div className="grid grid-cols-1 gap-8 flex-1">
        {TROUBLES.map((t, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.2 }}
            className="flex gap-12 group"
          >
            <div className="w-48 pt-4">
               <span className="bg-black text-[#E2FF00] px-4 py-2 font-black text-xl tracking-widest">#{t.tag}</span>
            </div>
            
            <div className="flex-1 border-l-8 border-black pl-12 pb-12 group-hover:border-[#E2FF00] transition-colors">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <AlertCircle className="shrink-0 text-red-500" size={36} />
                  <div>
                    <h4 className="text-xl font-bold text-black/40 uppercase mb-2">The Issue</h4>
                    <p className="text-3xl font-bold leading-tight">{t.issue}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Lightbulb className="shrink-0 text-[#E2FF00]" size={36} />
                  <div>
                    <h4 className="text-xl font-bold text-black/40 uppercase mb-2">The Solution</h4>
                    <p className="text-2xl font-medium leading-relaxed text-black/70 italic bg-gray-50 p-6 rounded-xl border border-black/5">
                      {t.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TroubleshootingSlide;
