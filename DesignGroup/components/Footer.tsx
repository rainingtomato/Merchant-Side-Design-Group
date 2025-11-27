import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white/80 backdrop-blur-md border-t border-slate-100 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left flex flex-col items-center md:items-start">
          <img 
            src="https://i.postimg.cc/5tgcFGQ9/美团闪购_3x.png" 
            alt="美团闪购" 
            className="h-5 w-auto object-contain mb-2"
          />
          <p className="text-sm text-slate-500 mt-2">© 2025 美团闪购商家端设计团队. 版权所有.</p>
        </div>
        <div className="flex space-x-6">
        </div>
      </div>
    </footer>
  );
};

export default Footer;