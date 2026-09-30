import { motion } from "framer-motion";
import {
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiMail,
} from "react-icons/fi";

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
  {
    name: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=rk6109744@gmail.com",
    icon: FiMail,
  },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        overflow-hidden
        min-h-screen
        bg-[#060606]
        text-white
      "
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <Background />

      {/* ==========================================
          LIGHT VIGNETTE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_25%,#060606_90%)]
        "
      />

      {/* ==========================================
          PURPLE GLOW
      ========================================== */}

      <div
        className="
          absolute
          right-[5%]
          top-1/2
          -translate-y-1/2
          w-[400px]
          h-[400px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[100px]
          pointer-events-none
        "
      />

      {/* ==========================================
          INDIGO GLOW
      ========================================== */}

      <div
        className="
          absolute
          left-[-150px]
          bottom-[-150px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-indigo-500/[0.02]
          blur-[90px]
          pointer-events-none
        "
      />

      {/* ==========================================
          TOP GLOW
      ========================================== */}

      <div
        className="
          absolute
          left-[15%]
          top-[-150px]
          w-[280px]
          h-[280px]
          rounded-full
          bg-violet-500/[0.015]
          blur-[80px]
          pointer-events-none
        "
      />

      {/* ==========================================
          GRID
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.012]
          bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          bg-[size:90px_90px]
        "
      />

      {/* ==========================================
          ROHIT WATERMARK
      ========================================== */}

      <div
        className="
          absolute
          inset-x-0
          bottom-[-90px]
          flex
          justify-center
          pointer-events-none
          select-none
          overflow-hidden
        "
      >
        <motion.span
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
            amount: 0.1,
          }}
          transition={{
            duration: 0.5,
          }}
          className="
            font-['Space_Grotesk']
            font-bold
            text-[170px]
            sm:text-[250px]
            md:text-[330px]
            lg:text-[420px]
            xl:text-[500px]
            leading-none
            tracking-[-15px]
            text-white/[0.018]
            whitespace-nowrap
          "
        >
          ROHIT
        </motion.span>
      </div>

      {/* ==========================================
          MAIN
      ========================================== */}

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

        {/* ==========================================
            TOP LINE
        ========================================== */}

        <div className="pt-10">
          <div className="h-px bg-white/[0.07]" />
        </div>

        {/* ==========================================
            CLOSING STATEMENT
        ========================================== */}

        <div
          className="
            py-24
            sm:py-32
            lg:py-40
            text-center
          "
        >

          {/* LABEL */}

          <motion.div
            initial={{
              opacity: 0,
              y: 10,
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
              duration: 0.35,
            }}
            className="
              flex
              items-center
              justify-center
              gap-4
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-gray-600
            "
          >
            <span className="w-8 h-px bg-white/20" />

            Thanks for stopping by

            <span className="w-8 h-px bg-white/20" />
          </motion.div>

          {/* MAIN HEADING */}

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
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
              duration: 0.45,
              delay: 0.05,
            }}
            className="
              mt-8
              font-['Space_Grotesk']
              text-[48px]
              sm:text-[68px]
              md:text-[88px]
              lg:text-[110px]
              font-bold
              leading-[0.82]
              tracking-[-7px]
            "
          >
            LET'S MAKE

            <br />

            <span className="text-white/20">
              SOMETHING GREAT.
            </span>
          </motion.h2>

          {/* DESCRIPTION */}

          <motion.p
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.4,
              delay: 0.1,
            }}
            className="
              mx-auto
              mt-8
              max-w-md
              font-['Space_Grotesk']
              text-sm
              leading-7
              text-gray-600
            "
          >
            I'm always open to interesting ideas,
            collaborations and opportunities to build
            something meaningful.
          </motion.p>

          {/* EMAIL BUTTON */}

          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=rk6109744@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            initial={{
              opacity: 0,
              y: 15,
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
              duration: 0.4,
              delay: 0.15,
            }}
            className="
              group
              inline-flex
              items-center
              gap-4
              mt-9
              px-6
              py-3
              rounded-full
              border
              border-white/[0.09]
              bg-white/[0.025]
              font-['Space_Grotesk']
              text-sm
              text-gray-300
              hover:border-violet-400/30
              hover:text-white
              transition-colors
            "
          >
            rk6109744@gmail.com

            <span
              className="
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                bg-white
                text-black
                transition-transform
                duration-200
                group-hover:rotate-45
              "
            >
              <FiArrowUpRight size={15} />
            </span>
          </motion.a>
        </div>

        {/* ==========================================
            SOCIALS
        ========================================== */}

        <div
          className="
            border-y
            border-white/[0.06]
            py-6
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
          "
        >

          {/* LEFT */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[3px]
              text-gray-700
            "
          >
            Connect with me
          </div>

          {/* SOCIAL LINKS */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              sm:gap-5
            "
          >
            {socials.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target={
                    social.name === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    social.name === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  className="
                    group
                    flex
                    items-center
                    gap-2
                    px-3
                    py-2
                    rounded-full
                    border
                    border-transparent
                    hover:border-white/[0.08]
                    hover:bg-white/[0.025]
                    text-gray-600
                    hover:text-white
                    transition-colors
                  "
                >
                  <Icon size={13} />

                  <span
                    className="
                      font-['Space_Grotesk']
                      text-[9px]
                    "
                  >
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            BOTTOM
        ========================================== */}

        <div
          className="
            py-7
            flex
            flex-col
            md:flex-row
            md:items-center
            md:justify-between
            gap-5
          "
        >

          {/* COPYRIGHT */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[2px]
              text-gray-700
            "
          >
            © {new Date().getFullYear()} Rohit Singh
          </div>

          {/* CENTER */}

          <div
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[3px]
              text-gray-700
            "
          >
            Data Scientist · AI Engineer
          </div>

          {/* BACK TO TOP */}

          <button
            onClick={handleBackToTop}
            className="
              group
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[2px]
              text-gray-600
              hover:text-white
              transition-colors
            "
          >
            Back to top

            <span
              className="
                flex
                items-center
                justify-center
                w-7
                h-7
                rounded-full
                border
                border-white/[0.08]
                group-hover:border-violet-400/30
                transition-colors
              "
            >
              ↑
            </span>
          </button>

        </div>
      </div>
    </footer>
  );
}