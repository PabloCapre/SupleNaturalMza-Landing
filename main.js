// Esperamos a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {
    
    // Configura acá tu número (Código de país + código de área sin el 15 + número)
    const numeroWhatsApp = "549XXXXXXXXXX"; // Reemplazá las X

    // Seleccionamos todos los botones de compra
    const botonesComprar = document.querySelectorAll('.btn-comprar');

    botonesComprar.forEach(boton => {
        boton.addEventListener('click', (e) => {
            // Leemos qué producto le interesó al cliente
            const productoInteres = e.target.getAttribute('data-producto');
            
            // Armamos el mensaje
            let mensaje = `¡Hola! Vengo de la web y me interesa consultar por: ${productoInteres.replace('-', ' ')}. ¿Me pasás info?`;
            
            // Codificamos el mensaje para la URL
            const mensajeCodificado = encodeURIComponent(mensaje);
            
            // Abrimos WhatsApp en una pestaña nueva
            window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`, '_blank');
        });
    });
});