import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function TroubleSlide1() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
        <span className="text-3xl font-black text-white bg-red-600 px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #01</span>
        <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">Performance Bottleneck</h2>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-20 h-20 bg-red-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-red-600" size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-red-600">The Problem</h4>
              <p className="text-3xl font-bold leading-tight break-keep">메인 대시보드 렌더링 시 과도한 하위 컴포넌트 리렌더링으로 인해 UI 프리징 및 60fps 미만으로 성능 저하 발생.</p>
            </div>
          </div>

          <div className="flex gap-8 items-start">
            <div className="w-20 h-20 bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-green-600">The Solution</h4>
              <p className="text-3xl font-bold leading-tight break-keep text-black/70 italic">
                React.memo 및 useMemo 도입, 연산이 많은 차트 데이터 가공 로직을 Web Worker로 이전하여 메인 스레드 부하 70% 감소.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="bg-black p-10 h-[500px] flex items-center justify-center">
            <div className="text-[#E2FF00] font-mono text-xl overflow-hidden leading-relaxed opacity-50">
              {`// Optimized Logic example\nconst memoizedChartData = useMemo(() => {\n  return expensiveCalculation(rawData);\n}, [rawData]);\n\n// Web Worker Dispatch\nworker.postMessage({ type: 'CALC', data: rawData });`}
            </div>
          </motion.div>
          <div className="absolute -top-10 -right-10 bg-[#E2FF00] text-black px-8 py-4 font-black text-4xl">Result: 120fps</div>
        </div>
      </div>
    </div>
  );
}
