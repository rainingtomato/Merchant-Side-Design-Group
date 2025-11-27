import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ServiceItem } from '../types';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services: ServiceItem[] = [
  {
    id: '2',
    title: '品牌通',
    description: '服务于品牌方的营销与品牌资产建设，打造从投放管理、活动配置到数据洞察的一体化体验，助力品牌实现长期增长。',
    imageUrl: 'https://i.postimg.cc/MGZNxHMk/闪购logo_3x.png',
    linkUrl: 'https://brandhub.meituan.com/',
  },
  {
    id: '1',
    title: '闪购商家端',
    description: '聚焦商家的日常经营与效率提升，通过对店铺管理、商品发布、订单处理等关键链路的体验优化，帮助商家更高效、更稳定地开展业务。',
    imageUrl: 'https://i.postimg.cc/MGZNxHMk/闪购logo_3x.png', 
    linkUrl: 'https://shangou.meituan.com/',
  },
  {
    id: '3',
    title: '闪购运营平台',
    description: '面向内部运营团队，提供活动策划、资源配置、规则配置、数据分析等全链路的运营支撑工具。助力闪购业务的稳定运行与持续创新。',
    imageUrl: 'https://i.postimg.cc/9fJ3qZ50/shan-gou-yun-yinglogo.png',
    linkUrl: 'https://shangou.sankuai.com/',
  },
];

const BusinessServices: React.FC = () => {
  return (
    <SectionWrapper id="business">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">业务版图</h2>
        <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed">
          致力于构建高效、可持续的闪购商业生态体验。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
            // [修改点] 添加 h-full 确保卡片填满 Grid 单元格高度，实现高度一致
            className="relative flex flex-col h-full overflow-hidden rounded-2xl p-8 transition-all group border bg-white/60 border-white/40 shadow-lg hover:shadow-xl backdrop-blur-md"
          >
            <div className="w-20 h-20 rounded-2xl bg-white/50 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
              <img 
                src={service.imageUrl} 
                alt={service.title} 
                className="w-full h-full object-contain drop-shadow-sm p-2" 
              />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-slate-800">
              {service.title}
            </h3>
            
            {/* [修改点] 添加 flex-grow 确保文字较短时底部也能对齐 */}
            <p className="text-slate-600 text-sm leading-relaxed opacity-90 text-justify flex-grow">
              {service.description}
            </p>

            {/* Hover Overlay with Button */}
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-2xl z-10 pointer-events-none group-hover:pointer-events-auto">
              <a 
                href={service.linkUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-slate-900 text-white text-sm font-medium rounded-full shadow-lg hover:bg-slate-700 transition-all transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 duration-300 delay-75"
              >
                前往查看 <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default BusinessServices;