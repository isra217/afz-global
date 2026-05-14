"use client";

import { motion, Variants } from "framer-motion";

// ================= ANIMATIONS =================

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.2, duration: 0.6 },
  },
};

const formVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.3, duration: 0.6 },
  },
};

const inputVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.4 + i * 0.05, duration: 0.4 },
  }),
};

// ================= COMPONENT =================

export default function ContactForm() {
  return (
    <section id="contact" className="relative py-20 overflow-hidden bg-[#f8fbff]">

      {/* BACKGROUND */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-100 blur-3xl rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-indigo-100 blur-3xl rounded-full opacity-40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* MAIN CARD */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="
            relative
            overflow-hidden
            rounded-[38px]
            border
            border-slate-200
            bg-white
            shadow-[0_25px_80px_rgba(37,99,235,0.08)]
            p-8 md:p-14
          "
        >

          {/* HEADING */}
          <motion.div
            variants={headingVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              Get In <span className="text-blue-600">Touch</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Contact us for consultation, projects, or business support.
            </p>
          </motion.div>

          {/* GRID */}
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT IMAGE */}
            <div className="relative flex items-center justify-center">
              <div className="absolute w-[380px] h-[380px] bg-blue-200/40 rounded-full blur-3xl" />

              <motion.img
                src="/Contact.png"
                alt="Contact Illustration"
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="relative z-10 w-full max-w-[500px] object-contain"
              />
            </div>

            {/* RIGHT FORM */}
            <motion.div
              variants={formVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="
                relative
                rounded-[30px]
                border
                border-slate-200
                bg-white
                p-8
                shadow-xl
              "
            >

              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Start Your Project
              </h3>

              <form className="space-y-5">

                {/* NAME + EMAIL */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "name", type: "text", placeholder: "Your name", required: true },
                    { label: "email", type: "email", placeholder: "you@business.com", required: false },
                  ].map((field, i) => (
                    <motion.div
                      key={i}
                      custom={i}
                      variants={inputVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <label className="text-sm text-slate-600 mb-2 block">
                        {field.label.charAt(0).toUpperCase() + field.label.slice(1)}
                        {field.required && <span className="text-red-500"> *</span>}
                      </label>

                      <input
                        type={field.type}
                        required={field.required}
                        placeholder={field.placeholder}
                        className="
                          w-full
                          rounded-2xl
                          border
                          border-slate-200
                          bg-[#f8fbff]
                          px-5
                          py-4
                          text-slate-900
                          outline-none
                          focus:border-blue-500
                        "
                      />
                    </motion.div>
                  ))}
                </div>

                {/* PHONE + SERVICE */}
                <div className="grid grid-cols-2 gap-4">

                  {/* PHONE */}
                  <motion.div
                    custom={2}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-600 mb-2 block">
                      Phone <span className="text-red-500">*</span>
                    </label>

                    <input
                      type="text"
                      required
                      placeholder="+92 300 0000000"
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-[#f8fbff]
                        px-5
                        py-4
                        text-slate-900
                        outline-none
                        focus:border-blue-500
                      "
                    />
                  </motion.div>

                  {/* SERVICE */}
                  <motion.div
                    custom={3}
                    variants={inputVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <label className="text-sm text-slate-600 mb-2 block">
                      Service <span className="text-red-500">*</span>
                    </label>

                    <select
                      required
                      className="
                        w-full
                        rounded-2xl
                        border
                        border-slate-200
                        bg-gradient-to-r from-blue-50 to-indigo-50
                        px-5
                        py-4
                        text-slate-900
                        outline-none
                        focus:border-blue-500
                        cursor-pointer
                      "
                    >
                      <option>Accounting & Tax</option>
                      <option>Website Development</option>
                      <option>App Development</option>
                      <option>AI Automation</option>
                    </select>
                  </motion.div>

                </div>

                {/* MESSAGE */}
                <div>
                  <label className="text-sm text-slate-600 mb-2 block">
                    Message
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Your message..."
                    className="
                      w-full
                      rounded-2xl
                      border
                      border-slate-200
                      bg-[#f8fbff]
                      px-5
                      py-4
                      text-slate-900
                      outline-none
                      focus:border-blue-500
                    "
                  />
                </div>

                {/* BUTTON */}
                <button className="w-full bg-blue-600 text-white py-4 rounded-2xl font-semibold hover:bg-blue-700 transition">
                  Send Message
                </button>

              </form>

            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}