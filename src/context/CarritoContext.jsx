import Swal from 'sweetalert2';

import React, { createContext, useState, useEffect } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState(() => {
        const carritoGuardado = localStorage.getItem('carrito');
        return carritoGuardado ? JSON.parse(carritoGuardado) : [];
    });

    // Guarda el carrito en localStorage cada vez que se actualice
    useEffect(() => {
        localStorage.setItem('carrito', JSON.stringify(carrito));
    }, [carrito]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (producto) => {
        const productoExistente = carrito.find(item => item.producto_id === producto.producto_id);
        if (productoExistente) {
            setCarrito(carrito.map(item =>
                item.producto_id === producto.producto_id
                    ? { ...item, cantidad: item.cantidad + 1 }
                    : item
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }
    };

    
    // ****************VACIAR CARRITO ***************/
    
    // Función para vaciar el carrito
    // const vaciarCarrito = () => {
    //     setCarrito([]);
    // };

    
    // const vaciarCarrito = () => {
    //     // Mostrar un diálogo de confirmación
    //     const confirmarVaciado = window.confirm("¿Estás seguro de que deseas vaciar el carrito?");

    //     // Si el usuario confirma, se procede a vaciar el carrito
    //     if (confirmarVaciado) {
    //         setCarrito([]);
    //     }
    // };


    const vaciarCarrito = () => {
        Swal.fire({
            title: 'Estás seguro?',
            text: 'Esto eliminará todos los productos del carrito.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, vaciar carrito',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Vaciar el carrito si el usuario confirma
                setCarrito([]);
                Swal.fire(
                    'Carrito vaciado',
                    'Tu carrito ha sido vaciado.',
                    'success'
                );
            }
        });
    };

// **************** ELIMINAR UN PRODUCTO DEL CARRITO ***************/

    // Función para eliminar un producto del carrito
    // const eliminarDelCarrito = (productoId) => {
    //     setCarrito(carrito.filter(producto => producto.producto_id !== productoId));
    // };

    
    // const eliminarDelCarrito = (productoId) => {
    //     // Mostrar un diálogo de confirmación
    //     const confirmarEliminacion = window.confirm("¿Estás seguro de que deseas eliminar este producto del carrito?");

    //     // Si el usuario confirma, se procede a eliminar el producto
    //     if (confirmarEliminacion) {
    //         setCarrito(carrito.filter(producto => producto.producto_id !== productoId));
    //     }
    // };

    
    const eliminarDelCarrito = (productoId) => {
        Swal.fire({
            title: 'Estás seguro?',
            text: 'Este producto será eliminado del carrito.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                // Eliminar el producto si el usuario confirma
                setCarrito(carrito.filter(producto => producto.producto_id !== productoId));
                Swal.fire(
                    'Producto eliminado',
                    'El producto ha sido eliminado del carrito.',
                    'success'
                );
            }
        });
    };



    // Función para actualizar la cantidad de un producto en el carrito
    const actualizarCantidad = (producto_id, cantidad) => {
        setCarrito(carrito.map(item =>
            item.producto_id === producto_id
                ? { ...item, cantidad: parseInt(cantidad, 10) }
                : item
        ));
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito, actualizarCantidad }}>
            {children}
        </CarritoContext.Provider>
    );
};


