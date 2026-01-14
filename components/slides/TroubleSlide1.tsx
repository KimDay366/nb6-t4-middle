import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function TroubleSlide1() {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col justify-center">
      <div className="mb-16">
        <span className="text-3xl font-black text-white bg-red-600 px-6 py-2 mb-6 inline-block uppercase tracking-tighter italic">Troubleshooting #01</span>
        <h2 className="text-8xl font-black text-black leading-none uppercase tracking-tighter">파일 저장에 대한 절대 경로 / 상대 경로</h2>
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
                파일 업로드와 소셜 로그인 과정에서 절대 경로와 상대 경로가 구분되지 않은 채 동일하게 처리되어, 파일 및 프로필 이미지가 정상적으로 로딩되지 않는 문제가 발생
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
                경로 생성 로직에 조건 분기를 추가해 서버 저장용 상대 경로와 클라이언트 제공용 절대 경로를 명확히 분리함으로써 문제를 해결
              </p>
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="h-[300px] flex items-center justify-center">
            <div className="flex items-center justify-center relative border-2 border-black">
              <img src={`../../img/fileurl.png`} className="w-full " />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
