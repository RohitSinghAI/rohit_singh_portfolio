import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Background from "../ui/Background";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/rohitsinghai",
    icon: FiGithub,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rohitsingh-ai",
    icon: FiLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/therohitkushwah___",
    icon: FiInstagram,
  },
];

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  // ------------------------------------------
  // Form change
  // ------------------------------------------

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (status.message) {
      setStatus({
        type: "",
        message: "",
      });
    }
  };

  // ------------------------------------------
  // Submit
  // ------------------------------------------

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch(
        "https://rohit-portfolio-backend-gruk.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus({
          type: "success",
          message: "Message sent successfully!",
        });

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message:
            data.message || "Unable to send message.",
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message:
          "Unable to connect to server. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#060606]
        text-white
        py-8
        sm:py-10
        lg:py-12
      "
    >
      {/* ------------------------------------------
          Background
      ------------------------------------------ */}

      <Background />

      {/* Lightweight vignette */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_50%_35%,transparent_20%,#060606_90%)]
        "
      />

      {/* Lightweight purple glow */}

      <div
        className="
          absolute
          top-[-100px]
          right-[-100px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-violet-500/[0.025]
          blur-[80px]
          pointer-events-none
        "
      />

      {/* Lightweight indigo glow */}

      <div
        className="
          absolute
          bottom-[-120px]
          left-[-100px]
          w-[320px]
          h-[320px]
          rounded-full
          bg-indigo-500/[0.02]
          blur-[70px]
          pointer-events-none
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-[0.01]
          pointer-events-none
          bg-[linear-gradient(rgba(255,255,255,.4)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.4)_1px,transparent_1px)]
          bg-[size:100px_100px]
        "
      />

      {/* ------------------------------------------
          Main
      ------------------------------------------ */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
        "
      >
        {/* ------------------------------------------
            Header
        ------------------------------------------ */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div
            className="
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[4px]
              text-violet-400
            "
          >
            <span>04</span>

            <span
              className="
                w-10
                h-px
                bg-violet-400/50
              "
            />

            Contact
          </div>

          <h2
            className="
              mt-6
              font-['Space_Grotesk']
              font-semibold
              text-[48px]
              sm:text-[60px]
              md:text-[70px]
              lg:text-[78px]
              leading-[0.9]
              tracking-[-4px]
            "
          >
            LET'S

            <br />

            <span className="text-white/20">
              CONNECT.
            </span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              font-['Space_Grotesk']
              text-sm
              leading-7
              text-gray-500
            "
          >
            Have an idea, opportunity, or project
            in mind? Tell me about it and let's
            create something meaningful together.
          </p>
        </motion.div>

        {/* ------------------------------------------
            Content
        ------------------------------------------ */}

        <div
          className="
            mt-12
            lg:mt-16
            grid
            lg:grid-cols-[1fr_1.1fr]
            gap-12
            lg:gap-24
          "
        >
          {/* ========================================
              LEFT
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <div
              className="
                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[4px]
                text-gray-700
              "
            >
              Direct Contact
            </div>

            {/* Email */}

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=rk6109744@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                group
                block
                mt-7
                pb-7
                border-b
                border-white/[0.06]
              "
            >
              <div
                className="
                  flex
                  items-center
                  justify-between
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-3
                  "
                >
                  <FiMail
                    size={15}
                    className="
                      text-gray-600
                      group-hover:text-violet-300
                      transition-colors
                    "
                  />

                  <div>
                    <div
                      className="
                        font-['Space_Grotesk']
                        text-[8px]
                        uppercase
                        tracking-[2px]
                        text-gray-700
                      "
                    >
                      Email
                    </div>

                    <div
                      className="
                        mt-1
                        font-['Space_Grotesk']
                        text-sm
                        text-gray-400
                        group-hover:text-white
                        transition-colors
                      "
                    >
                      rk6109744@gmail.com
                    </div>
                  </div>
                </div>

                <FiArrowUpRight
                  size={15}
                  className="
                    text-gray-700
                    group-hover:text-violet-300
                    transition-colors
                  "
                />
              </div>
            </a>

            {/* Social */}

            <div className="mt-10">
              <div
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[4px]
                  text-gray-700
                "
              >
                Social
              </div>

              <div className="mt-4 space-y-1">
                {socials.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        group
                        flex
                        items-center
                        justify-between
                        py-3
                        border-b
                        border-white/[0.04]
                      "
                    >
                      <div
                        className="
                          flex
                          items-center
                          gap-3
                        "
                      >
                        <Icon
                          size={14}
                          className="
                            text-gray-600
                            group-hover:text-violet-300
                            transition-colors
                          "
                        />

                        <span
                          className="
                            font-['Space_Grotesk']
                            text-xs
                            text-gray-500
                            group-hover:text-white
                            transition-colors
                          "
                        >
                          {social.name}
                        </span>
                      </div>

                      <FiArrowUpRight
                        size={14}
                        className="
                          text-gray-700
                          group-hover:text-violet-300
                          transition-colors
                        "
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability */}

            <div className="mt-10">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-2
                  rounded-full
                  border
                  border-white/[0.06]
                  bg-white/[0.015]
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-violet-400
                  "
                />

                <span
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[2px]
                    text-gray-600
                  "
                >
                  Currently available
                </span>
              </div>
            </div>
          </motion.div>

          {/* ========================================
              FORM
          ======================================== */}

          <motion.div
            initial={{
              opacity: 0,
              x: 25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <form
              onSubmit={handleSubmit}
              className="
                rounded-3xl
                border
                border-white/[0.07]
                bg-white/[0.015]
                p-6
                sm:p-8
              "
            >
              {/* Name */}

              <div>
                <label
                  htmlFor="name"
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Name
                </label>

                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    border-b
                    border-white/[0.08]
                    py-3
                    outline-none
                    font-['Space_Grotesk']
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    focus:border-violet-400/50
                    transition-colors
                  "
                />
              </div>

              {/* Email */}

              <div className="mt-7">
                <label
                  htmlFor="email"
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Email
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="your@email.com"
                  className="
                    mt-3
                    w-full
                    bg-transparent
                    border-b
                    border-white/[0.08]
                    py-3
                    outline-none
                    font-['Space_Grotesk']
                    text-sm
                    text-white
                    placeholder:text-gray-700
                    focus:border-violet-400/50
                    transition-colors
                  "
                />
              </div>

              {/* Message */}

              <div className="mt-7">
                <label
                  htmlFor="message"
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-gray-600
                  "
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="
                    mt-3
                    w-full
                    resize-none
                    bg-transparent
                    border-b
                    border-white/[0.08]
                    py-3
                    outline-none
                    font-['Space_Grotesk']
                    text-sm
                    leading-7
                    text-white
                    placeholder:text-gray-700
                    focus:border-violet-400/50
                    transition-colors
                  "
                />
              </div>

              {/* Status */}

              {status.message && (
                <div
                  className={`
                    mt-5
                    px-4
                    py-3
                    rounded-xl
                    border
                    font-['Space_Grotesk']
                    text-xs

                    ${
                      status.type === "success"
                        ? "border-emerald-400/20 text-emerald-300 bg-emerald-400/[0.03]"
                        : "border-red-400/20 text-red-300 bg-red-400/[0.03]"
                    }
                  `}
                >
                  {status.message}
                </div>
              )}

              {/* Submit */}

              <button
                type="submit"
                disabled={loading}
                className="
                  group
                  mt-8
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-violet-400/20
                  bg-violet-400/[0.04]
                  hover:bg-violet-400/[0.08]
                  hover:border-violet-400/40
                  disabled:opacity-50
                  disabled:cursor-not-allowed
                  transition-colors
                "
              >
                <span
                  className="
                    font-['Space_Grotesk']
                    text-[9px]
                    uppercase
                    tracking-[3px]
                    text-violet-300
                  "
                >
                  {loading
                    ? "Sending..."
                    : "Send Message"}
                </span>

                <FiArrowUpRight
                  size={17}
                  className="
                    text-violet-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition-transform
                  "
                />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Back */}

        <button
          type="button"
          onClick={() => navigate(-1)}
          className="
            mt-12
            flex
            items-center
            gap-2
            font-['Space_Grotesk']
            text-[8px]
            uppercase
            tracking-[3px]
            text-gray-700
            hover:text-violet-300
            transition-colors
          "
        >
          <FiArrowLeft size={13} />
          Back
        </button>
      </div>
    </section>
  );
}

