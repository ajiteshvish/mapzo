import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white pt-20">
      {/* Top Section */}
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

        {/* Column 1: Logo & Info */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-6 cursor-pointer">
            <img src="/originals/logo.png" alt="Mapzo AI Logo" width={140} height={40} className="object-contain mix-blend-multiply" />
          </div>
          <div className="text-[13px] text-[#4b5563] leading-[1.8]">
            <p className="font-[800] text-[#1a1a1a]">MAPZO AI</p>
            <p>Plac Solny 14/3</p>
            <p>50-062 Wrocław, Poland</p>
            <p>VAT ID: PL8971887866</p>
            <p>KRS: 0000880128</p>
          </div>
        </div>

        {/* Column 2: Product & Solutions */}
        <div>
          <h4 className="text-[12px] font-[800] uppercase tracking-wider text-[#1a1a1a] mb-6">Product</h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest">Manage</p>
              <ul className="space-y-2 text-[14px]">
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Tracking</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Audit</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Protection</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Content Publisher</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Review Manager</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Reports</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest mt-6">Solutions</p>
              <ul className="space-y-2 text-[14px]">
                <li>
                  <Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500] flex items-center gap-2">
                    For Agencies <span className="bg-[#eef2ff] text-[#4e54e1] text-[10px] font-[700] px-2 py-0.5 rounded-full">Book a Demo</span>
                  </Link>
                </li>
                <li>
                  <Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500] flex items-center gap-2">
                    For Freelancers <span className="bg-[#fdf2f8] text-[#db2777] text-[10px] font-[700] px-2 py-0.5 rounded-full">New</span>
                  </Link>
                </li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">For Business Owners</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">For Affiliates</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 3: Improve & Free Tools */}
        <div>
          <h4 className="text-[12px] font-[800] uppercase tracking-wider text-[#1a1a1a] mb-6 opacity-0 md:hidden lg:block">Improve</h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest">Improve</p>
              <ul className="space-y-2 text-[14px]">
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Citations Manager</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Smart Tasks</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Website Builder</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest mt-6">Free Tools</p>
              <ul className="space-y-2 text-[14px]">
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Local Rank Checker</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">LocalBusiness Schema Generator</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Review Poster Generator</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Review Response Generator</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 4: Grow & About */}
        <div>
          <h4 className="text-[12px] font-[800] uppercase tracking-wider text-[#1a1a1a] mb-6 opacity-0 md:hidden lg:block">Grow</h4>
          <div className="space-y-4">
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest">Grow</p>
              <ul className="space-y-2 text-[14px]">
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Statistics</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">AI Agent</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Client acquisition</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-[10px] font-[700] uppercase text-[#9ca3af] mb-3 tracking-widest mt-6">About Mapzo AI</p>
              <ul className="space-y-2 text-[14px]">
                <li><Link to="/pricing" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Pricing</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Contact Us</Link></li>
                <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Book a Call</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Column 5: Resources */}
        <div>
          <h4 className="text-[12px] font-[800] uppercase tracking-wider text-[#1a1a1a] mb-6">Resources</h4>
          <ul className="space-y-2 text-[14px]">
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Blog</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Local SEO Course</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Success stories</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Marketing Dictionary</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Knowledge Base</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Mapzo AI Tutorials</Link></li>
            <li><Link to="#" className="text-[#4b5563] hover:text-[#4e54e1] font-[500]">Changelog</Link></li>
          </ul>
        </div>
      </div>

      {/* Middle Bar: Language & Socials */}
      <div className="border-t border-[#f3f4f6]">
        <div className="max-w-[1280px] mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 cursor-pointer group">
            <span className="text-[18px]">🌐</span>
            <span className="text-[14px] font-[700] text-[#1a1a1a] group-hover:text-[#4e54e1]">Choose Your Language</span>
            <span className="text-[12px] text-[#9ca3af]">⌄</span>
          </div>

          <div className="flex items-center gap-3">
            <Link to="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#4e54e1] transition-colors">
              <span className="text-[14px] font-bold">f</span>
            </Link>
            <Link to="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#ff0000] transition-colors">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </Link>
            <Link to="#" className="w-8 h-8 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center hover:bg-[#4e54e1] transition-colors">
              <span className="text-[12px] font-bold">in</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright */}
      <div className="bg-[#121636] py-3.5">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-[12px] text-white/70 gap-2">
          <div className="flex gap-4">
            <Link to="#" className="hover:text-white transition-colors font-[600]">Terms of Service</Link>
            <Link to="#" className="hover:text-white transition-colors font-[600]">Privacy Policy</Link>
          </div>
          <p className="font-[600]">Powered by Mapzo AI 2026</p>
        </div>
      </div>
    </footer>
  );
}
