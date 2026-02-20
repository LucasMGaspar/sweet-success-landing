import { CheckCircle2 } from "lucide-react";

const items = [
  "Você quer uma renda extra significativa sem sair de casa.",
  "Você ama confeitaria, mas tem insegurança para vender seus produtos.",
  "Você já faz doces, mas quer se profissionalizar e aumentar sua margem de lucro.",
  "Você busca receitas testadas e aprovadas que encantam os clientes.",
  "Você quer começar um negócio próprio com baixo investimento inicial.",
];

const TargetAudienceSection = () => (
  <section className="section-padding bg-chocolate text-chocolate-foreground">
    <div className="container mx-auto max-w-3xl">
      <h2 className="animate-fade-up text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center mb-10">
        Este Curso Foi Feito Sob Medida para Você, Se...
      </h2>

      <ul className="space-y-5">
        {items.map((item, i) => (
          <li
            key={i}
            className={`animate-fade-up animate-fade-up-delay-${Math.min(i + 1, 4)} flex items-start gap-4`}
          >
            <CheckCircle2 className="w-6 h-6 text-golden flex-shrink-0 mt-0.5" />
            <span className="text-base sm:text-lg">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default TargetAudienceSection;
