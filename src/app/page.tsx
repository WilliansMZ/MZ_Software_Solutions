import ContactForm from "@/components/ContactForm";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
export default function Home() {
  return (
    <>
    <header className="fixed top-0 left-0 w-full bg-gray-950 border-b border-gray-800 z-50">
  <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
    <h1 className="text-xl font-bold text-white">
      MZ<span className="text-blue-500">Software</span>
    </h1>
    <nav className="space-x-4 text-gray-300 text-sm sm:text-base">
      <a href="#servicios" className="hover:text-white transition">Servicios</a>
      <a href="#contacto" className="hover:text-white transition">Contacto</a>
      <a href="#footer" className="hover:text-white transition">Redes</a>
    </nav>
  </div>
</header>



      {/* HERO */}
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-6 py-20">
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MZ Software Solutions
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8">
            Transformamos ideas en soluciones digitales seguras, escalables y funcionales.
          </p>
          <a
            href="#contacto"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl text-base sm:text-lg transition"
          >
            Contáctanos
          </a>
        </section>
      </main>

      {/* SERVICIOS */}
      <section className="bg-gray-900 w-full py-16 px-6 text-white" id="servicios">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Desarrollo de Software a Medida",
                desc: "Creamos sistemas adaptados a tus procesos, mejorando eficiencia y control.",
              },
              {
                title: "Diseño de Arquitectura Escalable",
                desc: "Aplicaciones bien estructuradas para crecer sin perder rendimiento ni seguridad.",
              },
              {
                title: "Automatización y Digitalización",
                desc: "Optimizamos tareas repetitivas y digitalizamos procesos manuales para empresas.",
              },
            ].map((item, i) => (
              <div key={i} className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="bg-gray-950 text-white py-16 px-6 w-full">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Contáctanos</h2>
          <ContactForm />
        </div>
      </section>
      {/* PROYECTOS DESTACADOS */}
<section className="bg-gray-950 text-white py-16 px-6">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12">Proyectos Destacados</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: "Sistema de Gestión de Tickets",
          image: "data:image/jpeg;base64,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",
          link: "https://github.com/WilliansMZ/fullchamba",
        },
        {
          name: "Red Social Estudiantil",
          image: "https://source.unsplash.com/800x600/?social,network",
          link: "https://github.com/WilliansMZ/red-social",
        },
        {
          name: "Landing Page Corporativa",
          image: "https://source.unsplash.com/800x600/?website,code",
          link: "https://mz-software-solutions.vercel.app",
        },
      ].map((p, i) => (
        <a
          key={i}
          href={p.link}
          target="_blank"
          className="group bg-gray-800 rounded-xl overflow-hidden shadow-md hover:scale-105 transition transform"
        >
          <img
            src={p.image}
            alt={p.name}
            className="w-full h-48 object-cover group-hover:opacity-90 transition"
          />
          <div className="p-4">
            <h3 className="font-semibold text-lg">{p.name}</h3>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

      {/* FOOTER */}
      
      <footer id="footer" className="bg-gray-900 text-gray-300 py-10 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-sm">
            © 2025 MZ Software Solutions. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4 text-xl">
  <a href="https://github.com/WilliansMZ" className="hover:text-white" target="_blank"><FaGithub /></a>
  <a href="https://linkedin.com/in/williansmz" className="hover:text-white" target="_blank"><FaLinkedin /></a>
  <a href="https://wa.me/519XXXXXXXX" className="hover:text-white" target="_blank"><FaWhatsapp /></a>
  <a href="mailto:malquezuritawillians@gmail.com" className="hover:text-white"><FaEnvelope /></a>
</div>
        </div>
      </footer>
    </>
  );
}
