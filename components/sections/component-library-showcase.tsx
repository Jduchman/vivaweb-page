"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedText } from "@/components/ui/animated-text"
import { motion } from "framer-motion"
import { AnimatedBackground } from "@/components/ui/animated-background"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, BookOpen, GraduationCap, MapPin } from "lucide-react"
import { GlowingTiltCard } from "@/components/ui/glowing-tilt-card"
import Link from "next/link"

export function ComponentLibraryShowcase() {
  const projects = [
    {
      title: "Biblioteca Virtual",
      description: "Sistema completo de gestión bibliotecaria con catálogo digital, préstamos automatizados, reservas online y panel administrativo avanzado.",
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      technologies: ["React", "Node.js", "PostgreSQL", "Express"],
      features: [
        "Catálogo digital interactivo",
        "Sistema de préstamos",
        "Panel de administración",
        "Reportes automatizados"
      ],
      status: "Completado",
      borderClass: "border-glow-blue",
      gradientFrom: "from-blue-500/20",
      gradientTo: "to-cyan-500/20"
    },
    {
      title: "Academia Online",
      description: "Plataforma educativa completa con cursos virtuales, evaluaciones automáticas, seguimiento de progreso y sistema de certificaciones.",
      icon: <GraduationCap className="h-8 w-8 text-green-500" />,
      technologies: ["Next.js", "Django", "MySQL", "AWS"],
      features: [
        "Cursos interactivos",
        "Evaluaciones automáticas",
        "Certificados digitales",
        "Dashboard de progreso"
      ],
      status: "En desarrollo",
      borderClass: "border-glow-green",
      gradientFrom: "from-green-500/20",
      gradientTo: "to-emerald-500/20"
    },
    {
      title: "Sistema de Catastro",
      description: "Sistema web para gestión catastral con mapas interactivos, registro de propiedades, cálculo de impuestos y reportes gubernamentales.",
      icon: <MapPin className="h-8 w-8 text-red-500" />,
      technologies: ["React", "Python", "PostGIS", "Leaflet"],
      features: [
        "Mapas interactivos",
        "Registro de propiedades",
        "Cálculo de impuestos",
        "Reportes oficiales"
      ],
      status: "Completado",
      borderClass: "border-glow-red",
      gradientFrom: "from-red-500/20",
      gradientTo: "to-orange-500/20"
    },
  ]

  return (
    <section id="projects" className="relative w-full py-12 md:py-24 lg:py-32 overflow-hidden">
      <AnimatedBackground variant="grid" color="rgba(220, 38, 38, 0.03)" />

      <div className="container px-6 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
            <div className="space-y-4">
              <AnimatedText
                text="Proyectos Destacados"
                variant="heading"
                className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl gradient-text"
                animation="slide"
              />
              <AnimatedText
                text="Conoce algunos de nuestros proyectos más exitosos que demuestran nuestra experiencia en desarrollo de sistemas web y páginas web personalizadas."
                variant="paragraph"
                className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70"
                animation="fade"
                delay={0.3}
              />
            </div>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 0.2}>
              <GlowingTiltCard>
                <motion.div
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Card className={`h-full glassmorphic-card group ${project.borderClass} relative overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradientFrom} ${project.gradientTo} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <CardHeader className="relative z-10">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          className="p-3 rounded-xl bg-muted/50 w-fit"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 400 }}
                        >
                          {project.icon}
                        </motion.div>
                        <Badge variant={project.status === "Completado" ? "default" : "secondary"} className="glassmorphic-badge">
                          {project.status}
                        </Badge>
                      </div>
                      
                      <CardTitle className="text-xl tracking-tight group-hover:text-red-500 transition-colors duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="relative z-10 space-y-6">
                      <div>
                        <h4 className="font-medium text-sm mb-3 text-muted-foreground">Características principales:</h4>
                        <ul className="space-y-2">
                          {project.features.map((feature, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-center text-sm text-muted-foreground"
                              initial={{ opacity: 0, x: -10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-red-500 mr-3 flex-shrink-0"></span>
                              {feature}
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-medium text-sm mb-3 text-muted-foreground">Tecnologías:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, i) => (
                            <motion.span
                              key={i}
                              className="px-2 py-1 text-xs bg-muted/50 rounded-md border"
                              whileHover={{ scale: 1.05 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-2 pt-4">
                        <motion.button
                          className="flex-1 px-4 py-2 text-sm bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ExternalLink className="h-4 w-4" />
                          Ver más
                        </motion.button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </GlowingTiltCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.8}>
          <div className="text-center mt-16">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link 
                href="#pricing" 
                className="inline-flex items-center px-8 py-3 text-lg font-medium bg-gradient-to-r from-red-500 to-red-700 text-white rounded-xl hover:shadow-lg hover:shadow-red-500/25 transition-all duration-300"
              >
                ¿Tienes un proyecto similar?
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
