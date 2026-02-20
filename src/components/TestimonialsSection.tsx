import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Carolina S.",
    text: "Consegui pagar minhas contas só com as vendas da Páscoa! O curso me deu toda a segurança que eu precisava para começar.",
    initials: "AC",
  },
  {
    name: "Mariana F.",
    text: "As receitas são fáceis e vendem muito rápido! Fiz R$ 3.200 em duas semanas seguindo o método do curso.",
    initials: "MF",
  },
  {
    name: "Juliana R.",
    text: "Nunca imaginei que conseguiria fazer ovos tão bonitos. Meus clientes amaram e já estão encomendando para o próximo ano!",
    initials: "JR",
  },
];

const Stars = () => (
  <div className="flex gap-0.5 mb-3">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-golden text-golden" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="animate-fade-up text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center text-primary mb-12">
        Quem Fez, Aprovou e Já Está <span className="font-script text-golden-dark">Lucrando!</span>
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {testimonials.map((t, i) => (
          <div
            key={t.name}
            className={`card-feature animate-fade-up animate-fade-up-delay-${i + 1}`}
          >
            <Stars />
            <p className="text-muted-foreground text-sm mb-4 italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading text-sm font-bold">
                {t.initials}
              </div>
              <span className="font-heading font-semibold text-primary text-sm">{t.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
