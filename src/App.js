import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './App.css';

function App() {
  const [habitacion, setHabitacion] = useState('');
  const [cliente, setCliente] = useState('');
  const [fechaReserva, setFechaReserva] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de la habitación
    const habitacionRegex = /^[1-3][0-9]{2}$/;
    if (!habitacionRegex.test(habitacion)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ingrese una habitación válida',
      });
      return;
    }

    // Validación del nombre del cliente
    if (cliente.length < 4 || !/^[a-zA-Z\s]+$/.test(cliente)) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Recuerde que el nombre del cliente debe contener al menos 4 caracteres',
      });
      return;
    }

    // Validación de la fecha de reserva
    const fechaActual = new Date();
    const fechaReservaDate = new Date(fechaReserva);
    if (fechaReservaDate <= fechaActual) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe ingresar una fecha válida',
      });
      return;
    }

    // Validación de campos vacíos
    if (!habitacion || !cliente || !fechaReserva) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe ingresar los datos requeridos',
      });
      return;
    }

    // Si todas las validaciones son correctas
    Swal.fire({
      icon: 'success',
      title: '¡Registro exitoso!',
      text: 'La habitación ha sido registrada correctamente.',
    });

    // Aquí podrías agregar lógica para guardar los datos si es necesario
  };

  return (
    <div className="container">
      <h2>Registro de Habitación</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="habitacion">Número de habitación</label>
        <input
          type="text"
          id="habitacion"
          name="habitacion"
          value={habitacion}
          onChange={(e) => setHabitacion(e.target.value)}
          placeholder="Ej. 101"
          required
        />

        <label htmlFor="cliente">Nombre del cliente</label>
        <input
          type="text"
          id="cliente"
          name="cliente"
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          placeholder="Ej. Nandito Albornoz"
          required
        />

        <label htmlFor="fechaReserva">Fecha de reserva</label>
        <input
          type="date"
          id="fechaReserva"
          name="fechaReserva"
          value={fechaReserva}
          onChange={(e) => setFechaReserva(e.target.value)}
          required
        />

        <button type="submit">REGISTRAR</button>
      </form>
    </div>
  );
}

export default App;


