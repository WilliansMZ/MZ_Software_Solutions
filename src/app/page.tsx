export default function Home() {
  return (
    <>
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
          <form
            action="https://formspree.io/f/mkgbdwzw"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block mb-1">Nombre</label>
              <input
                type="text"
                name="nombre"
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Correo</label>
              <input
                type="email"
                name="correo"
                required
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
              />
            </div>
            <div>
              <label className="block mb-1">Mensaje</label>
              <textarea
                name="mensaje"
                required
                rows={5}
                className="w-full p-3 rounded-md bg-gray-800 border border-gray-700"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-md font-semibold"
            >
              Enviar Mensaje
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-300 py-10 px-6 border-t border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <p className="text-sm">
            © 2025 MZ Software Solutions. Todos los derechos reservados.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/tuusuario" className="hover:text-white" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/tuusuario" className="hover:text-white" target="_blank">LinkedIn</a>
            <a href="https://wa.me/519XXXXXXXX" className="hover:text-white" target="_blank">WhatsApp</a>
            <a href="mailto:tuemail@ejemplo.com" className="hover:text-white">Email</a>
          </div>
        </div>
      </footer>
    </>
  );
}
