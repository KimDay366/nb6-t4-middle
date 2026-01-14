import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";

const DATA = [
  { name: "진행 완료", value: 100, color: "#7FFFD4" },
  { name: "작업 중", value: 0, color: "#E2FF00" },
  { name: "진행 예정", value: 0, color: "#000000" },
];

const ProgressSlide: React.FC = () => {
  return (
    <div className="w-full h-full p-24 bg-white flex flex-col">
      <div className="flex items-end justify-between mb-20">
        <div>
          <h2 className="text-8xl font-black text-black leading-none">
            PROJECT
            <br />
            STATUS
          </h2>
          <div className="h-4 w-60 bg-[#E2FF00] mt-6" />
        </div>
        <div className="text-right">
          <div className="text-black/40 text-xl font-bold uppercase mb-2">전체 진행 상황</div>
          <div className="text-[140px] font-black leading-none text-black">100%</div>
        </div>
      </div>

      <div className="flex-1 flex gap-20">
        <div className="w-1/2 flex flex-col justify-center">
          <div className="grid grid-cols-1 gap-12">
            {DATA.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center justify-between border-b-4 border-black/5 pb-8"
              >
                <div className="flex items-center gap-6">
                  <div className="w-8 h-8 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-4xl font-black">{item.name}</span>
                </div>
                <span className="text-5xl font-black text-black/30 italic">{item.value}%</span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="w-1/2 relative flex items-center justify-center">
          <ResponsiveContainer width="100%" height={600}>
            <PieChart>
              <Pie data={DATA} innerRadius={180} outerRadius={280} paddingAngle={5} dataKey="value" animationDuration={1500}>
                {DATA.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="text-2xl font-bold text-black/30">WEEK 08</span>
            <span className="text-6xl font-black">CURRENT</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressSlide;
