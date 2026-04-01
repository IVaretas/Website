import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Code, Layout, Smartphone, Zap, ChevronDown, Github, Twitter, Linkedin, Shield, Activity, Layers, ArrowRight } from 'lucide-react';
import { useRef, useState } from 'react';
import FinancialDashboard from './FinancialDashboard';
import SecurityDashboard from './SecurityDashboard';
import AnalyticDashboard from './AnalyticDashboard';
import EcommerceDashboard from './EcommerceDashboard';

// --- Components ---

const Navbar = () => (
  <motion.nav 
    initial={{ y: -20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between"
  >
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
        <div className="w-4 h-4 rounded-full bg-black" />
      </div>
      <span className="font-semibold text-sm tracking-wide">Studio.</span>
    </div>

    <div className="hidden md:flex items-center gap-8 px-8 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.05] backdrop-blur-md absolute left-1/2 -translate-x-1/2">
      {[
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#sobre' },
        { name: 'Serviços', href: '#servicos' },
        { name: 'Portefólio', href: '#portefolio' },
        { name: 'FAQ', href: '#faq' }
      ].map((item) => (
        <a key={item.name} href={item.href} className="text-xs font-medium text-zinc-400 hover:text-white transition-colors">
          {item.name}
        </a>
      ))}
    </div>

    <div className="flex items-center gap-4">
      <button className="hidden md:flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors">
        <Shield className="w-3.5 h-3.5" />
        Proteção ↗
      </button>
    </div>
  </motion.nav>
);

const TechLabel = ({ label, value, className, delay = 0 }: { label: string, value: string, className?: string, delay?: number }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
    className={`absolute flex flex-col items-start gap-1 ${className}`}
  >
    <div className="flex items-center gap-1.5">
      <div className="w-1 h-1 rounded-full bg-white/50" />
      <span className="text-[10px] font-medium text-zinc-300">{label}</span>
    </div>
    <span className="text-[9px] text-zinc-500 font-mono ml-2.5">{value}</span>
  </motion.div>
);

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* Background Glows */}
      <motion.div style={{ y, opacity }} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-white/[0.03] blur-[120px] rounded-[100%] pointer-events-none" />
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "20%"]), opacity }} className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-zinc-500/[0.02] blur-[100px] rounded-full pointer-events-none" />

      {/* Floating Labels (Decorative) */}
      <TechLabel label="Design" value="20.945" className="top-[25%] left-[15%] hidden lg:flex" delay={0.2} />
      <TechLabel label="Código" value="19.346" className="bottom-[30%] left-[20%] hidden lg:flex" delay={0.4} />
      <TechLabel label="Deploy" value="2,945" className="top-[35%] right-[15%] hidden lg:flex" delay={0.3} />
      <TechLabel label="Escala" value="440" className="bottom-[25%] right-[20%] hidden lg:flex" delay={0.5} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.05] mb-8"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-white/50 animate-pulse" />
          <span className="text-[10px] font-medium tracking-wide text-zinc-300">Desbloqueie o seu Potencial Digital ↗</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
        >
          Um clique para a <br className="hidden md:block" />
          <span className="glow-text">Excelência Digital</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-sm md:text-base text-zinc-400 max-w-xl mb-16 leading-relaxed"
        >
          Mergulhe na arte da criação web, onde o design inovador se alia à excelência em desenvolvimento para construir a sua presença online.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a href="#portefolio" className="glass-button bg-white text-black hover:bg-zinc-200 border-transparent px-8 py-3 inline-flex">
            Ver Portefólio ↗
          </a>
          <a href="#sobre" className="glass-button px-8 py-3 inline-flex">
            Descobrir Mais
          </a>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-10 left-10 hidden lg:flex items-center gap-3 text-[10px] text-zinc-500 font-medium tracking-widest uppercase"
      >
        <div className="w-6 h-6 rounded-full border border-white/10 flex items-center justify-center">
          <ChevronDown className="w-3 h-3" />
        </div>
        02/03 . Deslizar para baixo
      </motion.div>
    </section>
  );
};

const About = () => (
  <section id="sobre" className="py-24 px-6 relative z-10">
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">
            Mais do que uma agência, o seu <span className="glow-text">parceiro digital</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-6">
            No Studio, acreditamos que a presença online de uma marca deve ser uma extensão perfeita da sua identidade. Combinamos estética refinada com engenharia de ponta para criar experiências digitais que não só impressionam, mas também convertem.
          </p>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-8">
            A nossa equipa de especialistas trabalha lado a lado consigo, desde a conceção inicial até ao lançamento final, garantindo que cada detalhe é meticulosamente planeado e executado.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-white">10+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Anos Experiência</span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-3xl font-semibold text-white">150+</span>
              <span className="text-xs text-zinc-500 uppercase tracking-widest mt-1">Projetos Entregues</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-square rounded-full bg-gradient-to-tr from-white/[0.05] to-transparent border border-white/[0.05] p-8 relative overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)]" />
            <div className="w-full h-full rounded-full border border-white/[0.02] flex items-center justify-center relative z-10">
               <div className="w-2/3 h-2/3 rounded-full border border-white/[0.05] flex items-center justify-center">
                  <div className="w-1/3 h-1/3 rounded-full bg-white/[0.1] blur-md" />
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ title, desc, icon: Icon, delay }: { title: string, desc: string, icon: any, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    className="glass-panel p-8 group hover:bg-white/[0.04] transition-colors"
  >
    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/[0.05] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-5 h-5 text-zinc-300" />
    </div>
    <h3 className="text-lg font-medium text-white mb-3">{title}</h3>
    <p className="text-sm text-zinc-400 leading-relaxed">{desc}</p>
  </motion.div>
);

const Services = () => {
  return (
    <section id="servicos" className="py-24 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
              A Nossa <span className="glow-text">Abordagem</span>
            </h2>
            <p className="text-zinc-400 text-sm md:text-base">
              O nosso processo substitui o moroso trabalho manual por soluções web otimizadas e de alto desempenho, focadas na conversão.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard 
            title="Design UI/UX" 
            desc="Criamos interfaces intuitivas e visualmente deslumbrantes que cativam os utilizadores e elevam a identidade da sua marca."
            icon={Layout}
            delay={0.1}
          />
          <FeatureCard 
            title="Desenvolvimento Frontend" 
            desc="Construímos aplicações web rápidas, responsivas e acessíveis, focadas na performance e na melhor experiência para o utilizador."
            icon={Code}
            delay={0.2}
          />
          <FeatureCard 
            title="Otimização de Performance" 
            desc="Garantimos que o seu site carrega instantaneamente e funciona sem falhas, proporcionando a melhor experiência possível."
            icon={Zap}
            delay={0.3}
          />
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  return (
    <section className="py-12 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="glass-panel p-8 lg:col-span-2 flex flex-col justify-between relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/[0.02] blur-[60px] rounded-full -translate-y-1/2 translate-x-1/4 pointer-events-none" />
            
            <div className="flex justify-between items-start mb-12 relative z-10">
              <div>
                <h3 className="text-4xl font-semibold text-white mb-1">98.2% <span className="text-sm text-zinc-500 font-normal">↗</span></h3>
                <p className="text-xs text-zinc-400">Satisfação do Cliente . Global</p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.05] text-[10px] text-zinc-400">Acesso à API</span>
                <span className="px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.05] text-[10px] text-zinc-400">Atribuição a especialistas</span>
              </div>
            </div>

            <div className="relative z-10">
              <h4 className="text-sm font-medium text-white mb-2">Projetos Bem-sucedidos</h4>
              <p className="text-xs text-zinc-400 max-w-sm">A tecnologia web inovadora alia-se à especialização em design para impulsionar a sua jornada digital.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel p-8 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-sm font-medium text-white mb-6">Fluxo de Conversão</h4>
              {/* Abstract Bar Chart */}
              <div className="flex items-end gap-3 h-32 mb-6">
                {[40, 70, 45, 90, 60, 80].map((h, i) => (
                  <div key={i} className="w-full bg-white/[0.05] rounded-t-sm relative group">
                    <div 
                      className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white/20 to-white/50 rounded-t-sm transition-all duration-500 group-hover:from-white/40 group-hover:to-white/80" 
                      style={{ height: `${h}%` }} 
                    />
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
            <p className="text-xs text-zinc-400">O ecossistema digital onde cada interação revela novas oportunidades de negócio.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Work = ({ onProjectClick }: { onProjectClick: (title: string) => void }) => {
  const projects = [
    { title: "Aplicação Financeira", category: "Web App", metric: "+A3.7", desc: "Missão exploratória focada na navegação de vastas possibilidades financeiras." },
    { title: "Plataforma de Segurança", category: "Landing Page", metric: "99.9%", desc: "Onde a tecnologia inovadora se cruza com a mais alta segurança digital." },
    { title: "Dashboard Analítico", category: "Dashboard", metric: "19.2k", desc: "Acompanhe o crescimento do seu projeto num ecossistema digital próspero." },
    { title: "Plataforma E-commerce", category: "Plataforma", metric: "$2.7m", desc: "Onde cada detalhe é pensado ao milímetro para maximizar a conversão." }
  ];

  return (
    <section id="portefolio" className="py-24 px-6 relative">
      {/* Subtle separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">Projetos <span className="glow-text">Selecionados</span></h2>
            <p className="text-zinc-400 text-sm md:text-base max-w-md">Uma coleção de referências baseadas em projetos já realizados, demonstrando a nossa especialização em design e desenvolvimento.</p>
          </div>
          <button className="glass-button w-fit">Ver Todos os Projetos <ArrowRight className="w-4 h-4" /></button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              onClick={() => onProjectClick(project.title)}
              className={`glass-panel p-8 group cursor-pointer overflow-hidden relative flex flex-col justify-between min-h-[320px] ${i === 0 || i === 3 ? 'lg:col-span-2' : 'lg:col-span-1'}`}
            >
              {/* Abstract Project Visual */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-medium mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300 shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 relative z-10 mt-auto">
                <p className="text-xs text-zinc-400 max-w-[240px] leading-relaxed">{project.desc}</p>
                <div className="text-left sm:text-right">
                  <span className="text-[10px] text-zinc-500 block mb-1">Métrica Principal</span>
                  <span className="text-xl font-mono text-zinc-300">{project.metric}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "Qual é o tempo médio de desenvolvimento de um website?", a: "O tempo de desenvolvimento varia consoante a complexidade do projeto. Um website institucional simples pode demorar 3 a 4 semanas, enquanto uma plataforma e-commerce ou web app pode levar de 2 a 4 meses." },
    { q: "Oferecem serviços de manutenção após o lançamento?", a: "Sim, disponibilizamos planos de manutenção contínua para garantir que o seu website permanece seguro, atualizado e a funcionar com o máximo desempenho." },
    { q: "Como funciona o processo de pagamento?", a: "Normalmente, dividimos o pagamento em três fases: 30% na adjudicação, 40% na aprovação do design e 30% antes do lançamento final." },
    { q: "O meu website estará otimizado para motores de busca (SEO)?", a: "Absolutamente. Todos os nossos projetos são desenvolvidos com as melhores práticas de SEO técnico, garantindo uma base sólida para a sua visibilidade online." }
  ];

  return (
    <section id="faq" className="py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-4">
            Perguntas <span className="glow-text">Frequentes</span>
          </h2>
          <p className="text-zinc-400 text-sm md:text-base">Esclareça as suas dúvidas sobre o nosso processo e serviços.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-panel p-6 cursor-pointer group"
            >
              <details className="group/details">
                <summary className="flex items-center justify-between font-medium text-white list-none [&::-webkit-details-marker]:hidden">
                  {faq.q}
                  <span className="transition group-open/details:rotate-180">
                    <ChevronDown className="w-4 h-4 text-zinc-500" />
                  </span>
                </summary>
                <p className="text-zinc-400 text-sm mt-4 leading-relaxed pr-8">
                  {faq.a}
                </p>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="contacto" className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/[0.02]" />
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white mb-6"
          >
            Pronto para <span className="glow-text">inovar?</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-zinc-400 text-sm md:text-base max-w-lg mx-auto"
          >
            {showForm 
              ? "Vamos transformar a sua visão numa realidade digital de excelência. Preencha o formulário abaixo e entraremos em contacto brevemente."
              : "Vamos transformar a sua visão numa realidade digital de excelência. Entre em contacto para discutirmos o seu próximo projeto."}
          </motion.p>
        </div>

        {!showForm ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <button 
              onClick={() => setShowForm(true)}
              className="glass-button bg-white text-black hover:bg-zinc-200 border-transparent px-10 py-4 text-sm"
            >
              Iniciar Projeto ↗
            </button>
          </motion.div>
        ) : (
          <motion.form 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="glass-panel p-8 flex flex-col gap-6"
            onSubmit={(e) => { e.preventDefault(); alert('Mensagem enviada com sucesso!'); }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Nome</label>
                <input 
                  type="text" 
                  id="name" 
                  className="bg-white/[0.03] border border-white/[0.05] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="O seu nome"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  className="bg-white/[0.03] border border-white/[0.05] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors"
                  placeholder="o.seu@email.com"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="text-xs font-medium text-zinc-400 uppercase tracking-wider">Mensagem</label>
              <textarea 
                id="message" 
                rows={4}
                className="bg-white/[0.03] border border-white/[0.05] rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-white/20 transition-colors resize-none"
                placeholder="Fale-nos sobre o seu projeto..."
                required
              />
            </div>
            <button type="submit" className="glass-button bg-white text-black hover:bg-zinc-200 border-transparent py-3 mt-2 w-full justify-center">
              Enviar Mensagem ↗
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="py-8 px-6 border-t border-white/[0.05] relative z-10">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-6 text-[10px] font-medium text-zinc-500 uppercase tracking-widest">
        <a href="#" className="hover:text-white transition-colors">Suporte</a>
        <a href="#" className="hover:text-white transition-colors">Registar</a>
      </div>
      
      <p className="text-xs text-zinc-600">
        © Concebido com dedicação pelo Studio . 2026
      </p>

      <div className="flex items-center gap-4">
        <a href="#" className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all">
          <Twitter className="w-3.5 h-3.5" />
        </a>
        <a href="#" className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/[0.05] flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/[0.1] transition-all">
          <Linkedin className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  </footer>
);

export default function App() {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  if (activeProject === "Aplicação Financeira") {
    return <FinancialDashboard onBack={() => setActiveProject(null)} />;
  }

  if (activeProject === "Plataforma de Segurança") {
    return <SecurityDashboard onBack={() => setActiveProject(null)} />;
  }

  if (activeProject === "Dashboard Analítico") {
    return <AnalyticDashboard onBack={() => setActiveProject(null)} />;
  }

  if (activeProject === "Plataforma E-commerce") {
    return <EcommerceDashboard onBack={() => setActiveProject(null)} />;
  }

  return (
    <div className="min-h-screen bg-[#050505] text-zinc-50 selection:bg-white/20 font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Metrics />
        <Work onProjectClick={setActiveProject} />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
