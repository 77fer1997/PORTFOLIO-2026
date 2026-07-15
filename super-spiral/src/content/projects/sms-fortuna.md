---
title: SMS Fortuna
slug: sms-fortuna
description: Plataforma web para enviar SMS individuales y campañas masivas desde un panel centralizado o mediante una API.
excerpt: Una solución full stack para gestionar envíos, destinatarios, saldo e integraciones SMS.
year: 2026
category: Aplicación web · SaaS
role: Diseño UI/UX · Desarrollo full stack
client: Fortuna
duration: 6 meses
featured: true
order: 1
technologies: [Angular, JavaScript, HTML, CSS, Tailwind CSS, Node.js, Express, PostgreSQL, Supabase]
services: [Diseño UI/UX, Desarrollo frontend, Desarrollo backend, Integración de API, Base de datos]
cover: ../../assets/images/landing.webp
coverAlt: Landing de SMS Fortuna con información de la plataforma web y su integración mediante API
gallery: [../../assets/images/dashboard.webp, ../../assets/images/envio-sms.webp, ../../assets/images/apikeys.webp]
galleryAlt: [Dashboard de SMS Fortuna con saldo y estadísticas de mensajes, Formulario para envíos individuales masivos y desde archivo, Vista operativa del flujo de envío de SMS Fortuna]
galleryCaptions: [Panel de control, Flujo de envío, Gestión operativa]
liveUrl: https://www.smsfortuna.com.pe/
problem: Fortuna necesitaba centralizar el envío de SMS empresariales en una plataforma propia. El proceso debía permitir campañas individuales y masivas, controlar el saldo disponible, consultar el estado de los mensajes y ofrecer una API para que otros sistemas pudieran enviar SMS sin depender de operaciones manuales.
objectives: [Centralizar la gestión de envíos SMS, Permitir campañas individuales y masivas, Integrar un proveedor externo mediante API, Controlar saldo costos y estados de entrega, Ofrecer una experiencia clara para usuarios no técnicos]
solution: Diseñé y desarrollé la solución completa, desde la landing comercial y la experiencia del panel hasta el backend, la autenticación, la base de datos y la integración con un proveedor externo de SMS. El producto permite enviar mensajes individuales, cargar múltiples destinatarios, importar archivos, revisar costos antes del envío y consultar información operativa desde el dashboard.
results: [Aplicación full stack desplegada en producción, Integración funcional con proveedor externo de SMS, Panel centralizado para campañas saldo e historial, API disponible para integraciones con otros sistemas]
---
## Un producto completo, no solo una interfaz

El proyecto incluyó el diseño de la experiencia, la construcción de la landing pública y el desarrollo integral de la plataforma. El panel organiza las tareas principales alrededor del envío: elegir destinatarios, redactar el mensaje, validar el consumo de saldo y confirmar la operación.

## Arquitectura e integración

El frontend fue desarrollado con Angular y Tailwind CSS. Node.js y Express gestionan la lógica del servidor, mientras PostgreSQL y Supabase sostienen la persistencia y los servicios de la aplicación. La comunicación con el proveedor externo se encapsuló detrás de una API propia para mantener separada la experiencia del usuario de la integración de mensajería.

## Diseño orientado a operaciones

El dashboard muestra saldo, valor disponible, mensajes enviados y tasa de aceptación. El flujo de envío admite un destinatario, múltiples números o importación desde archivo, y presenta un resumen previo con destinatarios, SMS requeridos, costo y saldo restante.
