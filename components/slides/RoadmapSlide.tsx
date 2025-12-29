import React from "react";
import { motion } from "framer-motion";

const GOALS = [
  { week: "FIN 01", title: "ERD, R&R 분배", desc: ["ERD 모델링", "각 파트 R&R 분리 작업", "팀 규칙 및 파일 구조", "공통 파일 생성"], date: "작업 기간 : 25.12.22 ~ 30" },
  { week: "NEXT 01", title: "기능 구현 및 테스트", desc: ["각자 맡은 파트 구현", "개별 테스트 작업"], date: "작업 기간 : 25.12.22 ~ 30" },
  { week: "NEXT 02", title: "오류 수정 및 최적화", desc: ["프로젝트 전체 검수", "서비스 최적화", "API 문서화"], date: "작업 기간 : 25.12.22 ~ 30" },
  { week: "FINAL", title: "최종 완성", desc: ["프로젝트 배포", "최종 발표"] },
];

const RoadmapSlide: React.FC = () => {
  return (
    <div className="w-full h-full p-24 bg-white relative overflow-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-[800px] h-full flex items-center justify-center opacity-[0.03] pointer-events-none">
        <span className="text-[600px] font-black italic -rotate-90">GOAL</span>
      </div>

      <div className="flex flex-col h-full justify-between">
        <div>
          <h2 className="text-8xl font-black mb-8 italic">
            THE FINAL
            <br />
            DESTINATION
          </h2>
          {/* <div className="flex items-center gap-6">
            <div className="px-6 py-2 bg-[#E2FF00] text-black font-black text-2xl">ROADMAP</div>
            <div className="text-2xl text-black/30 font-bold uppercase tracking-widest italic"></div>
          </div> */}
        </div>

        <div className="grid grid-cols-4 gap-4 mt-20 relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-black/10 -translate-y-1/2" style={{ marginTop: "-210px" }} />

          {GOALS.map((g, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.2 }} className="relative z-10">
              <div className={`w-full p-10 bg-white border-4 ${i === 3 ? "border-[#E2FF00]" : "border-black"} hover:shadow-2xl transition-all group`}>
                <span className="text-xl font-black text-black/20 block mb-2">{g.week}</span>
                <h3 className="text-4xl font-black mb-4 group-hover:text-[#E2FF00] transition-colors">{g.title}</h3>
                <ul className="space-y-2">
                  {g.desc.map((p, pi) => (
                    <li key={pi} className="text-black/60 font-medium text-lg flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full" />
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-lg font-medium text-black/50 leading-relaxed" style={{ marginTop: "10px" }}>
                  {g.date}
                </p>
                {i === 3 && (
                  <div className="mt-8 pt-8 border-t-2 border-dashed border-[#E2FF00]">
                    <span className="text-sm font-black uppercase tracking-widest text-[#E2FF00] bg-black px-3 py-1">Project Completed</span>
                    <br /> 2026.1.14
                  </div>
                )}
              </div>
              <div
                className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-white ${i === 3 ? "bg-[#E2FF00]" : "bg-black"}`}
                style={{ marginTop: "-210px" }}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex justify-between items-end">
          <div className="max-w-2xl">
            <p className="text-3xl font-bold leading-tight">
              {/* 감사합니다.  */}
              {/* <br />
              <span className="text-[#E2FF00] bg-black px-2">사용자에게 가치를 주는 서비스</span>를 만듭니다. */}
            </p>
          </div>
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-6 bg-black text-white text-3xl font-black hover:bg-[#7FFFD4] hover:text-black transition-all italic"
          >
            GET IN TOUCH →
          </motion.button> */}
        </div>
      </div>
    </div>
  );
};

export default RoadmapSlide;
