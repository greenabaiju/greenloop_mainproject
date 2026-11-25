import { Link } from "react-router-dom";
import { LuRecycle, LuLeaf, LuUsers, LuShieldCheck } from "react-icons/lu";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f9ed]">
      <section className="bg-[#13382f] px-5 py-20 text-center text-white">
        <h1 className="text-4xl font-bold md:text-5xl">About GreenLoop</h1>
        <p className="mx-auto mt-5 max-w-2xl text-white/70">
          Building cleaner communities through smart plastic waste management
          and responsible recycling.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2">
        <div>
          <p className="font-semibold text-[#47733d]">WHO WE ARE</p>
          <h2 className="mt-3 text-3xl font-bold text-[#101604]">
            Making Waste Management Simple and Smart
          </h2>
          <p className="mt-5 leading-8 text-gray-600">
            GreenLoop connects households, waste collectors, local body admins,
            and recycling centres through a smart plastic waste management
            platform.
          </p>
          <p className="mt-4 leading-8 text-gray-600">
            It helps communities manage waste collection, track recycling, and
            create a cleaner environment.
          </p>

          <Link
            to="/register"
            className="mt-7 inline-block rounded-md bg-[#b7fe02] px-6 py-3 font-semibold text-[#101604] hover:bg-[#c9f493]"
          >
            Join GreenLoop
          </Link>
        </div>

        <div className="flex min-h-72 items-center justify-center rounded-3xl bg-[#dff0c9] p-10">
          <LuRecycle size={150} className="text-[#47733d]" />
        </div>
      </section>

      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-[#101604]">
            Our Mission and Vision
          </h2>
          <p className="mt-3 text-center text-gray-500">
            Working together for a sustainable future.
          </p>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl bg-[#f5f9ed] p-8">
              <LuLeaf size={40} className="text-[#47733d]" />
              <h3 className="mt-5 text-xl font-bold">Our Mission</h3>
              <p className="mt-3 leading-7 text-gray-600">
                To make plastic waste collection easier, improve recycling, and
                encourage people to keep their surroundings clean.
              </p>
            </div>

            <div className="rounded-2xl bg-[#f5f9ed] p-8">
              <LuShieldCheck size={40} className="text-[#47733d]" />
              <h3 className="mt-5 text-xl font-bold">Our Vision</h3>
              <p className="mt-3 leading-7 text-gray-600">
                To create cleaner communities where every household takes
                responsibility for proper waste management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-center text-3xl font-bold text-[#101604]">
          Why Choose GreenLoop?
        </h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-[#dbd7d7] p-6">
            <LuRecycle size={35} className="text-[#47733d]" />
            <h3 className="mt-4 font-bold">Smart Collection</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Easy collection scheduling and waste tracking.
            </p>
          </div>

          <div className="rounded-xl border border-[#dbd7d7] p-6">
            <LuUsers size={35} className="text-[#47733d]" />
            <h3 className="mt-4 font-bold">Community Support</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Connect households, collectors, and recycling centres.
            </p>
          </div>

          <div className="rounded-xl border border-[#dbd7d7] p-6">
            <LuShieldCheck size={35} className="text-[#47733d]" />
            <h3 className="mt-4 font-bold">Transparency</h3>
            <p className="mt-2 text-sm leading-6 text-gray-600">
              Track collection activities and recycling records.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
