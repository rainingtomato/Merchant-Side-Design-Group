import React from 'react';
import SectionWrapper from './SectionWrapper';
import { Layers, Component, ArrowRight, PenTool } from 'lucide-react'; 
import { motion } from 'framer-motion';

const ProfessionalCore: React.FC = () => {
  // [修改点] 定义设计沉淀的数据，支持配置多个按钮和链接
  const methodologyItems = [
    { 
      icon: <Layers />, 
      title: '商家端设计白皮书', 
      desc: '覆盖PC与APP的一致性设计指南，降低学习成本，保障体验流畅性。',
      buttons: [
        { label: 'PC白皮书', url: 'https://imd.sankuai.com/goto/OAeES5a6 邀请您进入《商家端PC基础及组件规范（更新中）》，点击链接开始协作' }, 
        { label: 'APP白皮书', url: 'https://imd.sankuai.com/goto/OAeGRh4E 邀请您进入《商家端APP基础组件规范（241202更新）》，点击链接开始协作' }  
      ]
    },
    { 
      icon: <Component />, 
      title: 'Roo组件库', 
      desc: '开箱即用的模块化资源，提升开发效率，敏捷响应业务迭代。',
      buttons: [
        { label: '查看详情', url: 'https://roo.sankuai.com/v2/standard/#/BPC/react/roo/TableNew' } 
    ],
    { 
      icon: <PenTool />, 
      title: '每日审美训练', 
      desc: '持续进化设计感知力，让商业洞察始于审美直觉。',
      buttons: [
        { label: '查看详情', url: 'https://simple-blank-layout.mynocode.host/#/b' } 
      ]
    },
  ];

  return (
    <SectionWrapper id="core" className="bg-white/40 rounded-3xl backdrop-blur-sm border border-white/50 my-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">专业内核</h2>
        <p className="text-slate-500">让规范成为协作语言，让流程助力体验交付。</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        {/* Part A: Methodology */}
        <div>
          <h3 className="text-2xl font-bold text-slate-800 mb-8 border-l-4 border-blue-500 pl-4">
            设计沉淀 <br/>
            <span className="text-base font-normal text-slate-500">Methodology</span>
          </h3>
          
          <div className="space-y-6">
            {methodologyItems.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ x: 10 }}
                // [修改点] 添加 relative 和 group 以支持内部绝对定位的 Hover 遮罩
                className="relative group flex items-start p-4 rounded-xl bg-white/50 border border-white hover:border-blue-200 hover:bg-white hover:shadow-md transition-all overflow-hidden"
              >
                <div className="p-3 rounded-lg bg-blue-50 text-blue-600 mr-4">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>

                {/* [修改点] 新增 Hover 遮罩层，根据 buttons 数组渲染按钮 */}
                <div className="absolute inset-0 bg-white/90 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-10">
                  {item.buttons.map((btn, btnIdx) => (
                    <a
                      key={btnIdx}
                      href={btn.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-900 text-white text-xs font-bold rounded-full shadow-lg hover:bg-slate-700 transition-transform transform translate-y-2 group-hover:translate-y-0"
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Part B: Workflow */}
        <div>
          <div className="flex justify-between items-start mb-8">
            <h3 className="text-2xl font-bold text-slate-800 border-l-4 border-purple-500 pl-4">
              合作机制 <br/>
              <span className="text-base font-normal text-slate-500">Workflow</span>
            </h3>
            <a 
              href="https://km.sankuai.com/collabpage/2287826178"
              target="_blank"
              rel="noopener noreferrer" 
              className="text-slate-800 hover:text-blue-600 font-medium text-sm flex items-center mt-2 transition-colors"
            >
              查看详情 <ArrowRight className="ml-1 w-4 h-4" />
            </a>
          </div>

          <div className="relative pt-4">
            {/* Vertical Line */}
            <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gradient-to-b from-blue-200 to-purple-200 hidden sm:block"></div>
            
            <div className="space-y-8 relative">
              {[
                { 
                  step: '01', 
                  title: '提需与排期', 
                  desc: ' 需求方在印迹中提需，设计主管负责分配排期',
                  linkUrl: 'https://ingee.meituan.com/#/projectManagePM/sendDemand' 
                },
                { step: '02', title: '设计执行', desc: '设计师与需求方沟通，并在规定时间前完成需求并交付' },
                { step: '03', title: '需求评价', desc: '需求完成后，业务方与设计主管对设计师进行评价' },
                { step: '04', title: '验收上线', desc: '需求方在上线前提醒设计师验收，通过后方可上线' },
                { step: '05', title: '复盘', desc: '设计师在印迹中录入业务目标达成情况' },
              ].map((item, idx) => (
                <div key={idx} className="relative flex items-center sm:pl-12 group">
                  <div className="hidden sm:flex absolute left-0 w-8 h-8 rounded-full bg-white border-2 border-blue-500 items-center justify-center z-10">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-500"></div>
                  </div>
                  
                  <div className={`relative flex-1 p-5 rounded-xl bg-white/50 border border-white transition-all overflow-hidden ${item.linkUrl ? 'hover:shadow-md' : ''}`}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-xs font-bold text-blue-500 tracking-widest uppercase">步骤 {item.step}</span>
                    </div>
                    <h4 className="text-lg font-bold text-slate-800">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>

                    {item.linkUrl && (
                      <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-20">
                        <a 
                          href={item.linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-2 bg-slate-800 text-white text-sm font-medium rounded-full shadow-lg hover:bg-slate-700 transition-transform transform translate-y-2 group-hover:translate-y-0"
                        >
                          前往提需
                        </a>
                      </div>
                    )}
                  </div>
                  
                  {idx !== 4 && (
                    <div className="sm:hidden absolute left-1/2 -bottom-6 transform -translate-x-1/2 text-slate-300">
                      <ArrowRight className="w-5 h-5 rotate-90" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProfessionalCore;
