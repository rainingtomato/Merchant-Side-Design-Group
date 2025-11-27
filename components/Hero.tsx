import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../lib/utils';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center justify-center pt-20">
      <div className="text-center px-6 max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50/50 border border-blue-100 text-blue-600 text-sm font-semibold mb-6 backdrop-blur-sm">
            2026 设计愿景
          </span>
        </motion.div>

        <motion.h1
          className="whitespace-nowrap text-5xl md:text-7xl font-bold text-slate-900 tracking-tight leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          始于<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">商家体验 </span> 成于共生生态
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          让每一次商家的顺畅交易、每一个品牌的价值传递、每一个运营的高效决策
          都在统一而友好的闪购商业体验中自然发生。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#projects"
            onClick={(e) => smoothScrollTo(e, '#projects')}
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 cursor-pointer"
          >
            查看项目
          </a>
          <a
            href="#business"
            onClick={(e) => smoothScrollTo(e, '#business')}
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-200 text-base font-medium rounded-full text-slate-700 bg-white/50 hover:bg-white transition-all backdrop-blur-sm shadow-sm hover:shadow-md cursor-pointer"
          >
            我们的服务 <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;