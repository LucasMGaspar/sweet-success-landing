import { ChefHat, Egg, TrendingUp, Gift } from "lucide-react";

const features = [
  {
    icon: ChefHat,
    title: "Técnicas de Temperagem Perfeita",
    text: "Domine o processo completo para um chocolate com brilho, estalo e textura profissional.",
  },
  {
    icon: Egg,
    title: "Receitas Gourmet Exclusivas",
    text: "Ovos de colher, trufas e bombons que são tendência e vendem como água.",
  },
  {
    icon: TrendingUp,
    title: "Precificação e Estratégias de Venda",
    text: "Saiba exatamente quanto cobrar para ter lucro real e atrair clientes.",
  },
  {
    icon: Gift,
    title: "Embalagens Profissionais",
    text: "Apresentação que encanta e valoriza seu produto, aumentando o ticket médio.",
  },
];

const FeaturesSection = () => (
  <section className="section-padding bg-background">
    <div className="container mx-auto">
      <h2 className="animate-fade-up text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-center text-primary mb-4">
        O Caminho Completo para uma Páscoa
      </h2>
      <p className="animate-fade-up animate-fade-up-delay-1 text-center text-lg font-script text-accent-foreground mb-12">
        Inesquecível (e <span className="text-golden-dark font-bold">Lucrativa</span>)
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`card-feature animate-fade-up animate-fade-up-delay-${i + 1} text-center`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-secondary/30 flex items-center justify-center">
              <f.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading font-semibold text-lg text-primary mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
