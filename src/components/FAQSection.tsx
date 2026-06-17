import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const faqs = [{
  question: "Quais documentos preciso para dar entrada na aposentadoria?",
  answer: "Para iniciar o processo de aposentadoria, geralmente são necessários: RG, CPF, Carteira de Trabalho, comprovante de residência, extrato do CNIS (Cadastro Nacional de Informações Sociais) e, dependendo do tipo de aposentadoria, laudos médicos ou outros comprovantes específicos. Em nossa consulta inicial, fazemos uma análise completa do seu caso."
}, {
  question: "Quanto tempo demora um processo de aposentadoria no INSS?",
  answer: "O prazo pode variar dependendo da complexidade do caso. Processos administrativos no INSS costumam levar de 30 a 90 dias. Já ações judiciais podem levar de 1 a 3 anos, dependendo da vara e da região. Trabalhamos para acelerar cada etapa do seu processo."
}, {
  question: "Posso pedir revisão de um benefício que já recebo?",
  answer: "Sim! Muitos beneficiários têm direito a revisões que podem aumentar significativamente o valor da aposentadoria ou pensão. Existem diversos tipos de revisão, como a Revisão da Vida Toda, revisão por erro de cálculo, entre outras. Analisamos seu caso para identificar oportunidades."
}, {
  question: "A consulta inicial é paga?",
  answer: "A primeira consulta é uma avaliação do seu caso onde explicamos suas opções e chances de sucesso. Entre em contato para saber mais sobre nossos honorários e formas de pagamento, sempre transparentes e acessíveis."
}, {
  question: "Vocês atendem online ou só presencialmente?",
  answer: "Oferecemos atendimento híbrido! Você pode ser atendido presencialmente em nosso escritório ou de forma totalmente online, por videochamada. Nosso objetivo é facilitar o acesso à justiça, onde quer que você esteja."
}];
const FAQSection = () => {
  return <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-gold/5 via-transparent to-transparent blur-3xl" />

      <div className="container px-4 relative z-10 max-w-4xl">
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
          <p className="text-gold-dark font-serif italic mb-2 text-3xl">Tire Suas Dúvidas</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-4">
            Perguntas <span className="text-gradient-gold">Frequentes</span>
          </h2>
        </motion.div>

        <motion.div initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6,
        delay: 0.2
      }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => <AccordionItem key={index} value={`item-${index}`} className="bg-card rounded-xl border border-border px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-gold py-6 text-lg">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed text-base">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>)}
          </Accordion>
        </motion.div>
      </div>
    </section>;
};
export default FAQSection;