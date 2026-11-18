
import { useState } from 'react'

export default function FormularioContacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [estado, setEstado] = useState('')
  const [enviando, setEnviando] = useState(false)

  async function enviarFormulario(e) {
    e.preventDefault()
    setEnviando(true)
    setEstado('')

    try {
      const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

      const respuesta = await fetch(`${API}/api/contacto`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          correo,
          mensaje
        })
      })

      const datos = await respuesta.json()

      if (!respuesta.ok) {
        throw new Error(datos.error || 'Error al enviar')
      }

      setEstado('✅ ¡Mensaje enviado correctamente!')
      setNombre('')
      setCorreo('')
      setMensaje('')

    } catch (error) {
      setEstado('❌ ' + error.message)
    } finally {
      setEnviando(false)
    }
  }

  return (
    <section
      id="contacto"
      className="bg-[#10182c] px-6 py-16"
    >
      <div className="mx-auto max-w-xl">

        <h2 className="mb-4 text-center text-3xl font-bold">
          Contáctanos
        </h2>

        <p className="mb-8 text-center text-gray-400">
          ¿Tienes alguna sugerencia para nuestro
          laboratorio 3D? Envíanos un mensaje.
        </p>

        <form
          onSubmit={enviarFormulario}
          className="space-y-5"
        >
          <div>
            <label className="mb-2 block">
              Nombre
            </label>

            <input
              type="text"
              required
              maxLength={100}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full rounded-lg border border-gray-600 bg-[#080e1e] p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Correo electrónico
            </label>

            <input
              type="email"
              required
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="correo@ejemplo.com"
              className="w-full rounded-lg border border-gray-600 bg-[#080e1e] p-3 text-white"
            />
          </div>

          <div>
            <label className="mb-2 block">
              Mensaje
            </label>

            <textarea
              required
              maxLength={2000}
              rows="5"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Escribe tu mensaje..."
              className="w-full rounded-lg border border-gray-600 bg-[#080e1e] p-3 text-white"
            />
          </div>

          <button
            type="submit"
            disabled={enviando}
            className="w-full rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black hover:bg-cyan-400 disabled:opacity-50"
          >
            {enviando ? 'Enviando...' : 'Enviar mensaje'}
          </button>

          {estado && (
            <p className="text-center" role="status">
              {estado}
            </p>
          )}

        </form>
      </div>
    </section>
  )
}
