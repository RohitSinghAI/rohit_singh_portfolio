import { motion } from "framer-motion";

const particles = [
  { left: "10%", top: "20%", size: 2 },
  { left: "25%", top: "70%", size: 2 },
  { left: "45%", top: "15%", size: 2 },
  { left: "65%", top: "75%", size: 2 },
  { left: "82%", top: "28%", size: 2 },
];

export default function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none bg-[#06100C]">

      {/* =========================================
          BASE
      ========================================= */}

      <div className="absolute inset-0 bg-[#06100C]" />

      {/* =========================================
          SOFT CENTER GLOW
      ========================================= */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[420px]
          h-[420px]
          rounded-full
          bg-emerald-400/[0.035]
          blur-[90px]
        "
      />

      {/* =========================================
          STATIC 3D RINGS
          No continuous rotation
      ========================================= */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[600px]
          h-[600px]
          rounded-full
          border
          border-emerald-300/[0.08]
          [transform:perspective(1200px)_rotateX(65deg)]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[440px]
          h-[440px]
          rounded-full
          border
          border-teal-300/[0.07]
          [transform:perspective(1200px)_rotateX(55deg)_rotateY(20deg)]
        "
      />

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[290px]
          h-[290px]
          rounded-full
          border
          border-amber-200/[0.06]
          [transform:perspective(1200px)_rotateX(60deg)_rotateY(-25deg)]
        "
      />

      {/* =========================================
          LIGHTWEIGHT CORE
      ========================================= */}

      <motion.div
        animate={{
          scale: [1, 1.04, 1],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[90px]
          h-[90px]
          rounded-full
          border
          border-emerald-300/[0.12]
          bg-emerald-400/[0.025]
        "
      />

      {/* =========================================
          SMALL CORE GLOW
      ========================================= */}

      <div
        className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[130px]
          h-[130px]
          rounded-full
          bg-emerald-400/[0.04]
          blur-[45px]
        "
      />

      {/* =========================================
          PARTICLES
      ========================================= */}

      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="
            absolute
            rounded-full
            bg-emerald-200
          "
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
            boxShadow:
              "0 0 8px rgba(52,211,153,0.6)",
          }}
          animate={{
            opacity: [0.15, 0.55, 0.15],
            y: [-8, 8, -8],
          }}
          transition={{
            duration: 5 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.3,
          }}
        />
      ))}

      {/* =========================================
          FLOOR GRID
      ========================================= */}

      <div
        className="
          absolute
          bottom-[-18%]
          left-1/2
          -translate-x-1/2
          w-[120%]
          h-[50%]
          opacity-[0.08]
          [transform:perspective(500px)_rotateX(65deg)]
          origin-bottom

          bg-[linear-gradient(
            rgba(52,211,153,0.10)_1px,
            transparent_1px
          ),
          linear-gradient(
            90deg,
            rgba(52,211,153,0.10)_1px,
            transparent_1px
          )]

          bg-[size:80px_80px]
        "
      />

      {/* =========================================
          TOP LIGHT
      ========================================= */}

      <div
        className="
          absolute
          top-[-180px]
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[320px]
          rounded-full
          bg-emerald-300/[0.02]
          blur-[100px]
        "
      />

      {/* =========================================
          SMALL AMBER LIGHT
      ========================================= */}

      <div
        className="
          absolute
          top-[25%]
          right-[12%]
          w-[140px]
          h-[140px]
          rounded-full
          bg-amber-200/[0.025]
          blur-[65px]
        "
      />

      {/* =========================================
          VIGNETTE
      ========================================= */}

      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(
            ellipse_at_center,
            transparent_35%,
            rgba(0,5,3,0.70)_100%
          )]
        "
      />

      {/* =========================================
          BOTTOM FADE
      ========================================= */}

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          h-[220px]
          bg-gradient-to-t
          from-[#06100C]
          to-transparent
        "
      />
    </div>
  );
}

