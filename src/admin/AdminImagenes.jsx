import React, { useState } from "react";
import axios from "axios";

const CargarImagen = () => {
    const [imagen, setImagen] = useState(null);
    const [nroOrden, setNroOrden] = useState(1);
    const [mensaje, setMensaje] = useState(""); // Para mostrar mensajes de éxito o error
    const [error, setError] = useState(null); // Para manejar errores

    const handleFileChange = (event) => {
        setImagen(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        // Agrega el console.log aquí para verificar el archivo
        console.log("Archivo a enviar:", imagen);

        const formData = new FormData();
        formData.append("ubicacion", imagen); // Cambiado a "ubicacion"
        formData.append("nro_orden", nroOrden);

        try {
            const response = await axios.post("http://localhost:3000/api/imagenes", formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });
            setMensaje("Imagen cargada exitosamente");
            setError(null); // Limpiar errores anteriores
            console.log(response.data);
        } catch (error) {
            console.error("Error al cargar la imagen:", error);
            setMensaje(""); // Limpiar mensaje de éxito
            setError("Error al cargar la imagen. Por favor, intenta nuevamente.");
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} required />
                <input
                    type="number"
                    value={nroOrden}
                    onChange={(e) => setNroOrden(e.target.value)}
                    placeholder="Número de orden"
                    required
                />
                <button type="submit">Cargar Imagen</button>
            </form>
            {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
};

export default CargarImagen;
