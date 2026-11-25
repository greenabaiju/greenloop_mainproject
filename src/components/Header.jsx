import { Link } from "react-router-dom";
import { LuRecycle, LuArrowUpRight } from "react-icons/lu";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#101604] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="rounded-lg bg-[#b7fe02] p-2 text-[#101604]">
            <LuRecycle size={25} />
          </div>

          <div>
            <h2 className="text-xl font-bold">GreenLoop</h2>
            <p className="text-[10px] tracking-widest text-[#c9f493]">
              SMART PLASTIC MANAGEMENT
            </p>
          </div>
        </Link>

        <nav className="hidden gap-8 text-sm lg:flex">
          <Link to="/" className="text-[#b7fe02]">
            Home
          </Link>
          <Link to="/about" className="hover:text-[#b7fe02]">
            About
          </Link>
          <Link to="/contact" className="hover:text-[#b7fe02]">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link to="/login" className="hidden text-sm sm:block">
            Login
          </Link>

          <Link
            to="/register"
            className="flex items-center gap-2 rounded-md bg-[#b7fe02] px-5 py-3 text-sm font-semibold text-[#101604] hover:bg-[#c9f493]"
          >
            Get Started <LuArrowUpRight />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
