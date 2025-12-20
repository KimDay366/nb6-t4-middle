
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, CircleDashed } from 'lucide-react';

const TASKS = [
  { category: 'FRONTEND', list: [
    { title: 'Global Theme System', status: 'done' },
    { title: 'Landing Page Animation', status: 'done' },
    { title: 'Real-time Dashboard UI', status: 'done' },
    { title: 'User Profile Editor', status: 'todo' },
  ]},
  { category: 'BACKEND', list: [
    { title: 'Auth Service (JWT)', status: 'done' },
    { title: 'DB Normalization', status: 'done' },
    { title: 'Search API Optimization', status: 'todo' },
    { title: 'Logging & Error Handling', status: 'todo' },
  ]},
  { category: 'INFRA', list: [
    { title: 'Docker Orchestration', status: 'done' },
    { title: 'CI/CD Pipeline', status: 'done' },
    { title: 'S3 Image Hosting', status: 'done' },
    { title: 'Monitoring Setup', status: 'todo' },
  ]}
];

const DetailsSlide: React.FC = () => {
  return (
    <div className="w-full h-full p-24 bg-white">
      <div className="mb-16">
        <h2 className="text-6xl font-black text-black inline-block border-b-[16px] border-[#7FFFD4]">WORK BACKLOG</h2>
      </div>

      <div className="grid grid-cols-3 gap-12">
        {TASKS.map((group, gi) => (
          <motion.div 
            key={gi}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1 }}
            className="flex flex-col"
          >
            <div className="bg-black text-[#E2FF00] px-6 py-4 text-3xl font-black mb-8 flex items-center justify-between">
              {group.category}
              <span className="text-sm opacity-50">{group.list.length} ITEMS</span>
            </div>
            
            <div className="space-y-4">
              {group.list.map((task, ti) => (
                <div 
                  key={ti} 
                  className={`p-6 border-2 transition-all ${task.status === 'done' ? 'bg-[#7FFFD4]/10 border-[#7FFFD4]' : 'bg-gray-50 border-black/5 opacity-50'}`}
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-2xl font-bold leading-tight">{task.title}</span>
                    {task.status === 'done' ? (
                      <CheckCircle2 className="text-[#7FFFD4] shrink-0" size={32} />
                    ) : (
                      <CircleDashed className="text-black/20 shrink-0" size={32} />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Decorative element */}
      <div className="absolute bottom-24 right-24 flex items-center gap-4">
        <div className="w-40 h-1 bg-black/10" />
        <span className="text-black/30 font-bold uppercase tracking-widest text-sm">Sprint 03 Details</span>
      </div>
    </div>
  );
};

export default DetailsSlide;
