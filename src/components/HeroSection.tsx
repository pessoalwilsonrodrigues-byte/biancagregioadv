import { motion } from "framer-motion";
import ladyJusticeMobile from "@/assets/lady-justice-mobile.png";

const HeroSection = () => {
  const handleScrollToAreas = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#atuacao");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen gradient-hero overflow-hidden pt-28 md:pt-32 lg:pt-36">
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50" />
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-1/4 w-2 h-2 rounded-full bg-gold-light/60 animate-pulse" />
        <div className="absolute top-48 right-1/3 w-1.5 h-1.5 rounded-full bg-gold/50 animate-pulse delay-300" />
        <div className="absolute bottom-1/3 left-1/5 w-2 h-2 rounded-full bg-gold-light/40 animate-pulse delay-500" />
      </div>

      {/* Lady Justice - Right side, large (Desktop only) */}
      <div className="hidden lg:block absolute right-0 bottom-0 w-[500px] opacity-30 animate-float pointer-events-none z-10">
        <img src={ladyJusticeMobile} alt="Dama da Justiça" className="w-full h-auto object-contain" />
      </div>

      <div className="container relative z-20 px-4 py-8 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[70vh]">
          {/* Left Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }} className="space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-lg md:text-xl font-serif italic text-gold-dark">
                Especialista em
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                <span className="text-gradient-gold">Direito</span>
                <br />
                <span className="text-foreground">Previdenciário</span>
                <br />
                <span className="text-gradient-gold">&</span>{" "}
                <span className="text-foreground">Civil</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto lg:mx-0">
              Atuamos para garantir seu direito junto à Previdência Social.
            </p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6,
            delay: 0.6
          }} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="https://wa.me/5543996728409" target="_blank" rel="noopener noreferrer" className="btn-gold shine-effect text-lg px-8 py-4 rounded-full font-semibold tracking-wide text-primary-foreground inline-flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                AGENDE UMA CONSULTA
              </a>
              <a href="#atuacao" onClick={handleScrollToAreas} className="border-2 border-gold text-gold hover:bg-gold/10 text-lg px-8 py-4 rounded-full font-semibold tracking-wide inline-flex items-center justify-center transition-colors">
                Áreas de Atuação
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Lawyer Image centered */}
          <motion.div initial={{
          opacity: 0,
          x: 50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} className="relative flex justify-center lg:justify-center order-1 lg:order-2">
            {/* Lawyer Portrait - Centered */}
            
          </motion.div>
        </div>
      </div>

      {/* Lady Justice Mobile - positioned at bottom right with wave overlapping */}
      <div className="lg:hidden absolute bottom-0 right-0 w-72 opacity-30 animate-float pointer-events-none z-10">
        <img src={ladyJusticeMobile} alt="Dama da Justiça" className="w-full h-auto object-contain" />
      </div>

    </section>;
};
export default HeroSection;
