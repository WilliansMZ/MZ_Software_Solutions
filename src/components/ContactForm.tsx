'use client';

export default function ContactForm() {
  return (
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
  );
}
