"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { SpotlightCard } from "@/components/ui/spotlight-card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { GradientButton } from "@/components/ui-library/buttons/gradient-button"

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
}

export function HeroSection() {
  return (
    <section id="home" className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48 overflow-hidden">
      <AnimatedBackground variant="gradient" color="rgba(220, 38, 38, 0.08)" secondaryColor="rgba(75, 85, 99, 0.08)" />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/20 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container px-6 md:px-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <ScrollReveal>
            <motion.div
              className="flex flex-col justify-center space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <motion.h1 
                  className="text-4xl font-heading font-bold tracking-tighter sm:text-5xl xl:text-7xl/none"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="gradient-text inline-block"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                    }}
                    style={{
                      backgroundSize: "200% 200%",
                    }}
                  >
                    Desarrollo de Software
                  </motion.span>
                  <br />
                  <motion.span 
                    className="text-foreground inline-block"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                    }}
                  >
                    Personalizado
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400 opacity-70"
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Transformamos tus ideas en soluciones tecnológicas innovadoras. Desarrollamos aplicaciones web, móviles y sistemas empresariales con las últimas tecnologías y mejores prácticas de la industria.
                </motion.p>
              </motion.div>

              <motion.div className="flex flex-col gap-6 sm:flex-row sm:items-center" variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <GradientButton
                    glowAmount={5}
                    className="px-6 py-2.5 text-base"
                    gradientFrom="from-red-500"
                    gradientTo="to-red-700"
                    asChild
                  >
                    <Link href="#pricing" className="flex items-center">
                      Solicitar Cotización
                      <motion.span
                        className="ml-2 inline-block"
                        animate={{ x: [0, 4, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, repeatDelay: 2, duration: 1 }}
                      >
                        <ArrowRight className="h-4 w-4" />
                      </motion.span>
                    </Link>
                  </GradientButton>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <MagneticButton className="neumorphic-button">
                    <Link href="#features" className="px-6 py-2.5 block">
                      Ver Servicios
                    </Link>
                  </MagneticButton>
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <motion.p 
                  className="text-sm text-muted-foreground flex items-center"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.span 
                    className="inline-block w-2 h-2 rounded-full bg-green-500 mr-2"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  />
                  +100 proyectos exitosos entregados
                </motion.p>
              </motion.div>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
            >
              <SpotlightCard className="relative h-[450px] w-full overflow-hidden rounded-xl border glassmorphic-card p-1 border-glow-red">
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-transparent to-gray-900/20 z-10"></div>
                <div className="relative z-20 h-full w-full rounded-xl bg-gradient-to-br from-red-950/50 to-gray-950/50 p-6 flex items-center justify-center">
                  <div className="grid grid-cols-2 gap-6 w-full max-w-md">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="col-span-2 h-24 rounded-xl bg-red-800/20 border border-red-800/30 flex items-center justify-center glassmorphic-inner-card"
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
                        y: -5 
                      }}
                    >
                      <span className="font-heading text-xl text-white tracking-tight">Desarrollo Full-Stack</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="h-32 rounded-xl bg-gray-800/20 border border-gray-800/30 flex items-center justify-center glassmorphic-inner-card"
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 0 15px rgba(75, 85, 99, 0.3)",
                        rotate: 2 
                      }}
                    >
                      <span className="font-heading text-white tracking-tight">React/Next.js</span>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1.0 }}
                      className="h-32 rounded-xl bg-red-900/20 border border-red-900/30 flex items-center justify-center glassmorphic-inner-card"
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: "0 0 15px rgba(220, 38, 38, 0.3)",
                        rotate: -2 
                      }}
                    >
                      <span className="font-heading text-white tracking-tight">Next.js</span>
                    </motion.div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
