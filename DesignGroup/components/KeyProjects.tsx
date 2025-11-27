import React from 'react';
import SectionWrapper from './SectionWrapper';
import { ProjectItem } from '../types';

const projects: ProjectItem[] = [
  { 
    id: '1', 
    title: '闪购商家端总部商品库改版', 
    category: '商品管理', 
    color: 'bg-blue-100',
    imageUrl: 'https://i.postimg.cc/vT4WMmN7/zongbushangpin.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2725563094'
  },
  { 
    id: '2', 
    title: '闪购商家智能助手技能拓展设计', 
    category: 'AI助手', 
    color: 'bg-purple-100',
    imageUrl: 'https://i.postimg.cc/cCj4yxp8/jinengtuozhan-1x.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2731519332'
  },
  { 
    id: '3', 
    title: '闪购商家端单店商品列表改版', 
    category: '商品管理', 
    color: 'bg-emerald-100',
    imageUrl: 'https://i.postimg.cc/HkLnJN2j/dan-dian-shang-pin-lie-biao-1x.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2724850275'
  },
  { 
    id: '4', 
    title: '闪购商家端智能助手建设', 
    category: 'AI助手', 
    color: 'bg-orange-100',
    imageUrl: 'https://i.postimg.cc/7Ydbj949/aizhushou_1x.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2714804170'
  },
  { 
    id: '5', 
    title: '闪购商家端触达迭代与规范制定', 
    category: '规范制定', 
    color: 'bg-pink-100',
    imageUrl: 'https://i.postimg.cc/3rj8rkNd/触达规范迭代_1x.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2723513346'
  },
  { 
    id: '6', 
    title: '闪购商家端IM新增售后能力', 
    category: '情感化设计', 
    color: 'bg-cyan-100',
    imageUrl: 'https://i.postimg.cc/8P117Tfd/xin-zeng-shou-hou-neng-li-1x.png',
    linkUrl: 'https://km.sankuai.com/collabpage/2724721311'
  },
];

const KeyProjects: React.FC = () => {
  return (
    <SectionWrapper id="projects">
      {/* Centered Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">重点项目</h2>
        <p className="text-slate-500">重塑商家体验的标杆实践。</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group cursor-pointer"
          >
            {/* [修改点] 将卡片宽高比调整为 1:0.56 (aspect-[1/0.56]) */}
            <div className={`relative overflow-hidden rounded-2xl aspect-[1/0.56] mb-4 bg-slate-100 shadow-sm group-hover:shadow-md transition-all`}>
              {/* Image with fallback to color */}
              {project.imageUrl ? (
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              ) : (
                <div className={`w-full h-full ${project.color}`} />
              )}
              
              {/* [修改点] 遮罩颜色：从之前的黑色半透明(bg-black/10)改为了白色半透明(bg-white/70) */}
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/70 transition-colors duration-300" />

              {/* Hover Button Link */}
              <a 
                href={project.linkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10"
              >
                 {/* [修改点] 按钮样式：深色背景(bg-slate-900)，文字白色 */}
                 <span className="bg-slate-900/90 backdrop-blur-md px-6 py-3 rounded-full text-sm font-medium text-white transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-slate-800">
                   查看案例
                 </span>
              </a>
            </div>
            <h3 className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-500 text-sm">{project.category}</p>
          </div>
        ))}
      </div>
      
    </SectionWrapper>
  );
};

export default KeyProjects;