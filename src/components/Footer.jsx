import { Link } from "react-router-dom";
import { LuRecycle } from "react-icons/lu";

const Footer = () => {
  return (
    <footer className="bg-[#00140c] py-12 text-white">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <LuRecycle className="text-3xl text-[#b7fe02]" />
              <h2 className="text-2xl font-bold">GreenLoop</h2>
            </div>

            <p className="mt-5 text-sm leading-7 text-white/60">
              Smart plastic waste management for cleaner communities and a
              sustainable future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#b7fe02]">Navigation</h3>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>
                <Link to="/#home">Home</Link>
              </p>
              <p>
                <Link to="/#about">About</Link>
              </p>
              <p>
                <Link to="/#services">Services</Link>
              </p>
              <p>
                <Link to="/#impact">Impact</Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#b7fe02]">Explore</h3>

            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>
                <Link to="/#community">Community</Link>
              </p>
              <p>
                <Link to="/#faq">FAQ</Link>
              </p>
              <p>
                <Link to="/login">Login</Link>
              </p>
              <p>
                <Link to="/register">Register</Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-[#b7fe02]">Contact</h3>

            <p className="mt-5 text-sm text-white/70">support@greenloop.eco</p>

            <p className="mt-3 text-sm text-white/70">+91 98765 43210</p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 pt-7 text-center text-xs text-white/50">
          © 2026 GreenLoop. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
