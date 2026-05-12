"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";

const data = [
  {
    category: "web",
    slug: "/real-estatelive",
    year: "2024",
    title: "Realty-Co · Lead Engine",
    desc: "IDX-style listing site with CRM-wired lead capture and SMS follow-up.",
    stat: "50+/wk qualified leads",
    tags: ["Next.js", "CRM", "Ads"],
    graphic: {
      type: "bars",
      bars: [40, 65, 85, 55, 70],
      color: "#06b6d4",
    },
  },
  {
    category: "app",
    slug: "/dentallive",
    year: "2024",
    title: "NorthClinic · Booking OS",
    desc: "Patient booking, reminders, AI receptionist for after-hour requests.",
    stat: "7% no-show rate",
    tags: ["Booking", "SMS", "AI"],
    graphic: {
      type: "dots",
      dots: 5,
      color: "#3b82f6",
    },
  },
  {
    category: "web",
    slug: "/ecommercelive",
    year: "2024",
    title: "Pivot·Shop · Storefront",
    desc: "US LLC + Shopify rebuild. Brand identity, ads, and bookkeeping.",
    stat: "$48k/mo revenue",
    tags: ["Shopify", "LLC", "Books"],
    graphic: {
      type: "line",
      values: [20, 45, 35, 70, 55, 85],
      color: "#06b6d4",
    },
  },
  {
    category: "ai",
    slug: "/automationlive",
    year: "2024",
    title: "AFZ Concierge AI",
    desc: "Cross-channel AI agent for WhatsApp, Instagram and Web automation.",
    stat: "<1s avg response",
    tags: ["GPT-4o", "WhatsApp", "Calendar"],
    graphic: {
      type: "pulse",
      color: "#06b6d4",
    },
  },
  {
    category: "app",
    slug: "/saaslive",
    year: "2024",
    title: "Metro Homes · CRM",
    desc: "Internal CRM + dashboards for agents, pipeline tracking & comms.",
    stat: "+38% productivity",
    tags: ["CRM", "Dashboards", "Auth"],
    graphic: {
      type: "grid",
      rows: 3,
      cols: 4,
      color: "#3b82f6",
    },
  },
  {
    category: "brand",
    slug: "/socialarchived",
    year: "2024",
    title: "Urban·Dental · Social Suite",
    desc: "Content system + ads + DM automation converting into real bookings.",
    stat: "+212% booked consults",
    tags: ["Meta Ads", "Content", "DM Bot"],
    graphic: {
      type: "wave",
      color: "#06b6d4",
    },
  },
];

const filters = ["all", "web", "app", "ai", "brand"];

// Animation variants
const headingVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const badgeVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { delay: 0.1, duration: 0.5, type: "spring" },
  },
};

const filterContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.5 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const GraphicBars = ({ bars, color }: any) => (
  <div className="absolute inset-0 flex items-end justify-center gap-1.5 p-5">
    {bars.map((height: number, idx: number) => (
      <motion.div
        key={idx}
        initial={{ height: 0 }}
        whileInView={{ height: `${height}%` }}
        transition={{ duration: 0.8, delay: idx * 0.08 }}
        style={{
          height: `${height}%`,
          backgroundColor: color,
        }}
        className="w-2 rounded-full opacity-80"
      />
    ))}
  </div>
);

const GraphicDots = ({ dots, color }: any) => (
  <div className="absolute inset-0 flex items-center justify-center gap-2">
    {[...Array(dots)].map((_, idx) => (
      <motion.div
        key={idx}
        animate={{
          scale: [1, 1.25, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
          delay: idx * 0.15,
        }}
        style={{ backgroundColor: color }}
        className="w-2.5 h-2.5 rounded-full"
      />
    ))}
  </div>
);

const GraphicLine = ({ values, color }: any) => {
  const maxVal = Math.max(...values);

  const points = values
    .map(
      (v: number, i: number) =>
        `${(i / (values.length - 1)) * 100},${
          100 - (v / maxVal) * 80
        }`
    )
    .join(" ");

  return (
    <svg
      className="absolute inset-0 w-full h-full p-5"
      preserveAspectRatio="none"
    >
      <motion.polyline
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        transition={{ duration: 1 }}
        fill="none"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        points={points}
      />
    </svg>
  );
};

const GraphicPulse = ({ color }: any) => (
  <div className="absolute inset-0 flex items-center justify-center">
    <motion.div
      animate={{
        scale: [1, 1.8, 1],
        opacity: [0.4, 0.1, 0.4],
      }}
      transition={{
        repeat: Infinity,
        duration: 2,
      }}
      style={{ backgroundColor: color }}
      className="w-12 h-12 rounded-full blur-md"
    />
  </div>
);

const GraphicGrid = ({ rows, cols, color }: any) => (
  <div
    className="absolute inset-0 grid gap-1 p-6"
    style={{
      gridTemplateRows: `repeat(${rows},1fr)`,
      gridTemplateColumns: `repeat(${cols},1fr)`,
    }}
  >
    {[...Array(rows * cols)].map((_, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 0.7, scale: 1 }}
        transition={{
          delay: idx * 0.03,
          duration: 0.2,
        }}
        style={{ backgroundColor: color }}
        className="rounded-sm"
      />
    ))}
  </div>
);

const GraphicWave = ({ color }: any) => (
  <svg className="absolute inset-0 w-full h-full">
    <motion.path
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1.2 }}
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="round"
      d="M0,60 Q20,20 40,40 T80,30 T120,50 T160,35 T200,45"
    />
  </svg>
);

export default function CaseStudies() {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? data
      : data.filter((item) => item.category === active);

  const renderGraphic = (item: any) => {
    const { graphic } = item;

    switch (graphic.type) {
      case "bars":
        return (
          <GraphicBars
            bars={graphic.bars}
            color={graphic.color}
          />
        );

      case "dots":
        return (
          <GraphicDots
            dots={graphic.dots}
            color={graphic.color}
          />
        );

      case "line":
        return (
          <GraphicLine
            values={graphic.values}
            color={graphic.color}
          />
        );

      case "pulse":
        return <GraphicPulse color={graphic.color} />;

      case "grid":
        return (
          <GraphicGrid
            rows={graphic.rows}
            cols={graphic.cols}
            color={graphic.color}
          />
        );

      case "wave":
        return <GraphicWave color={graphic.color} />;

      default:
        return null;
    }
  };

  return (
    <section id="case-studies" className="relative overflow-hidden py-28 bg-[#f8fafc]">

      {/* LIGHT BACKGROUND GLOWS */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute -top-40 left-0 w-[420px] h-[420px] bg-cyan-200/40 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-blue-200/30 rounded-full blur-3xl"
        />
      </div>

      {/* GRID */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(to_right,#0f172a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a_1px,transparent_1px)]
        bg-[size:70px_70px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* TITLE WITH BADGE */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          {/* SMART AUTOMATION STYLE BADGE */}
          <motion.div
            variants={badgeVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 px-4 py-1.5 text-sm font-medium text-cyan-600 mb-4"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse" />
            Portfolio
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Case Studies That{" "}
            <span className="text-cyan-500">
              Drive Results
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-4 text-slate-500 max-w-2xl mx-auto"
          >
            Real systems, real growth, and measurable outcomes
            for modern businesses across Pakistan.
          </motion.p>
        </motion.div>

        {/* FILTERS */}
        <motion.div
          variants={filterContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-14"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActive(f)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium border transition-all
              ${
                active === f
                  ? "bg-cyan-500 border-cyan-500 text-white shadow-lg shadow-cyan-500/20"
                  : "bg-white border-slate-200 text-slate-600 hover:border-cyan-400 hover:text-cyan-500"
              }`}
            >
              {f === "ai"
                ? "AI & Automation"
                : f === "app"
                ? "Apps & CRMs"
                : f === "web"
                ? "Websites"
                : f === "brand"
                ? "Brand & Ads"
                : "All"}
            </motion.button>
          ))}
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -6 }}
              className="
              group
              relative
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              hover:shadow-2xl
              transition-all
              duration-300
              flex
              flex-col
              "
            >
              {/* GRAPHIC AREA */}
              <div
                className="
                relative
                h-28
                rounded-2xl
                overflow-hidden
                border
                border-slate-200
                bg-[#071120]
                "
              >
                {/* DARK GLOW */}
                <div className="absolute inset-0">
                  <div className="absolute -top-10 left-0 w-28 h-28 bg-cyan-500/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                </div>

                {renderGraphic(item)}
              </div>

              {/* META */}
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="uppercase tracking-wider font-medium text-cyan-500">
                  {item.category}
                </span>
                <span className="text-slate-400">
                  {item.year}
                </span>
              </div>

              {/* TITLE */}
              <h3 className="mt-3 text-lg font-semibold text-slate-900 leading-snug">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.desc}
              </p>

              {/* STAT */}
              <div className="mt-4 inline-flex w-fit items-center rounded-full bg-cyan-50 border border-cyan-100 px-3 py-1 text-sm font-medium text-cyan-600">
                {item.stat}
              </div>

              {/* TAGS */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="
                    rounded-full
                    border
                    border-slate-200
                    bg-slate-50
                    px-3
                    py-1
                    text-xs
                    text-slate-600
                    "
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ x: 4 }}
                className="
                mt-6
                flex
                items-center
                gap-2
                text-sm
                font-medium
                text-cyan-500
                cursor-pointer
                "
              >
                View case study
                <motion.span
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  →
                </motion.span>
              </motion.button>

              {/* HOVER BORDER */}
              <div className="absolute inset-0 rounded-[28px] border border-transparent group-hover:border-cyan-300 transition-all duration-300" />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}