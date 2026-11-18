
import express from 'express'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(express.json())

// Comprobar que el servidor funciona
app.get('/api/salud', (req, res) => {
  res.json({
    mensaje: 'Servidor de 3D Lab funcionando'
  })
})

// Recibir mensajes del formulario
app.post('/api/contacto', (req, res) => {
  const { nombre, correo, mensaje } = req.body || {}

  if (
    typeof nombre !== 'string' ||
    typeof correo !== 'string' ||
    typeof mensaje !== 'string' ||
    !nombre.trim() ||
    !correo.trim() ||
    !mensaje.trim()
  ) {
    return res.status(400).json({
      error: 'Completa todos los campos'
    })
  }

  console.log('Mensaje recibido:', {
    nombre,
    correo,
    mensaje
  })

  res.status(200).json({
    mensaje: '¡Mensaje enviado correctamente!'
  })
})

app.listen(PORT, () => {
  console.log(`Servidor activo en puerto ${PORT}`)
})
