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
                파일 업로드 기능 구현 시, 클라이언트와 서버 간 파일 경로 처리 방식에서 절대 경로·상대 경로가 혼재되며 미리보기 불가, 잘못된 접근 오류가 반복적으로 발생
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
                서버에서 파일 저장 시에는 상대 경로로 통일하고, 클라이언트로 전달하는 응답 단계에서만 BASE_URL을 조합하도록 구조를 분리
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
