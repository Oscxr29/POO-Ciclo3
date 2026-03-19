// Ejercicio 6 Sistema de Notificaciones
// Crear una clase abstracta Notificación con el método enviar(). El sistema debe permitir
// enviar notificaciones por Email, SMS o WhatsApp. Cada clase implementará su forma de
// envío.

abstract class Notificacion {
    protected mensaje: string;

    constructor(mensaje: string) {
        this.mensaje = mensaje;
    }

    abstract enviar(): void;
}

class NotificacionEmail extends Notificacion {
    enviar(): void {
        console.log(`Enviando Email: ${this.mensaje}`);

    }
}

class NotificacionSMS extends Notificacion {
    enviar(): void {
        console.log(`Enviando SMS: ${this.mensaje}`);
    }
}

class NotificacionWhatsApp extends Notificacion {
    enviar(): void {
        console.log(`Enviando WhatsApp: ${this.mensaje}`);
    }
}

function crearNotificacion(tipo: string, mensaje: string): Notificacion {
    switch (tipo.toLowerCase()) {
        case "email": return new NotificacionEmail(mensaje);
        case "sms": return new NotificacionSMS(mensaje);
        case "whatsapp": return new NotificacionWhatsApp(mensaje);
        default: throw new Error("Tipo de notificación no válido. Usa 'email', 'sms' o 'whatsapp'."); // mensaje de error para tipo no válido
    }
}

const MensajePrueba = "¡Tienes una nueva notificación!"; // mensaje de prueba para enviar a través de los diferentes tipos de notificación
const tiposNotificacion = ["email", "sms", "whatsapp"]; // prueba con los tres tipos de notificación

for (const tipo of tiposNotificacion) {
    const notificacion = crearNotificacion(tipo, MensajePrueba);
    notificacion.enviar();
}
