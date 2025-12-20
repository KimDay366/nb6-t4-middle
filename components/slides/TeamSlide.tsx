
import React from 'react';
import { motion } from 'framer-motion';

const TEAM = [
  { name: 'Kim Dev', role: 'Leader / Backend', parts: ['DB Schema Design', 'Auth API', 'WebSocket'], color: '#E2FF00' },
  { name: 'Lee Front', role: 'Frontend Architect', parts: ['State Management', 'UI/UX Design', 'Chart Library'], color: '#7FFFD4' },
  { name: 'Park Logic', role: 'Backend Dev', parts: ['Search Engine', 'Notification API', 'Deployment'], color: '#E2FF00' },
  { name: 'Choi Inter', role: 'UI Engineer', parts: ['Animation Logic', 'Responsive Design', 'Accessibility'], color: '#7FFFD4' },
];

const TeamSlide: React.FC = () => {
  return (
    <div className="w-full h-full p-24 bg-white">
      <div className="flex justify-between items-start mb-24">
        <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }}>
          <h2 className="text-7xl font-black text-black">TEAM MEMBERS</h2>
          <p className="text-2xl text-black/50 mt-4">함께 성장을 만들어가는 우리 팀원들을 소개합니다.</p>
        </motion.div>
        <div className="bg-black text-white px-8 py-4 text-3xl font-black rotate-3">
          4 PROFESSIONALS
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {TEAM.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            className="group relative"
          >
            <div className="h-[400px] bg-gray-100 mb-8 overflow-hidden relative">
              <img 
                src={`https://picsum.photos/seed/${m.name}/500/800`} 
                alt={m.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
              />
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: `${m.color}33` }}
              />
            </div>
            
            <div className="flex items-start gap-4">
               <div className="w-3 h-12" style={{ backgroundColor: m.color }} />
               <div>
                  <h3 className="text-4xl font-black mb-1">{m.name}</h3>
                  <p className="text-[#E2FF00] bg-black px-3 py-1 inline-block text-sm font-bold uppercase mb-4 tracking-tighter">
                    {m.role}
                  </p>
                  <ul className="space-y-2">
                    {m.parts.map((p, pi) => (
                      <li key={pi} className="text-black/60 font-medium text-lg flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-black rounded-full" />
                        {p}
                      </li>
                    ))}
                  </ul>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TeamSlide;
