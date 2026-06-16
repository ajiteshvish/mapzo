import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="bg-white px-5 md:px-10 h-[72px] flex items-center justify-between sticky top-0 z-[100] font-sans border-b border-gray-100">
      <Link className="flex items-center gap-2 font-bold text-[22px] tracking-tight text-[#4361ee] no-underline z-[110]" to="/" onClick={handleHomeClick}>
        <img src="/originals/logo.png" alt="Mapzo AI Logo" width={140} height={40} className="object-contain mix-blend-multiply" />
      </Link>
      
      {/* Desktop Navigation Links */}
      <ul className="hidden lg:flex items-center gap-7 list-none m-0 p-0 absolute left-1/2 -translate-x-1/2">
        <li>
          <Link to="/" onClick={handleHomeClick} className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] transition-colors">
            Products
          </Link>
        </li>
        <li>
          <a href="#" className="no-underline text-[#4361ee] font-medium text-[15px] flex items-center gap-1.5 transition-colors">
            Solutions
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 opacity-80">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] flex items-center gap-1.5 transition-colors">
            Resources
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 opacity-60">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </li>
        <li>
          <a href="#" className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] flex items-center gap-1.5 transition-colors">
            Free Tools
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 opacity-60">
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </li>
        <li>
          <Link to="/blog" className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] transition-colors">
            Blog
          </Link>
        </li>
        <li>
          <Link to="/pricing" className="no-underline text-[#374151] hover:text-[#4361ee] font-medium text-[15px] transition-colors">
            Pricing
          </Link>
        </li>
      </ul>

      {/* Desktop Right Buttons */}
      <div className="hidden lg:flex items-center gap-3">
        <button className="bg-transparent border-none text-[14px] font-medium cursor-pointer flex items-center gap-1 text-[#374151] hover:text-[#4361ee] transition-colors mr-1">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <path d="m5 8 6 6" />
            <path d="m4 14 6-6 2-3" />
            <path d="M2 5h12" />
            <path d="M7 2h1" />
            <path d="m22 22-5-10-5 10" />
            <path d="M14 18h6" />
          </svg>
          EN
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-0.5 ml-0.5 opacity-60">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="border border-[#4361ee] text-[#4361ee] bg-transparent rounded-full px-[22px] py-[8px] font-medium text-[15px] cursor-pointer hover:bg-[#eef0fd] transition-colors shadow-sm">
          Login
        </button>
        <button className="bg-[#4361ee] text-white border-none rounded-full px-[22px] py-[9px] font-medium text-[15px] cursor-pointer flex items-center gap-1.5 hover:bg-[#3451d1] transition-colors shadow-sm">
          🔥 Start 14 days free
        </button>
      </div>

      {/* Mobile Hamburger Button */}
      <button 
        className="lg:hidden flex items-center justify-center p-2 text-[#374151] bg-transparent border-none z-[110]"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {isMobileMenuOpen ? (
            <>
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </>
          ) : (
            <>
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </>
          )}
        </svg>
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-[105] lg:hidden flex flex-col pt-[90px] px-6 h-screen overflow-y-auto">
          <ul className="flex flex-col gap-6 list-none p-0 m-0 w-full text-[18px] font-medium text-[#374151]">
            <li className="border-b border-gray-100 pb-4">
              <Link to="/" onClick={handleHomeClick} className="no-underline text-inherit hover:text-[#4361ee] block w-full">Home</Link>
            </li>
            <li className="border-b border-gray-100 pb-4">
              <Link to="/products" className="no-underline text-inherit hover:text-[#4361ee] block w-full">Products</Link>
            </li>
            <li className="border-b border-gray-100 pb-4">
              <Link to="/blog" className="no-underline text-inherit hover:text-[#4361ee] block w-full" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
            </li>
            <li className="border-b border-gray-100 pb-4">
              <Link to="/pricing" className="no-underline text-inherit hover:text-[#4361ee] block w-full" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
            </li>
          </ul>
          
          <div className="mt-8 flex flex-col gap-4">
            <button className="bg-transparent border border-gray-200 text-[16px] font-medium cursor-pointer flex items-center justify-center gap-2 text-[#374151] rounded-full py-3">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
                <path d="m5 8 6 6" />
                <path d="m4 14 6-6 2-3" />
                <path d="M2 5h12" />
                <path d="M7 2h1" />
                <path d="m22 22-5-10-5 10" />
                <path d="M14 18h6" />
              </svg>
              EN
            </button>
            <button className="border border-[#4361ee] text-[#4361ee] bg-transparent rounded-full w-full py-[12px] font-medium text-[16px] text-center hover:bg-[#eef0fd] transition-colors">
              Login
            </button>
            <button className="bg-[#4361ee] text-white border-none rounded-full w-full py-[12px] font-medium text-[16px] text-center flex items-center justify-center gap-1.5 shadow-md">
              🔥 Start 14 days free
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
