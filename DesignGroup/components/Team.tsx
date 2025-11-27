import React from 'react';
import SectionWrapper from './SectionWrapper';
import { TeamMember } from '../types';

// Updated members data with specific IDs and names provided by user
const members: TeamMember[] = [
  {
    id: 'member-1',
    name: 'liuying88',
    role: '设计主管',
    avatarColor: '', // Legacy prop kept for type compatibility, not used for image
    imageUrl: 'https://i.postimg.cc/Y2DGkMk3/liuying.png', 
  },
  {
    id: 'member-2',
    name: 'wufanghui',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/sXpQshjS/wufanghui.png',
  },
  {
    id: 'member-3',
    name: 'pengguoyan',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/MTNhznGk/pengguoyan.png',
  },
  {
    id: 'member-4',
    name: 'dukunyi',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/VNy1WHwj/dukunyihead.png',
  },
  {
    id: 'member-5',
    name: 'wangyidan05',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/wvR958ys/wangyidan.png',
  },
  {
    id: 'member-6',
    name: 'lvqian05',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/8kW1jGVQ/lvqian.png',
  },
  {
    id: 'member-7',
    name: 'zengli15',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/j2frGHtP/zengli15.png',
  },
  {
    id: 'member-8',
    name: 'liuyuzhen03',
    role: '体验设计师',
    avatarColor: '',
    imageUrl: 'https://i.postimg.cc/Wp8mkBVJ/liuyuzhen03.png',
  },
];

const Team: React.FC = () => {
  return (
    <SectionWrapper id="team" className="mb-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">团队成员</h2>
        <p className="text-slate-500 max-w-2xl mx-auto">
          个体专业为星，协作聚力成河。
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
        {members.map((member) => (
          <div key={member.id} className="text-center group">
            <div className="relative inline-block mb-4">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full mx-auto border-4 border-white shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:rotate-3 bg-white">
                <img 
                  src={member.imageUrl} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <h3 className="font-bold text-slate-800 text-lg">{member.name}</h3>
            <p className="text-sm text-slate-500">{member.role}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Team;