import { Link } from "react-router-dom";
import {
  LuRecycle,
  LuArrowUpRight,
  LuLeaf,
  LuTruck,
  LuHouse,
  LuBuilding2,
  LuFactory,
  LuCalendarCheck,
  LuCreditCard,
  LuShieldCheck,
  LuChartColumn,
  LuCheck,
  LuMail,
  LuPhone,
  LuMapPin,
} from "react-icons/lu";

const Home = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#101604]">
      <section id="home" className="relative bg-[#101604] text-white">
        <img
          src="/images/hero.webp"
          alt="Plastic waste management"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#101604]/95 via-[#101604]/80 to-[#101604]/40"></div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
              <LuLeaf className="text-[#b7fe02]" />
              Eco-Friendly Waste Solutions
            </p>

            <h1 className="mt-7 text-5xl font-semibold leading-tight sm:text-7xl">
              Smarter
              <br />
              Plastic Waste
              <br />
              <span className="text-[#c9f493]">Management</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-white/75 sm:text-lg">
              Connecting households, collectors, local body administrators, and
              recycling centres for cleaner communities.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/register"
                className="flex items-center gap-2 rounded-md bg-[#b7fe02] px-6 py-4 font-semibold text-[#101604]"
              >
                Get Started <LuArrowUpRight />
              </Link>

              <Link
                to="/#services"
                className="flex items-center gap-2 rounded-md border border-white/40 px-6 py-4 font-semibold"
              >
                Explore Services <LuArrowUpRight />
              </Link>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-3 gap-5 border-t border-white/20 pt-8">
            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                85<span className="text-[#b7fe02]">%</span>
              </h3>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">
                On-Time Collections
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                6<span className="text-[#b7fe02]">K+</span>
              </h3>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">
                Pickups Completed
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-semibold sm:text-4xl">
                94<span className="text-[#b7fe02]">%</span>
              </h3>
              <p className="mt-2 text-xs text-white/70 sm:text-sm">
                Recycling Verified
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b py-10">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-center text-sm text-gray-500">
            Working Together for a Cleaner Environment
          </p>

          <div className="mt-7 grid grid-cols-2 gap-4 text-center sm:grid-cols-3 lg:grid-cols-5">
            <div className="rounded-lg bg-[#f5f9ed] p-4 font-semibold">
              EcoWard Network
            </div>
            <div className="rounded-lg bg-[#f5f9ed] p-4 font-semibold">
              PurePlast Hubs
            </div>
            <div className="rounded-lg bg-[#f5f9ed] p-4 font-semibold">
              CleanCity Alliance
            </div>
            <div className="rounded-lg bg-[#f5f9ed] p-4 font-semibold">
              TerraCircle
            </div>
            <div className="col-span-2 rounded-lg bg-[#f5f9ed] p-4 font-semibold sm:col-span-1">
              GreenCivic Council
            </div>
          </div>
        </div>
      </section>

   
      <section id="about" className="py-20 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2">
          <div className="relative">
            <img
              src="https://framerusercontent.com/images/lYV6Hbij8pxqfLCmNzHPM9BRKnU.png?scale-down-to=1024"
              alt="Waste collection team"
              className="h-[450px] w-full rounded-xl object-cover"
            />

            <div className="absolute bottom-5 left-5 rounded-xl bg-[#101604]/80 p-5 text-white">
              <LuRecycle className="mb-3 text-3xl text-[#b7fe02]" />
              <h3 className="text-xl font-bold">100% Tracked</h3>
              <p className="text-sm text-white/70">Circular Plastic Flow</p>
            </div>
          </div>

          <div>
            <p className="font-semibold uppercase tracking-widest text-[#47733d]">
              About GreenLoop
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Cleaner Environments Through Smarter Plastic Waste Management
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              GreenLoop connects households, waste collectors, local body
              administrators, and recycling centres through one digital
              platform. We make collection scheduling, payments, and recycling
              tracking simple and transparent.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#101604] px-6 py-4 font-semibold text-[#b7fe02]"
            >
              Explore Our System <LuArrowUpRight />
            </Link>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-xl bg-[#f5f9ed] p-6">
                <LuRecycle size={30} className="text-[#47733d]" />
                <h3 className="mt-4 font-semibold">Eco-Friendly Recycling</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Track plastic waste and support responsible recycling.
                </p>
              </div>

              <div className="rounded-xl bg-[#f5f9ed] p-6">
                <LuLeaf size={30} className="text-[#47733d]" />
                <h3 className="mt-4 font-semibold">Sustainable Future</h3>
                <p className="mt-2 text-sm leading-6 text-gray-500">
                  Build cleaner communities through digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#f5f9ed] py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-semibold uppercase tracking-widest text-[#47733d]">
            Our Services
          </p>

          <div className="mt-4 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
              Sustainable Plastic Waste Management Services
            </h2>

            <Link
              to="/register"
              className="flex w-fit items-center gap-2 rounded-md bg-[#101604] px-6 py-4 font-semibold text-[#b7fe02]"
            >
              Get Started <LuArrowUpRight />
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuCalendarCheck size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">
                Smart Collection Scheduling
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Schedule household plastic pickups and receive reminders.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuTruck size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">
                Collector Management
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Assign collectors to different areas and monitor activities.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuCreditCard size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">Payment Management</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Manage household payments and digital payment records.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuRecycle size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">Recycling Tracking</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Track plastic waste from collection to recycling centres.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuShieldCheck size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">
                Collection Verification
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Verify completed pickups using OTP and collection proof.
              </p>
            </div>

            <div className="rounded-xl border bg-white p-8 hover:shadow-lg">
              <LuChartColumn size={35} className="text-[#47733d]" />
              <h3 className="mt-6 text-xl font-semibold">
                Reports and Analytics
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                View collection reports and recycling performance.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="impact" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-semibold uppercase tracking-widest text-[#47733d]">
              Our Environmental Impact
            </p>

            <h2 className="mt-4 text-4xl font-semibold sm:text-5xl">
              Responsible Plastic Solutions for a Better Future
            </h2>

            <p className="mt-5 leading-7 text-gray-500">
              Every collection helps reduce plastic pollution and create cleaner
              neighbourhoods.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            <img
              src="https://framerusercontent.com/images/Bq2yJDA0VIiHN4w5ZMLn0r0sxY.png?scale-down-to=512"
              alt="Plastic sorting"
              className="h-72 w-full rounded-xl object-cover"
            />
            <img
              src="https://framerusercontent.com/images/dy6R33qQdx9AQInDWQZNZVDH664.png"
              alt="Waste collection"
              className="h-72 w-full rounded-xl object-cover"
            />
            <img
              src="https://framerusercontent.com/images/MDeWNqKsAzXwZAtbLJJgVHaaQ8w.png?scale-down-to=512"
              alt="Plastic recycling"
              className="h-72 w-full rounded-xl object-cover"
            />
            <img
              src="https://framerusercontent.com/images/iYo2DNbBAijIHErkF94Lk16RlBk.png"
              alt="Green environment"
              className="h-72 w-full rounded-xl object-cover"
            />
          </div>

          <div className="mt-10 grid grid-cols-2 gap-8 rounded-2xl bg-[#13382f] p-8 text-white sm:grid-cols-4 sm:p-12">
            <div>
              <h3 className="text-3xl font-bold text-[#b7fe02]">140+</h3>
              <p className="mt-2 text-sm">Tons of Plastic Diverted</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#b7fe02]">12,500+</h3>
              <p className="mt-2 text-sm">Verified Pickups</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#b7fe02]">94%</h3>
              <p className="mt-2 text-sm">Recovery Efficiency</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#b7fe02]">45+</h3>
              <p className="mt-2 text-sm">Recycling Centres</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#101604] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-semibold uppercase tracking-widest text-[#b7fe02]">
            How It Works
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
            Simple Steps to Smarter Plastic Waste Management
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <h3 className="text-4xl font-bold text-[#b7fe02]">01</h3>
              <h4 className="mt-12 text-xl font-semibold">Register</h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Create an account and provide your area details.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <h3 className="text-4xl font-bold text-[#b7fe02]">02</h3>
              <h4 className="mt-12 text-xl font-semibold">Schedule</h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Receive pickup schedules from your local body.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <h3 className="text-4xl font-bold text-[#b7fe02]">03</h3>
              <h4 className="mt-12 text-xl font-semibold">Collect</h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Collectors pick up and verify household plastic waste.
              </p>
            </div>

            <div className="rounded-xl border border-white/20 bg-white/10 p-7">
              <h3 className="text-4xl font-bold text-[#b7fe02]">04</h3>
              <h4 className="mt-12 text-xl font-semibold">Recycle</h4>
              <p className="mt-3 text-sm leading-7 text-white/70">
                Recycling centres verify and process collected plastic.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <p className="font-semibold uppercase tracking-widest text-[#47733d]">
            Our Community
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold sm:text-5xl">
            One Connected Network for Every Role
          </h2>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-[#f5f9ed] p-7">
              <LuHouse size={35} />
              <h3 className="mt-5 text-xl font-semibold">Households</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Schedule pickups, track payments, and earn Eco Points.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Pickup reminders
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Digital receipts
              </p>
            </div>

            <div className="rounded-xl bg-[#f5f9ed] p-7">
              <LuTruck size={35} />
              <h3 className="mt-5 text-xl font-semibold">Collectors</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Manage daily collection routes and verify pickups.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Area assignments
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> OTP verification
              </p>
            </div>

            <div className="rounded-xl bg-[#f5f9ed] p-7">
              <LuBuilding2 size={35} />
              <h3 className="mt-5 text-xl font-semibold">Local Body Admins</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Manage wards, collectors, schedules, and reports.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Ward management
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Performance reports
              </p>
            </div>

            <div className="rounded-xl bg-[#f5f9ed] p-7">
              <LuFactory size={35} />
              <h3 className="mt-5 text-xl font-semibold">Recycling Centres</h3>
              <p className="mt-3 text-sm leading-7 text-gray-500">
                Verify received plastic and update recycling records.
              </p>
              <p className="mt-5 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Batch verification
              </p>
              <p className="mt-2 flex items-center gap-2 text-sm">
                <LuCheck className="text-green-700" /> Recycling tracking
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-[#101604] py-20 text-white lg:py-28">
        <div className="mx-auto max-w-5xl px-5 text-center">
          <p className="font-semibold uppercase tracking-widest text-[#b7fe02]">
            Join GreenLoop
          </p>

          <h2 className="mt-5 text-4xl font-semibold sm:text-6xl">
            Build a Cleaner Future With GreenLoop
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-white/70">
            Join our platform and become part of a community working towards a
            cleaner and plastic-free environment.
          </p>

          <Link
            to="/register"
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-[#b7fe02] px-7 py-4 font-semibold text-[#101604]"
          >
            Get Started <LuArrowUpRight />
          </Link>

          <div className="mt-14 grid gap-6 rounded-xl border border-white/20 bg-white/10 p-7 text-left sm:grid-cols-3">
            <div className="flex items-center gap-3">
              <LuMail className="text-2xl text-[#b7fe02]" />
              <div>
                <p className="text-xs text-white/60">Email Support</p>
                <p className="text-sm">support@greenloop.eco</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <LuPhone className="text-2xl text-[#b7fe02]" />
              <div>
                <p className="text-xs text-white/60">Helpline</p>
                <p className="text-sm">+91 98765 43210</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <LuMapPin className="text-2xl text-[#b7fe02]" />
              <div>
                <p className="text-xs text-white/60">Coverage</p>
                <p className="text-sm">Local Communities</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
