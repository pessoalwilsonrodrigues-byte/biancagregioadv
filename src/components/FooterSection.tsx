import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";
import logoBG from "@/assets/logo-bg.png";
const FooterSection = () => {
  return <footer className="bg-footer-bg text-footer-text pt-16 pb-8 relative overflow-hidden">
      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 gradient-gold" />

      <div className="container px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-12">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="mb-6">
              <img src={logoBG} alt="BG Advocacia" className="h-20 w-auto object-contain" />
            </div>
            <p className="text-footer-text/70 leading-relaxed mb-6">
              Assessoria jurídica especializada em Direito Previdenciário e Civil, 
              com atendimento humanizado e foco em resultados.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/biancagregio.adv" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h4 className="text-lg font-serif font-bold text-gold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-footer-text/70">
                  R. Mato Grosso, 299 - Sala 503
                  <br />
                  Centro, Londrina/PR
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-footer-text/70">
                  R. Ismael Pinto Siqueira, 658
                  <br />
                  Centro, Faxinal/PR, 86840-000
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-footer-text/70">(43) 99672-8409</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-footer-text/70">biancagregio.adv@hotmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <span className="text-footer-text/70">Seg - Sex: 9h às 16h
                <br />
                  Sáb: 9h às 12h
                </span>
              </li>
            </ul>
          </motion.div>

          {/* Localização Londrina */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h4 className="text-lg font-serif font-bold text-gold mb-6">Localização Londrina</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-footer-text/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.8984897686774!2d-51.16849372543591!3d-23.304722678994775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb438b50d6b3c9%3A0x6d29d59e2a0a44e5!2sR.%20Mato%20Grosso%2C%20299%20-%20Centro%2C%20Londrina%20-%20PR%2C%2086010-180!5e0!3m2!1spt-BR!2sbr!4v1704920000000!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Londrina" />
            </div>
          </motion.div>

          {/* Localização Faxinal */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.3
        }}>
            <h4 className="text-lg font-serif font-bold text-gold mb-6">Localização Faxinal</h4>
            <div className="w-full h-48 rounded-xl overflow-hidden border border-footer-text/20">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.698!2d-51.3209999!3d-23.9777778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb5e5a0f9c5555%3A0x1234567890abcdef!2sR.%20Ismael%20Pinto%20Siqueira%2C%20658%20-%20Centro%2C%20Faxinal%20-%20PR%2C%2086840-000!5e0!3m2!1spt-BR!2sbr!4v1704920000001!5m2!1spt-BR!2sbr" width="100%" height="100%" style={{
              border: 0
            }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Faxinal" />
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-footer-text/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-footer-text/50 text-sm">
            <p>© 2025 Bianca Grégio Advocacia - Todos os direitos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-gold transition-colors">Política de Privacidade</a>
              <a href="#" className="hover:text-gold transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default FooterSection;