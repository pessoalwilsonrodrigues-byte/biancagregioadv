import { motion } from "framer-motion";
import { Heart, Zap, Trophy } from "lucide-react";
import WaveDivider from "./WaveDivider";

const differentials = [
  {
    icon: Heart,
    title: "Atendimento Humanizado",
    description: "Entendemos que cada cliente tem uma história única. Oferecemos suporte empático e acolhedor em todas as etapas do seu processo.",
  },
  {
    icon: Zap,
    title: "Agilidade Processual",
    description: "Trabalhamos com eficiência e tecnologia para acelerar seus processos, mantendo você informado sobre cada avanço do caso.",
  },
  {
    icon: Trophy,
    title: "Experiência Comprovada",
    description: "Anos de atuação com histórico de sucesso em causas previdenciárias e civis. Sua confiança é nosso maior patrimônio.",
  },
];

const DifferentialsSection = () => {
  return (
    <section className="relative pt-20 pb-32 md:pt-24 md:pb-40 gradient-gold overflow-hidden">
      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground">
            Por Que Nos Escolher?
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {differentials.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-card/20 backdrop-blur-sm flex items-center justify-center border-2 border-card/30">
                <item.icon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-primary-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Wave transition to testimonials */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveDivider fillColor="hsl(var(--card))" />
      </div>
    </section>
  );
};

export default DifferentialsSection;
