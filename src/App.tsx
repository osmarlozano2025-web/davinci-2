import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Utensils, 
  Users, 
  Gamepad2, 
  Sparkles, 
  MapPin, 
  Phone, 
  CheckCircle2, 
  Leaf,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import React, { useState, useEffect } from "react";

const SectionTitle = ({ 
  children, 
  subtitle, 
  centered = false 
}: { 
  children: React.ReactNode; 
  subtitle?: string; 
  centered?: boolean 
}) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    {subtitle && (
      <span className="text-brand-accent font-sans text-xs uppercase tracking-widest font-semibold mb-2 block">
        {subtitle}
      </span>
    )}
    <h2 className="font-serif text-4xl md:text-5xl text-brand-primary leading-tight">
      {children}
    </h2>
  </div>
);

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: any; 
  title: string; 
  description: string 
}) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="bg-white p-8 rounded-3xl shadow-sm border border-brand-secondary/30 flex flex-col gap-4"
  >
    <div className="w-12 h-12 bg-brand-secondary rounded-2xl flex items-center justify-center text-brand-primary">
      <Icon size={24} />
    </div>
    <h3 className="font-serif text-2xl text-brand-primary">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-sans">{description}</p>
  </motion.div>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen selection:bg-brand-accent/30">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-6"
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl font-bold tracking-tight text-brand-primary uppercase">Da Vinci</span>
          </div>
          
          <div className="hidden md:flex items-center gap-10">
            {["Diversión", "Seguridad", "Gastronomía", "Zonas"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-brand-primary/80 hover:text-brand-primary transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
            <button className="bg-brand-primary text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-brand-primary/20 hover:scale-105 transition-transform uppercase tracking-wider">
              Reservar VIP
            </button>
          </div>

          <button className="md:hidden text-brand-primary" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-brand-primary z-[60] flex flex-col items-center justify-center gap-8 text-white">
          <button className="absolute top-6 right-6" onClick={() => setMobileMenuOpen(false)}>
            <X size={32} />
          </button>
          {["Diversión", "Seguridad", "Gastronomía", "Zonas"].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-2xl font-serif"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="mt-4 border-2 border-white px-8 py-3 rounded-full text-lg font-bold">
            Reservar Ahora
          </button>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/image-1.png" 
            alt="Playroom Background"
            className="w-full h-full object-cover brightness-[0.85]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-white"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-xs font-bold tracking-widest uppercase mb-6">
              El playroom kids de españa
            </span>
            <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-[0.9] tracking-tight">
              Donde la Diversión <br/> <span className="italic">es un Arte</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-white/90 font-light leading-relaxed">
              Un santuario de juegos diseñado para estimular la imaginación, 
              garantizando la máxima tranquilidad para los padres.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-white text-brand-primary px-10 py-4 rounded-full text-base font-bold flex items-center justify-center gap-2 hover:bg-brand-secondary transition-colors">
                Explorar el Playroom <ChevronRight size={20} />
              </button>
              <button className="border-2 border-white/40 text-white hover:bg-white/10 px-10 py-4 rounded-full text-base font-bold transition-all">
                Ver Galería VIP
              </button>
            </div>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/60 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll para descubrir</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </motion.div>
      </section>

      {/* Diversión 1: Un Mundo a Su Medida */}
      <section id="diversión" className="py-24 md:py-32 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionTitle subtitle="Experiencia Premium">
                Un universo de magia <br/> diseñado por expertos
              </SectionTitle>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                En Da Vinci, no solo jugamos; creamos memorias. Cada rincoñ de nuestro espacio en España 
                ha sido proyectado para ofrecer una experiencia VIP, donde la estética se une a la 
                funcionalidad lúdica máxima.
              </p>
              <ul className="space-y-4">
                {[
                  "Áreas temáticas interactivas",
                  "Materiales de tacto suave y premium",
                  "Juegos que desafían la lógica y el movimiento",
                  "Ambiente climatizado y aromaterapia infantil"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-brand-primary font-medium">
                    <CheckCircle2 size={20} className="text-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              {...fadeIn}
              className="relative rounded-3xl overflow-hidden shadow-2xl skew-y-1"
            >
              <img 
                src="/images/image-2.png" 
                alt="Kids Playing" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 border-[16px] border-white/10 pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diversión 2: Aventuras Sin Fin */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle centered subtitle="Actividades Exclusivas">
            Descubrimientos que inspiran
          </SectionTitle>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Gamepad2}
              title="Búsqueda del Tesoro"
              description="Nuestros guías organizan acertijos por todo el recinto para encontrar premios secretos."
            />
            <FeatureCard 
              icon={Sparkles}
              title="Juegos Lúdicos"
              description="Basados en metodologías de aprendizaje activo que potencian la creatividad sin límites."
            />
            <FeatureCard 
              icon={Users}
              title="Equipo Titulado"
              description="Estudiantes y profesionales de la educación dedicados al cuidado y bienestar."
            />
          </div>
        </div>
      </section>

      {/* Seguridad 1: Compromiso Total */}
      <section id="seguridad" className="py-24 bg-brand-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center flex-row-reverse md:flex-row">
            <motion.div {...fadeIn} className="order-2 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/images/image-3.png" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
                  </div>
                  <div className="bg-brand-primary p-6 rounded-3xl text-white">
                    <Leaf size={32} className="mb-4 text-brand-accent" />
                    <h4 className="font-serif text-xl mb-2">100% Orgánico</h4>
                    <p className="text-xs opacity-80 leading-relaxed">Pinturas base agua y maderas de bosques sostenibles.</p>
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-brand-secondary">
                    <ShieldCheck size={32} className="mb-4 text-brand-primary" />
                    <h4 className="font-serif text-xl mb-2 text-brand-primary">Control VIP</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">Cámaras accesibles para padres y protocolos médicos.</p>
                  </div>
                  <div className="h-64 rounded-3xl overflow-hidden shadow-lg">
                    <img src="/images/image-4.png" className="w-full h-full object-cover" referrerPolicy="no-referrer"/>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="order-1 md:order-2">
              <SectionTitle subtitle="Para Tu Tranquilidad">
                Seguridad de nivel <br/> internacional
              </SectionTitle>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Entendemos que la seguridad es el pilar de un servicio premium. En Da Vinci, 
                eliminamos cualquier riesgo mediante una selección rigurosa de materiales 
                y normativas exhaustivas.
              </p>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="text-brand-primary font-bold text-xl">01.</div>
                  <div>
                    <h5 className="font-bold text-brand-primary mb-1 uppercase tracking-tight">Cero Tóxicos</h5>
                    <p className="text-sm text-slate-500">Garantizamos que ni plásticos, ni pinturas, ni juguetes contienen agentes nocivos como BPA o ftalatos.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="text-brand-primary font-bold text-xl">02.</div>
                  <div>
                    <h5 className="font-bold text-brand-primary mb-1 uppercase tracking-tight">Superficies Inteligentes</h5>
                    <p className="text-sm text-slate-500">Suelos de absorción de impactos de alta densidad con acabados antibacterianos.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Seguridad 2: Cuidado Experto */}
      <section className="py-24 bg-brand-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <SectionTitle subtitle="Staff Especializado">
             <span className="text-white">Un equipo que los <br/> cuida como tú</span>
            </SectionTitle>
            <p className="text-xl text-white/80 leading-relaxed mb-12">
              Nuestro personal no solo vigila; acompaña. Seleccionamos a estudiantes de 
              educación infantil y profesionales titulados para asegurar que el ambiente 
              sea siempre constructivo, divertido y, sobre todo, seguro.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <Users className="text-brand-accent" />
                <span className="font-medium">Ratio 1 tutor / 5 niños</span>
              </div>
              <div className="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
                <ShieldCheck className="text-brand-accent" />
                <span className="font-medium">Certificación Primeros Auxilios</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gastronomía: Nutrición con Estrella */}
      <section id="gastronomía" className="py-24 md:py-32 bg-brand-warm">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeIn}>
              <SectionTitle subtitle="Catering de Lujo">
                Sabor real, ingredientes <br/> de la tierra
              </SectionTitle>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                Olvídate de la comida rápida. En Da Vinci, nuestros platos han sido diseñados 
                por un Chef ejecutivo y preparados en una cocina profesional con los más 
                altos estándares.
              </p>
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-secondary/50 mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <Utensils className="text-brand-primary" />
                  <h4 className="font-serif text-2xl text-brand-primary">Frescura Local</h4>
                </div>
                <p className="text-slate-600 mb-6">
                  Utilizamos solo mercadería fresca de la zona, frutas de temporada y 
                  opciones para todo tipo de alergias o necesidades dietéticas.
                </p>
                <div className="flex gap-2">
                  {["Sin Azúcar Añadido", "KM 0", "Opciones Veganas"].map((tag) => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-brand-secondary text-brand-primary px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeIn} className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl">
                <img 
                  src="/images/image-5.png" 
                  alt="Healthy Food" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Floating Chef Quote */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden lg:block">
                <p className="italic text-sm text-brand-primary mb-2">"La nutrición es la base de un gran día de juegos. Cocinamos con amor y consciencia."</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-accent overflow-hidden">
                    <img src="/images/staff-1.png" referrerPolicy="no-referrer" />
                  </div>
                  <span className="text-xs font-bold uppercase">Chef Ejecutivo</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Zonas: Áreas de Juego */}
      <section id="zonas" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle centered subtitle="El Recinto">
            Un mapa para la aventura
          </SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Palestra", desc: "Escalada segura para valientes", img: "climb" },
              { title: "Toboganes", desc: "Espiral de adrenalina pura", img: "slide" },
              { title: "Pelotero VIP", desc: "Bolas de alta densidad y confort", img: "ball-pit" },
              { title: "Zona Lúdica", desc: "Construcción y creatividad", img: "build" }
            ].map((zona, index) => (
              <motion.div 
                key={zona.title}
                whileHover={{ scale: 1.02 }}
                className="group relative h-80 rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={`/images/image-${6 + index}.png`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/90 via-brand-primary/20 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="font-serif text-2xl mb-1">{zona.title}</h4>
                  <p className="text-xs opacity-80 uppercase tracking-widest">{zona.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-primary py-20 text-brand-secondary/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6 text-white">
                <span className="font-serif text-3xl font-bold tracking-tight uppercase">Da Vinci</span>
              </div>
              <p className="text-lg max-w-sm mb-8 leading-relaxed">
                Redefiniendo el concepto de playroom. Un espacio premium donde la diversión, 
                la seguridad y la nutrición se encuentran en España.
              </p>
              <div className="flex gap-4">
                {/* Social icons placeholders */}
                {[1,2,3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors text-white">
                    <Sparkles size={18} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contacto</h5>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3"><MapPin size={18} className="text-brand-accent shrink-0" /> Madrid, España</li>
                <li className="flex gap-3"><Phone size={18} className="text-brand-accent shrink-0" /> +34 900 000 000</li>
                <li className="flex gap-3"><Sparkles size={18} className="text-brand-accent shrink-0" /> hola@davinciplayroom.es</li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Menu</h5>
              <ul className="space-y-4 text-sm font-medium">
                <li><a href="#diversión" className="hover:text-white transition-colors">Diversión</a></li>
                <li><a href="#seguridad" className="hover:text-white transition-colors">Seguridad</a></li>
                <li><a href="#gastronomía" className="hover:text-white transition-colors">Gastronomía</a></li>
                <li><a href="#zonas" className="hover:text-white transition-colors">Zonas VIP</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-top border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest">
            <span>© 2026 Da Vinci Playroom. Todos los derechos reservados.</span>
            <div className="flex gap-8">
              <span className="cursor-pointer hover:text-white transition-colors">Privacidad</span>
              <span className="cursor-pointer hover:text-white transition-colors">Términos VIP</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
