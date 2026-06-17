import { motion } from "framer-motion";
import { Scale, FileText, Calculator } from "lucide-react";
const practiceAreas = [{
  icon: Scale,
  title: "Direito Previdenciário",
  description: "Aposentadorias, pensões, auxílios do INSS e revisões de benefícios. Lutamos pelos seus direitos junto à Previdência Social.",
  services: ["Aposentadoria por Idade", "Aposentadoria por Tempo", "Auxílio-Doença", "BPC/LOAS"]
}, {
  icon: Calculator,
  title: "Planejamento Previdenciário",
  description: "Análise completa do seu histórico contributivo para identificar o melhor momento e forma de se aposentar.",
  services: ["Simulação de Aposentadoria", "Análise de CNIS", "Cálculo de Tempo", "Estratégia Personalizada"]
}, {
  icon: FileText,
  title: "Direito Civil",
  description: "Questões familiares, contratos, direito do consumidor e responsabilidade civil com a atenção que seu caso merece.",
  services: ["Divórcio e Inventário", "Contratos", "Indenizações", "Direito do Consumidor"]
}];
const PracticeAreasSection = () => {
  return <section className="relative pt-20 pb-32 md:pt-28 md:pb-40 bg-background overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />

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
          <p className="text-gold-dark font-serif italic mb-2 text-3xl">Nossas Especialidades</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Áreas de <span className="text-gradient-gold">Atuação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos assessoria jurídica completa nas áreas que mais impactam a vida 
            dos brasileiros, sempre com foco em resultados.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {practiceAreas.map((area, index) => <motion.div key={area.title} initial={{
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
        }} className="group">
              <div className="h-full glass-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-500 border border-gold/20 hover:border-gold/40 bg-card/80">
                {/* Icon */}
                <div className="w-16 h-16 rounded-xl gradient-gold flex items-center justify-center mb-6 shadow-gold group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  {area.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {area.description}
                </p>

                {/* Services list */}
                <ul className="space-y-2">
                  {area.services.map(service => <li key={service} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {service}
                    </li>)}
                </ul>
                </div>
              </motion.div>)}
        </div>
      </div>
      
    </section>;
};
export default PracticeAreasSection;