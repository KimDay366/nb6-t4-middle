import React from "react";
import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck } from "lucide-react";

export default function TroubleSlide2() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
        <span className="text-3xl font-black text-white bg-blue-600 px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #02</span>
        <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">Prisma ORM 활용</h2>
      </div>

      <div className="grid grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="bg-gray-100 h-[500px] flex items-center justify-center relative border-4 border-black">
            <img src={`../../img/ts2.png`} className="w-full h-full" />
          </div>
        </div>

        <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
          <div className="flex gap-8 items-start">
            <div className="w-20 h-20 bg-blue-100 flex items-center justify-center shrink-0">
              <ShieldAlert className="text-blue-600" size={48} />
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase mb-4 text-blue-600">The Problem</h4>
              <p className="text-3xl font-bold leading-tight break-keep">
                프로젝트 로직에서 상태별 개수 집계가 필요했지만, 기존에는 데이터를 모두 조회한 뒤 애플리케이션 레벨에서 직접 카운트하고 있어 비효율적
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
                Prisma ORM의 groupBy 메서드등 기존에 사용하지 않던 명령어를 활용해 DB작업을 진행함으로써 쿼리를 단순화하고, Prisma의 기능과 ORM 활용 범위에 대한 이해를 확장할 수 있었음
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
