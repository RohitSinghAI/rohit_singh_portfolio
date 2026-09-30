import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect } from "react";
import Background from "../ui/Background";
import profile from "../../assets/image/profile.png";

export default function Hero() {
  // ==========================================
  // SMOOTH MOUSE PARALLAX
  // ==========================================

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 100,
    damping: 30,
    mass: 0.5,
  });

  const rotateX = useTransform(smoothY, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-6, 6]);

  const imageX = useTransform(smoothX, [-0.5, 0.5], [-8, 8]);
  const imageY = useTransform(smoothY, [-0.5, 0.5], [-8, 8]);

  // ==========================================
  // OPTIMIZED MOUSE MOVE
  // ==========================================

  useEffect(() => {
    let animationFrame = null;

    const handleMouseMove = (e) => {
      if (animationFrame !== null) return;

      animationFrame = requestAnimationFrame(() => {
        mouseX.set(e.clientX / window.innerWidth - 0.5);
        mouseY.set(e.clientY / window.innerHeight - 0.5);

        animationFrame = null;
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (animationFrame !== null) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [mouseX, mouseY]);

  // ==========================================
  // SCROLL HELPERS
  // ==========================================

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#060606]
        text-white
        flex
        items-center
        [perspective:1400px]
      "
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <Background />

      {/* ==========================================
          AMBIENT GLOW
      ========================================== */}

      <div
        className="
          absolute
          right-[5%]
          top-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          bg-violet-500/[0.035]
          blur-[80px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          left-[-150px]
          bottom-[-150px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-indigo-500/[0.02]
          blur-[70px]
          pointer-events-none
        "
      />

      {/* ==========================================
          SUBTLE GRID
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
          VIGNETTE
      ========================================== */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          bg-[radial-gradient(circle_at_center,transparent_30%,#060606_90%)]
        "
      />

      {/* ==========================================
          MAIN
      ========================================== */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-6
          sm:px-8
          lg:px-12
          py-24
          lg:py-28
        "
      >
        <div
          className="
            grid
            lg:grid-cols-[1fr_0.9fr]
            items-center
            gap-14
            lg:gap-20
          "
        >
          {/* ==========================================
              LEFT CONTENT
          ========================================== */}

          <div>
            {/* STATUS */}

            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
              }}
              className="
                flex
                items-center
                gap-3
                font-['Space_Grotesk']
                text-[9px]
                uppercase
                tracking-[3px]
                text-gray-500
              "
            >
              <span className="relative flex h-2 w-2">
                <span
                  className="
                    absolute
                    h-full
                    w-full
                    rounded-full
                    bg-violet-400
                    opacity-40
                    animate-ping
                  "
                />

                <span
                  className="
                    relative
                    h-2
                    w-2
                    rounded-full
                    bg-violet-400
                  "
                />
              </span>

              Hello, I'm Rohit
            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                mt-8
                font-['Space_Grotesk']
                font-bold
                text-[46px]
                sm:text-[56px]
                md:text-[66px]
                lg:text-[70px]
                xl:text-[78px]
                leading-[0.9]
                tracking-[-4px]
              "
            >
              I BUILD
              <br />

              <span className="text-white/35">
                WITH
              </span>{" "}

              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-gradient-to-r
                  from-violet-200
                  via-violet-400
                  to-indigo-500
                "
              >
                DATA.
              </span>
            </motion.h1>

            {/* LINE */}

            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 100 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
              }}
              className="
                mt-8
                h-px
                bg-gradient-to-r
                from-violet-400
                to-transparent
              "
            />

            {/* NAME */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.5,
              }}
              className="
                mt-6
                font-['Space_Grotesk']
              "
            >
              <div
                className="
                  text-xl
                  sm:text-2xl
                  font-semibold
                  tracking-tight
                "
              >
                Rohit Singh
              </div>

              <div
                className="
                  mt-1
                  text-xs
                  uppercase
                  tracking-[2px]
                  text-violet-400
                "
              >
                Data Scientist · AI Engineer
              </div>
            </motion.div>

            {/* DESCRIPTION */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.75,
                duration: 0.5,
              }}
              className="
                mt-6
                max-w-lg
                font-['Space_Grotesk']
                text-sm
                leading-7
                text-gray-500
              "
            >
              Turning raw data into intelligent systems,
              meaningful insights and modern digital
              experiences powered by AI.
            </motion.p>

            {/* BUTTONS */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.85,
                duration: 0.5,
              }}
              className="
                mt-8
                flex
                flex-wrap
                gap-3
              "
            >
              {/* PROJECT BUTTON */}

              <button
                onClick={() => scrollToSection("projects")}
                className="
                  group
                  relative
                  overflow-hidden
                  px-7
                  py-3.5
                  rounded-full
                  bg-white
                  text-black
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  shadow-[0_10px_30px_rgba(255,255,255,.05)]
                  transition-transform
                  duration-200
                  hover:-translate-y-1
                  active:scale-95
                "
              >
                <span className="relative z-10">
                  Explore Work
                  <span
                    className="
                      ml-2
                      inline-block
                      transition-transform
                      duration-200
                      group-hover:translate-x-1
                    "
                  >
                    →
                  </span>
                </span>

                <span
                  className="
                    absolute
                    inset-0
                    bg-violet-200
                    -translate-x-full
                    transition-transform
                    duration-300
                    group-hover:translate-x-0
                  "
                />
              </button>

              {/* ABOUT BUTTON */}

              <button
                onClick={() => scrollToSection("about")}
                className="
                  px-7
                  py-3.5
                  rounded-full
                  border
                  border-white/[0.09]
                  bg-white/[0.015]
                  text-gray-500
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  transition-all
                  duration-200
                  hover:-translate-y-1
                  hover:border-violet-400/40
                  hover:text-violet-300
                  active:scale-95
                "
              >
                About Me
              </button>
            </motion.div>

            {/* TECH */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 1,
                duration: 0.5,
              }}
              className="
                mt-11
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                font-['Space_Grotesk']
                text-[8px]
                uppercase
                tracking-[2.5px]
                text-gray-700
              "
            >
              <span>Python</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>
              <span>GenAI</span>
            </motion.div>
          </div>

          {/* ==========================================
              RIGHT / PROFILE
          ========================================== */}

          <div
            className="
              relative
              flex
              justify-center
              lg:justify-end
            "
          >
            <motion.div
              style={{
                rotateX,
                rotateY,
              }}
              initial={{
                opacity: 0,
                scale: 0.85,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 0.8,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                relative
                w-[290px]
                h-[290px]
                sm:w-[340px]
                sm:h-[340px]
                md:w-[390px]
                md:h-[390px]
                lg:w-[410px]
                lg:h-[410px]
                [transform-style:preserve-3d]
                will-change-transform
              "
            >
              {/* ==========================================
                  BACK GLOW
              ========================================== */}

              <div
                className="
                  absolute
                  -inset-12
                  rounded-full
                  bg-violet-500/[0.045]
                  blur-[60px]
                  [transform:translateZ(-80px)]
                  pointer-events-none
                "
              />

              {/* ==========================================
                  OUTER RING
              ========================================== */}

              <div
                className="
                  absolute
                  -inset-10
                  rounded-full
                  border
                  border-violet-400/[0.09]
                  [transform:translateZ(-50px)]
                  pointer-events-none
                "
              >
                <span
                  className="
                    absolute
                    top-1/2
                    -right-1
                    w-2
                    h-2
                    rounded-full
                    bg-violet-400
                    shadow-[0_0_15px_rgba(167,139,250,.7)]
                  "
                />
              </div>

              {/* ==========================================
                  SECOND RING
              ========================================== */}

              <div
                className="
                  absolute
                  -inset-5
                  rounded-full
                  border
                  border-white/[0.07]
                  [transform:translateZ(-30px)]
                  pointer-events-none
                "
              >
                <span
                  className="
                    absolute
                    top-8
                    left-1/2
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-white/40
                  "
                />
              </div>

              {/* ==========================================
                  IMAGE
              ========================================== */}

              <div
                className="
                  absolute
                  inset-0
                  overflow-hidden
                  rounded-full
                  border
                  border-white/[0.13]
                  bg-[#0d0d0f]
                  shadow-[0_30px_70px_rgba(0,0,0,.7)]
                  [transform:translateZ(35px)]
                  will-change-transform
                "
              >
                <motion.img
                  src={profile}
                  alt="Rohit Singh"
                  loading="eager"
                  decoding="async"
                  style={{
                    x: imageX,
                    y: imageY,
                  }}
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                    absolute
                    inset-0
                    w-full
                    h-full
                    object-cover
                    will-change-transform
                  "
                />

                {/* IMAGE COLOR */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-violet-500/[0.08]
                    via-transparent
                    to-black/30
                    pointer-events-none
                  "
                />

                {/* SHINE */}

                <div
                  className="
                    absolute
                    top-0
                    left-0
                    w-[30%]
                    h-full
                    skew-x-[-18deg]
                    bg-gradient-to-r
                    from-transparent
                    via-white/[0.07]
                    to-transparent
                    pointer-events-none
                    animate-[shine_7s_ease-in-out_infinite]
                  "
                />
              </div>

              {/* ==========================================
                  INNER RING
              ========================================== */}

              <div
                className="
                  absolute
                  inset-3
                  rounded-full
                  border
                  border-white/[0.08]
                  [transform:translateZ(55px)]
                  pointer-events-none
                "
              />

              {/* ==========================================
                  AI TEXT
              ========================================== */}

              <div
                className="
                  absolute
                  -left-10
                  top-16
                  font-['Space_Grotesk']
                  text-4xl
                  font-bold
                  tracking-[-2px]
                  text-violet-400/[0.15]
                  [transform:translateZ(100px)]
                  pointer-events-none
                "
              >
                AI
              </div>

              {/* ==========================================
                  GLASS CARD
              ========================================== */}

              <div
                className="
                  absolute
                  -right-8
                  bottom-14
                  hidden
                  md:block
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/[0.09]
                  bg-[#09090b]/90
                  shadow-[0_15px_40px_rgba(0,0,0,.4)]
                  [transform:translateZ(110px)]
                "
              >
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    text-[7px]
                    uppercase
                    tracking-[2px]
                    text-gray-600
                  "
                >
                  <span
                    className="
                      w-1.5
                      h-1.5
                      rounded-full
                      bg-violet-400
                      shadow-[0_0_8px_rgba(167,139,250,.7)]
                    "
                  />

                  Focus
                </div>

                <div
                  className="
                    mt-1.5
                    font-['Space_Grotesk']
                    text-sm
                    font-semibold
                  "
                >
                  AI + ML
                </div>
              </div>

              {/* ==========================================
                  FLOATING DOT
              ========================================== */}

              <div
                className="
                  absolute
                  -right-3
                  top-12
                  w-3
                  h-3
                  rounded-full
                  bg-violet-400
                  shadow-[0_0_18px_rgba(167,139,250,.7)]
                  [transform:translateZ(130px)]
                  pointer-events-none
                  animate-pulse
                "
              />

              {/* ==========================================
                  SMALL LABEL
              ========================================== */}

              <div
                className="
                  absolute
                  -left-3
                  bottom-12
                  hidden
                  sm:block
                  px-3
                  py-2
                  rounded-lg
                  border
                  border-white/[0.06]
                  bg-black/50
                  font-['Space_Grotesk']
                  text-[7px]
                  uppercase
                  tracking-[2px]
                  text-gray-600
                  [transform:translateZ(90px)]
                "
              >
                Data → Intelligence
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ==========================================
          SCROLL
      ========================================== */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.3,
          duration: 0.5,
        }}
        className="
          absolute
          bottom-7
          left-1/2
          -translate-x-1/2
          flex
          flex-col
          items-center
          gap-3
          font-['Space_Grotesk']
          text-[7px]
          uppercase
          tracking-[4px]
          text-gray-700
        "
      >
        <span>Scroll</span>

        <div
          className="
            w-px
            h-5
            bg-gradient-to-b
            from-violet-400
            to-transparent
            opacity-50
          "
        />
      </motion.div>

      {/* ==========================================
          SHINE KEYFRAME
      ========================================== */}

      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-350%) skewX(-18deg);
          }

          45%,
          100% {
            transform: translateX(450%) skewX(-18deg);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}