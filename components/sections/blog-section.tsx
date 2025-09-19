"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function BlogSection() {
  const blogPosts = [
    {
      title: "Tendencias en Desarrollo Web 2024",
      description: "Descubre las últimas tecnologías y frameworks que están revolucionando el desarrollo web este año.",
      date: "15 de Marzo, 2024",
      readTime: "8 min de lectura",
    },
    {
      title: "Arquitectura de Microservicios: Guía Completa",
      description: "Aprende cómo implementar una arquitectura de microservicios escalable y mantenible para tu empresa.",
      date: "28 de Febrero, 2024",
      readTime: "12 min de lectura",
    },
    {
      title: "DevOps: Automatización y Mejores Prácticas",
      description: "Implementa pipelines CI/CD efectivos y automatiza el despliegue de tus aplicaciones con estas estrategias.",
      date: "10 de Febrero, 2024",
      readTime: "10 min de lectura",
    },
  ]

  return (
    <section id="blog" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">Artículos Técnicos</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Mantente actualizado con nuestros insights técnicos, tutoriales y mejores prácticas de desarrollo.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <Card className="h-full glassmorphic-card">
                <CardHeader>
                  <CardTitle className="tracking-tight">{post.title}</CardTitle>
                  <CardDescription className="opacity-70">
                    {post.date} · {post.readTime}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground opacity-70">{post.description}</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="#"
                    className="inline-flex items-center text-sm text-primary hover:underline transition-colors"
                  >
                    Read more
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
