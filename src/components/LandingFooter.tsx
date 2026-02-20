const LandingFooter = () => (
  <footer className="bg-chocolate text-chocolate-foreground py-10 px-4">
    <div className="container mx-auto text-center">
      <div className="flex flex-wrap justify-center gap-6 text-sm mb-6 opacity-70">
        <a href="#" className="hover:underline">Termos de Uso</a>
        <a href="#" className="hover:underline">Política de Privacidade</a>
        <a href="#" className="hover:underline">Contato</a>
      </div>
      <p className="text-xs opacity-50">
        © {new Date().getFullYear()} Curso Páscoa Lucrativa. Todos os direitos reservados.
      </p>
      <p className="text-xs opacity-40 mt-2">
        Este produto é comercializado com apoio da Hotmart/Kiwify. As imagens são meramente ilustrativas.
      </p>
    </div>
  </footer>
);

export default LandingFooter;
