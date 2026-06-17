import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import WaveDivider from "./WaveDivider";
const testimonials = [{
  name: "Maria S.",
  location: "Londrina, PR",
  text: "Depois de anos tentando minha aposentadoria sozinha, encontrei a Dra. Bianca. Em poucos meses, consegui meu benefício. Atendimento impecável e muito humano.",
  rating: 5
}, {
  name: "Carlos R.",
  location: "Faxinal, PR",
  text: "Profissionalismo e dedicação definem esse escritório. Minha revisão de benefício foi aprovada e recebi valores atrasados que eu nem imaginava ter direito.",
  rating: 5
}, {
  name: "Ana Paula M.",
  location: "Londrina, PR",
  text: "A equipe me manteve informada em cada etapa do processo. Conseguimos resolver minha questão de pensão alimentícia de forma justa e rápida. Recomendo!",
  rating: 5
}];
const TestimonialsSection = () => {
  return <section className="relative pt-20 pb-32 md:pt-28 md:pb-40 bg-card overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl" />

      <div className="container px-4 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <p className="text-gold-dark font-serif italic mb-2 text-3xl">Depoimentos</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            O Que Nossos <span className="text-gradient-gold">Clientes</span> Dizem
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é o reflexo do nosso compromisso com a excelência.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => <motion.div key={testimonial.name} initial={{
          opacity: 0,
          y: 40
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.15
        }} className="bg-background rounded-2xl p-8 shadow-card border border-border relative">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-gold text-gold" />)}
              </div>

              {/* Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-gold flex items-center justify-center text-primary-foreground font-bold text-lg">
                  {testimonial.name[0]}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>)}
        </div>
      </div>
      
      {/* Wave transition to FAQ */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider fillColor="hsl(var(--background))" />
      </div>
    </section>;
};
export default TestimonialsSection;