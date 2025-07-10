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

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 border-t border-gray-700">
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
