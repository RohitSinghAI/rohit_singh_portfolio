import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

import {
  FiArrowLeft,
  FiArrowUpRight,
  FiGithub,
  FiPlay,
  FiExternalLink,
} from "react-icons/fi";

import Background from "../components/ui/Background";
import { projects } from "../data/projects";

export default function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projects.find(
    (item) => String(item.id) === String(id)
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // ==========================================
  // PROJECT NOT FOUND
  // ==========================================

  if (!project) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-6">
        <div className="text-center">
          <div className="mx-auto w-16 h-16 rounded-full border border-violet-400/20 bg-violet-400/[0.04] flex items-center justify-center text-violet-300 font-['Space_Grotesk']">
            404
          </div>

          <p className="mt-7 font-['Space_Grotesk'] text-[9px] uppercase tracking-[5px] text-violet-400">
            Project
          </p>

          <h1 className="mt-4 font-['Space_Grotesk'] text-4xl sm:text-6xl font-semibold tracking-[-4px]">
            Project Not Found
          </h1>

          <button
            onClick={() => navigate("/#projects")}
            className="
              mt-8
              inline-flex
              items-center
              gap-3
              rounded-full
              bg-white
              px-6
              py-3
              text-black
              font-['Space_Grotesk']
              text-xs
              font-semibold
              hover:bg-gray-200
              transition-colors
            "
          >
            <FiArrowLeft size={14} />
            Back to Projects
          </button>
        </div>
      </main>
    );
  }

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
        py-7
        sm:py-10
      "
    >
      {/* ==========================================
          BACKGROUND
      ========================================== */}

      <Background />

      {/* Lightweight glow */}

      <div
        className="
          absolute
          left-1/2
          top-[8%]
          -translate-x-1/2
          w-[450px]
          h-[300px]
          rounded-full
          bg-violet-600/[0.025]
          blur-[90px]
          pointer-events-none
        "
      />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          pointer-events-none
          opacity-[0.01]
          bg-[linear-gradient(rgba(255,255,255,.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.5)_1px,transparent_1px)]
          bg-[size:100px_100px]
        "
      />

      {/* ==========================================
          MAIN CONTAINER
      ========================================== */}

      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          px-5
          sm:px-8
          lg:px-12
        "
      >

        {/* ==========================================
            TOP BAR
        ========================================== */}

        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            flex
            items-center
            justify-between
            border-b
            border-white/[0.07]
            pb-5
          "
        >
          <button
            onClick={() => navigate("/#projects")}
            className="
              group
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[3px]
              text-gray-600
              hover:text-white
              transition-colors
            "
          >
            <span
              className="
                flex
                items-center
                justify-center
                w-8
                h-8
                rounded-full
                border
                border-white/[0.08]
                bg-white/[0.015]
                group-hover:border-violet-400/30
                transition-colors
              "
            >
              <FiArrowLeft size={14} />
            </span>

            Back to Projects
          </button>

          <div
            className="
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-gray-700
            "
          >
            <span className="hidden sm:block">
              Selected Work
            </span>

            <span className="text-violet-400/70">
              /
            </span>

            <span>
              {String(project.id).padStart(2, "0")}
            </span>
          </div>
        </motion.div>

        {/* =================================================
            FULL WIDTH IMAGE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
          }}
          className="mt-10 sm:mt-14"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[30px]
              border
              border-white/[0.08]
              bg-[#0a0a0c]
              p-2
              hover:border-violet-400/20
              transition-colors
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                sm:rounded-[24px]
                w-full
                h-[55vh]
                min-h-[400px]
                sm:h-[70vh]
                lg:h-[82vh]
                bg-black
              "
            >
              <img
                src={project.image}
                alt={project.title}
                loading="eager"
                decoding="async"
                className="
                  w-full
                  h-full
                  object-contain
                  bg-black
                  transition-transform
                  duration-700
                  group-hover:scale-[1.015]
                "
              />

              {/* Image overlay */}

              <div
                className="
                  absolute
                  inset-0
                  pointer-events-none
                  bg-gradient-to-t
                  from-black/70
                  via-transparent
                  to-black/10
                "
              />

              {/* Badge */}

              <div
                className="
                  absolute
                  top-5
                  left-5
                  flex
                  items-center
                  gap-2.5
                  px-4
                  py-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
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
                    tracking-[3px]
                    text-white/70
                  "
                >
                  Project Visual
                </span>
              </div>

              {/* Number */}

              <span
                className="
                  absolute
                  top-6
                  right-6
                  font-['Space_Grotesk']
                  text-[9px]
                  tracking-[3px]
                  text-white/40
                "
              >
                01
              </span>

              {/* Image title */}

              <div
                className="
                  absolute
                  left-6
                  right-6
                  bottom-6
                "
              >
                <p
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-white/40
                  "
                >
                  Visual Preview
                </p>

                <h2
                  className="
                    mt-2
                    font-['Space_Grotesk']
                    text-xl
                    sm:text-2xl
                    font-medium
                  "
                >
                  {project.title}
                </h2>
              </div>
            </div>
          </div>

          {/* Live project */}

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
              mt-4
              flex
              items-center
              justify-between
              w-full
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0a0a0c]
              px-5
              py-4
              hover:border-violet-400/30
              hover:bg-violet-400/[0.035]
              transition-colors
            "
          >
            <div>
              <p
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                Explore
              </p>

              <span
                className="
                  block
                  mt-1
                  font-['Space_Grotesk']
                  text-xs
                  text-gray-300
                  group-hover:text-white
                  transition-colors
                "
              >
                Visit Live Project
              </span>
            </div>

            <span
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                border
                border-white/[0.08]
                text-gray-500
                group-hover:text-violet-300
                group-hover:border-violet-400/30
                transition-colors
              "
            >
              <FiArrowUpRight size={15} />
            </span>
          </a>
        </motion.div>

        {/* =================================================
            FULL WIDTH VIDEO
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.45,
            delay: 0.05,
          }}
          className="mt-8 sm:mt-10"
        >
          <div
            className="
              group
              relative
              overflow-hidden
              rounded-[24px]
              sm:rounded-[30px]
              border
              border-white/[0.08]
              bg-[#0a0a0c]
              p-2
              hover:border-violet-400/20
              transition-colors
            "
          >
            <div
              className="
                relative
                overflow-hidden
                rounded-[18px]
                sm:rounded-[24px]
                w-full
                h-[55vh]
                min-h-[400px]
                sm:h-[70vh]
                lg:h-[82vh]
                bg-black
              "
            >
              <video
                controls
                playsInline
                preload="metadata"
                className="
                  w-full
                  h-full
                  object-contain
                  bg-black
                "
              >
                <source
                  src={project.video}
                  type="video/mp4"
                />

                Your browser does not support video.
              </video>

              {/* Video badge */}

              <div
                className="
                  absolute
                  top-5
                  left-5
                  flex
                  items-center
                  gap-2.5
                  px-4
                  py-2.5
                  rounded-full
                  border
                  border-white/10
                  bg-black/50
                  pointer-events-none
                "
              >
                <span
                  className="
                    flex
                    items-center
                    justify-center
                    w-5
                    h-5
                    rounded-full
                    bg-violet-400/10
                    text-violet-300
                  "
                >
                  <FiPlay size={9} />
                </span>

                <span
                  className="
                    font-['Space_Grotesk']
                    text-[8px]
                    uppercase
                    tracking-[3px]
                    text-white/70
                  "
                >
                  Project Demo
                </span>
              </div>

              {/* Number */}

              <span
                className="
                  absolute
                  top-6
                  right-6
                  font-['Space_Grotesk']
                  text-[9px]
                  tracking-[3px]
                  text-white/40
                  pointer-events-none
                "
              >
                02
              </span>
            </div>
          </div>

          {/* Video info */}

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-[#0a0a0c]
              px-5
              py-4
            "
          >
            <div>
              <p
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                Experience
              </p>

              <p
                className="
                  mt-1
                  font-['Space_Grotesk']
                  text-xs
                  text-gray-300
                "
              >
                Watch the project in action
              </p>
            </div>

            <div
              className="
                flex
                items-center
                justify-center
                w-9
                h-9
                rounded-full
                bg-violet-400/[0.08]
                border
                border-violet-400/10
                text-violet-300
              "
            >
              <FiPlay size={12} />
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT TITLE
        ================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className="
            pt-20
            sm:pt-24
            lg:pt-28
          "
        >
          <div
            className="
              flex
              items-center
              gap-3
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[5px]
              text-violet-400
            "
          >
            <span
              className="
                w-10
                h-px
                bg-violet-400/60
              "
            />

            Digital Experience
          </div>

          <h1
            className="
              mt-7
              max-w-5xl
              font-['Space_Grotesk']
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-[100px]
              font-semibold
              leading-[0.84]
              tracking-[-7px]
            "
          >
            {project.title}

            <span className="text-violet-300/50">
              .
            </span>
          </h1>

          <div
            className="
              mt-9
              flex
              flex-col
              lg:flex-row
              lg:justify-between
              gap-8
            "
          >
            <p
              className="
                max-w-2xl
                font-['Space_Grotesk']
                text-sm
                sm:text-base
                leading-8
                text-gray-500
              "
            >
              {project.description}
            </p>

            <div
              className="
                flex
                items-center
                gap-3
                shrink-0
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-violet-400
                "
              />

              <span
                className="
                  font-['Space_Grotesk']
                  text-[9px]
                  uppercase
                  tracking-[3px]
                  text-gray-600
                "
              >
                Available to Explore
              </span>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            PROJECT DETAILS
        ================================================= */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="mt-20 lg:mt-24"
        >
          <p
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-violet-400
            "
          >
            03 / Overview
          </p>

          <h2
            className="
              mt-3
              font-['Space_Grotesk']
              text-3xl
              sm:text-4xl
              font-medium
              tracking-[-2px]
            "
          >
            Project details
          </h2>

          <div
            className="
              mt-7
              grid
              grid-cols-2
              lg:grid-cols-4
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.07]
              bg-[#09090b]
            "
          >
            <Info
              label="Project"
              value={`#${String(project.id).padStart(2, "0")}`}
            />

            <Info
              label="Role"
              value="Developer"
            />

            <Info
              label="Category"
              value="Digital Product"
            />

            <Info
              label="Status"
              value="Completed"
              active
            />
          </div>
        </motion.div>

        {/* =================================================
            TECHNOLOGIES
        ================================================= */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="mt-20 lg:mt-24"
        >
          <p
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[4px]
              text-violet-400
            "
          >
            04 / Stack
          </p>

          <h2
            className="
              mt-3
              font-['Space_Grotesk']
              text-3xl
              sm:text-4xl
              font-medium
              tracking-[-2px]
            "
          >
            Built with.
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.tech.map((tech) => (
              <div
                key={tech}
                className="
                  group
                  flex
                  items-center
                  gap-2.5
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-5
                  py-3
                  font-['Space_Grotesk']
                  text-xs
                  text-gray-500
                  hover:text-white
                  hover:border-violet-400/30
                  hover:bg-violet-400/[0.035]
                  transition-colors
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-gray-700
                    group-hover:bg-violet-400
                    transition-colors
                  "
                />

                {tech}
              </div>
            ))}
          </div>
        </motion.div>

        {/* =================================================
            CTA
        ================================================= */}

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
            amount: 0.1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            relative
            overflow-hidden
            mt-24
            lg:mt-32
            rounded-[30px]
            border
            border-white/[0.08]
            bg-[#09090b]
            p-7
            sm:p-10
            lg:p-14
          "
        >
          <div
            className="
              absolute
              right-[-80px]
              top-[-120px]
              w-[300px]
              h-[300px]
              rounded-full
              bg-violet-600/[0.035]
              blur-[80px]
              pointer-events-none
            "
          />

          <div
            className="
              relative
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-10
            "
          >
            <div>
              <p
                className="
                  font-['Space_Grotesk']
                  text-[8px]
                  uppercase
                  tracking-[4px]
                  text-violet-400
                "
              >
                Continue Exploring
              </p>

              <h2
                className="
                  mt-4
                  max-w-xl
                  font-['Space_Grotesk']
                  text-3xl
                  sm:text-5xl
                  font-medium
                  leading-tight
                  tracking-[-3px]
                "
              >
                Want to see more of my work?
              </h2>
            </div>

            <div className="flex flex-wrap gap-3">

              {/* GitHub */}

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/[0.08]
                  bg-white/[0.02]
                  px-5
                  py-3.5
                  font-['Space_Grotesk']
                  text-xs
                  text-gray-400
                  hover:text-white
                  hover:border-violet-400/30
                  transition-colors
                "
              >
                <FiGithub size={15} />

                GitHub

                <FiArrowUpRight size={13} />
              </a>

              {/* Live */}

              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  flex
                  items-center
                  gap-3
                  rounded-full
                  bg-white
                  px-6
                  py-3.5
                  font-['Space_Grotesk']
                  text-xs
                  font-semibold
                  text-black
                  hover:bg-gray-200
                  transition-colors
                "
              >
                View Live Project

                <FiExternalLink size={14} />
              </a>
            </div>
          </div>
        </motion.div>

        {/* =================================================
            FOOTER
        ================================================= */}

        <div
          className="
            mt-20
            pt-7
            pb-8
            border-t
            border-white/[0.06]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-5
          "
        >
          <p
            className="
              font-['Space_Grotesk']
              text-[8px]
              uppercase
              tracking-[3px]
              text-gray-700
            "
          >
            © {new Date().getFullYear()} Rohit Singh
          </p>

          <button
            onClick={() => navigate("/#projects")}
            className="
              flex
              items-center
              gap-2
              font-['Space_Grotesk']
              text-[9px]
              uppercase
              tracking-[3px]
              text-gray-600
              hover:text-white
              transition-colors
            "
          >
            All Projects

            <FiArrowUpRight size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ==========================================
   INFO CARD
========================================== */

function Info({ label, value, active }) {
  return (
    <div
      className="
        group
        relative
        px-5
        py-6
        sm:px-7
        sm:py-7
        border-r
        border-b
        lg:border-b-0
        border-white/[0.06]
        hover:bg-white/[0.015]
        transition-colors
      "
    >
      <p
        className="
          font-['Space_Grotesk']
          text-[8px]
          uppercase
          tracking-[3px]
          text-gray-700
        "
      >
        {label}
      </p>

      <div className="mt-3 flex items-center gap-2.5">
        {active && (
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        )}

        <p
          className="
            font-['Space_Grotesk']
            text-sm
            text-gray-300
          "
        >
          {value}
        </p>
      </div>
    </div>
  );
}