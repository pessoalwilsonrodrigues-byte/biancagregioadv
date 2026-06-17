import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";

const AboutSection = () => {
  return <section className="relative pt-20 pb-32 md:pt-28 md:pb-40 bg-card overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl" />
      
      <div className="container px-4">
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
          <p className="text-gold-dark font-serif italic mb-2 text-3xl">Conheça</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold">
            Sobre a <span className="text-gradient-gold">Advogada</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Card */}
          <motion.div initial={{
          opacity: 0,
          x: -40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }} className="relative">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Background shape */}
              <div className="absolute -inset-4 gradient-gold rounded-3xl opacity-20 blur-xl" />
              
              <div className="relative glass-card rounded-3xl p-6 shadow-elevated">
                <img alt="Dra. Bianca Grégio" src="/lovable-uploads/f31f406d-91b0-4568-b9bd-417d44f11fa7.png" className="w-full h-80 object-cover object-top rounded-md shadow-2xl" />
                
                <div className="mt-6 text-center">
                  <h3 className="text-2xl font-serif font-bold text-foreground">
                    Dra. Bianca Grégio
                  </h3>
                  <p className="text-gold-dark font-medium mt-1">OAB 93.049/PR</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Graduada em Direito e Pós-Graduada em Direito Previdenciário pela UEL
                  </p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Especialista em Direito Previdenciário e Civil
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div initial={{
          opacity: 0,
          x: 40
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6,
          delay: 0.4
        }} className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Com mais de uma década de experiência dedicada ao Direito Previdenciário e Civil, 
              nossa missão é transformar as complexidades administrativas e jurídicas em soluções claras e acessíveis para cada cliente.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Acreditamos que cada caso é único e merece atenção personalizada. Por isso, oferecemos um atendimento próximo, no qual você é ouvido e suas necessidades são nossa prioridade.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 pt-6">
              {[{
              icon: Award,
              label: "+10 Anos",
              desc: "de Experiência"
            }, {
              icon: BookOpen,
              label: "Especialização",
              desc: "Direito Previdenciário"
            }].map((item, index) => <motion.div key={item.label} initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.4,
              delay: 0.6 + index * 0.1
            }} className="text-center p-4 rounded-xl bg-secondary/50">
                  <item.icon className="w-8 h-8 mx-auto text-gold mb-2" />
                  <p className="font-bold text-xl text-foreground">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>;
};
export default AboutSection;
