export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gray-950 text-white px-4">
        <section className="text-center max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            MZ Software Solutions
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Transformamos ideas en soluciones digitales seguras, escalables y funcionales.
          </p>
          <a
            href="#contacto"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition"
          >
            Contáctanos
          </a>
        </section>
      </main>

      <section className="bg-gray-900 w-full py-16 px-4 text-white" id="servicios">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestros Servicios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Desarrollo de Software a Medida</h3>
              <p className="text-gray-300">
                Creamos sistemas adaptados a tus procesos, mejorando eficiencia y control.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Diseño de Arquitectura Escalable</h3>
              <p className="text-gray-300">
                Aplicaciones bien estructuradas para crecer sin perder rendimiento ni seguridad.
              </p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-md hover:scale-105 transition">
              <h3 className="text-xl font-semibold mb-2">Automatización y Digitalización</h3>
              <p className="text-gray-300">
                Optimizamos tareas repetitivas y digitalizamos procesos manuales para empresas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
  id="contacto"
  className="bg-gray-950 text-white py-16 px-4 w-full"
>
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
<footer className="bg-gray-900 text-gray-300 py-8 px-4">
  <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
    <p className="text-sm text-center md:text-left">
      © 2025 MZ Software Solutions. Todos los derechos reservados.
    </p>
    <div className="flex space-x-4">
      <a
        href="https://github.com/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        GitHub
      </a>
      <a
        href="https://linkedin.com/in/tuusuario"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        LinkedIn
      </a>
      <a
        href="https://wa.me/519XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        WhatsApp
      </a>
      <a
        href="mailto:tuemail@ejemplo.com"
        className="hover:text-white transition"
      >
        Email
      </a>
    </div>
  </div>
</footer>


    </>
  );
}
