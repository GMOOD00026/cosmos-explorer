
import { useState } from 'react'
import Cubo3D from './components/Cubo3D'
import FormularioContacto from './components/FormularioContacto'

const figuras = [
  { id: 'cubo', nombre: '🧊 Cubo' },
  { id: 'esfera', nombre: '⚪ Esfera' },
  { id: 'cono', nombre: '🔺 Cono' },
  { id: 'toroide', nombre: '🍩 Dona' }
]

const colores = [
  { nombre: 'Azul', valor: '#22d3ee' },
  { nombre: 'Rojo', valor: '#ef4444' },
  { nombre: 'Morado', valor: '#a855f7' },
  { nombre: 'Verde', valor: '#22c55e' }
]

export default function App() {
  const [forma, setForma] = useState('cubo')
  const [color, setColor] = useState('#22d3ee')
  const [girando, setGirando] = useState(true)
  const [alto, setAlto] = useState(1)
  const [ancho, setAncho] = useState(1)

  function reiniciar() {
    setForma('cubo')
    setColor('#22d3ee')
    setGirando(true)
    setAlto(1)
    setAncho(1)
  }

  return (
    <main className="min-h-screen bg-[#080e1e] text-white">

      {/* MENÚ */}
      <header className="flex items-center justify-between border-b border-white/10 px-6 py-5 md:px-12">
        <h1 className="text-2xl font-bold text-cyan-400">
          3D LAB
        </h1>

        <nav className="flex gap-5">
          <a
            href="#laboratorio"
            className="text-gray-300 hover:text-cyan-400"
          >
            Laboratorio
          </a>

          <a
            href="#contacto"
            className="text-gray-300 hover:text-cyan-400"
          >
            Contacto
          </a>
        </nav>
      </header>

      {/* LABORATORIO */}
      <section
        id="laboratorio"
        className="mx-auto max-w-6xl px-6 py-12"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Laboratorio 3D Interactivo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Experimenta con figuras tridimensionales.
            Cambia sus formas, colores y proporciones
            en tiempo real.
          </p>
        </div>

        {/* VISOR 3D */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-cyan-500/30 bg-[#111a30] p-4">
          <Cubo3D
            forma={forma}
            color={color}
            girando={girando}
            alto={alto}
            ancho={ancho}
          />

          <p className="text-center text-sm text-gray-400">
            Arrastra con el ratón para explorar la figura
          </p>
        </div>

        {/* CONTROLES */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl bg-[#111a30] p-6">

          <h3 className="mb-6 text-center text-2xl font-bold">
            Panel de personalización
          </h3>

          {/* FIGURAS */}
          <h4 className="mb-3 font-semibold">
            Seleccionar figura
          </h4>

          <div className="mb-8 flex flex-wrap gap-3">
            {figuras.map((figura) => (
              <button
                key={figura.id}
                onClick={() => setForma(figura.id)}
                className={
                  'rounded-lg px-5 py-3 font-bold transition ' +
                  (forma === figura.id
                    ? 'bg-cyan-500 text-black'
                    : 'bg-[#23304a] text-white hover:bg-[#344564]')
                }
              >
                {figura.nombre}
              </button>
            ))}
          </div>

          {/* COLORES */}
          <h4 className="mb-3 font-semibold">
            Cambiar color
          </h4>

          <div className="mb-8 flex flex-wrap gap-3">
            {colores.map((item) => (
              <button
                key={item.nombre}
                onClick={() => setColor(item.valor)}
                style={{ backgroundColor: item.valor }}
                className="rounded-lg px-5 py-3 font-bold text-black"
              >
                {item.nombre}
              </button>
            ))}
          </div>

          {/* ESCALA */}
          <h4 className="mb-5 font-semibold">
            Modificar figura
          </h4>

          <div className="mb-6">
            <label
              htmlFor="alto"
              className="mb-2 block text-gray-300"
            >
              Estirar / Aplastar: {alto.toFixed(1)}
            </label>

            <input
              id="alto"
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={alto}
              onChange={(e) => setAlto(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          <div className="mb-8">
            <label
              htmlFor="ancho"
              className="mb-2 block text-gray-300"
            >
              Ensanchar / Estrechar: {ancho.toFixed(1)}
            </label>

            <input
              id="ancho"
              type="range"
              min="0.5"
              max="2"
              step="0.1"
              value={ancho}
              onChange={(e) => setAncho(Number(e.target.value))}
              className="w-full accent-cyan-400"
            />
          </div>

          {/* BOTONES */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setGirando(!girando)}
              className="rounded-lg bg-cyan-500 px-6 py-3 font-bold text-black"
            >
              {girando ? '⏸ Pausar' : '▶ Reanudar'}
            </button>

            <button
              onClick={reiniciar}
              className="rounded-lg bg-gray-600 px-6 py-3 font-bold hover:bg-gray-500"
            >
              🔄 Reiniciar
            </button>
          </div>

        </div>
      </section>

      {/* INFORMACIÓN */}
      <section className="bg-[#10182c] px-6 py-14 text-center">
        <h2 className="mb-4 text-3xl font-bold">
          Descubre el mundo 3D
        </h2>

        <p className="mx-auto max-w-3xl text-gray-400">
          Las figuras tridimensionales tienen ancho,
          alto y profundidad. En este laboratorio
          puedes experimentar modificando su escala,
          apariencia y movimiento en tiempo real.
        </p>
      </section>

      {/* FORMULARIO CONECTADO A EXPRESS */}
      <FormularioContacto />

      {/* PIE DE PÁGINA */}
      <footer className="p-6 text-center text-sm text-gray-500">
        3D Lab — Proyecto Final de Desarrollo Web
      </footer>

    </main>
  )
}



