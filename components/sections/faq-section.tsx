"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function FaqSection() {
  const faqs = [
    {
      question: "¿Qué tipos de aplicaciones desarrollan?",
      answer:
        "Desarrollamos una amplia gama de aplicaciones: sitios web responsivos, aplicaciones web complejas, apps móviles nativas e híbridas, APIs REST, sistemas empresariales (ERP, CRM), e-commerce, y soluciones de software personalizado según las necesidades específicas de cada cliente.",
    },
    {
      question: "¿Cuánto tiempo toma desarrollar un proyecto?",
      answer:
        "El tiempo de desarrollo varía según la complejidad del proyecto. Un sitio web básico puede tomar 2-4 semanas, una aplicación web completa 3-6 meses, y sistemas empresariales complejos pueden requerir 6-12 meses. Siempre proporcionamos un cronograma detallado en la fase de planificación.",
    },
    {
      question: "¿Qué tecnologías utilizan?",
      answer:
        "Trabajamos con tecnologías modernas y probadas: React, Next.js, Node.js, Python/Django, React Native, Flutter, PostgreSQL, MongoDB, AWS, Docker, y muchas más. Seleccionamos la stack tecnológica más adecuada para cada proyecto específico.",
    },
    {
      question: "¿Ofrecen soporte después del lanzamiento?",
      answer:
        "Sí, ofrecemos diferentes niveles de soporte post-lanzamiento que incluyen mantenimiento correctivo, actualizaciones de seguridad, optimización de performance, y nuevas funcionalidades. El período y tipo de soporte depende del paquete contratado.",
    },
    {
      question: "¿Cómo manejan la seguridad de los datos?",
      answer:
        "La seguridad es nuestra prioridad. Implementamos las mejores prácticas de seguridad: encriptación de datos, autenticación robusta, autorización granular, auditorías de seguridad, backups automáticos, y cumplimiento con estándares internacionales como GDPR cuando es requerido.",
    },
  ]

  return (
    <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-heading font-bold tracking-tighter sm:text-5xl">
                Preguntas Frecuentes
              </h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400 opacity-70">
                Encuentra respuestas a las preguntas más comunes sobre nuestros servicios de desarrollo de software.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mx-auto max-w-3xl py-12">
          <ScrollReveal>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glassmorphic-accordion-item">
                  <AccordionTrigger className="text-left font-medium tracking-tight">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground opacity-70">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
