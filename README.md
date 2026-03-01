![Logo](/caps/grpc.webp)

# grpc-server
gRPC es un sistema de comunicación entre servicios que usa HTTP/2 y Protocol Buffers para intercambio de datos de forma ultrarrápida, eficiente y con soporte para streaming bidireccional.

**¿Como funciona?** gRPC utiliza Protocol Buffers (protobuf) como su mecanismo de serialización predeterminado, el cual funciona definiendo estructuras de datos en archivos .proto. Estos se compilan para generar código binario compacto y rápido, serializando los datos en formato binario, lo que resulta mucho más eficiente que JSON en tamaño y velocidad.

To install dependencies:

```bash
bun install
```

To run for dev:

```bash
bun run start:dev
```

## Metodos

### serviceStatus
El método serviceStatus actúa como un punto de control fundamental para la infraestructura de tu aplicación. Su propósito principal es permitir que clientes, balanceadores de carga o herramientas de monitoreo verifiquen en tiempo real si el servidor gRPC está activo y respondiendo correctamente.

### usuarioByEmail
El método usuarioByEmail se encarga de gestionar la búsqueda y recuperación de información detallada de un usuario específico dentro de tu sistema, utilizando su dirección de correo electrónico como identificador único. Al igual que el método anterior, opera bajo un patrón Unary, garantizando una respuesta directa e inmediata a la petición del cliente.

El método recibe un objeto **RequestUsuarioByEmail** que contiene el correo electrónico a buscar. Primero, verifica que el campo **email** no esté vacío. Si el parámetro falta, el servidor responde inmediatamente con un error indicando la falta de información. Si el correo es válido, el servidor procede a buscar en su fuente de datos (en este caso, simulado por UsuairoListaData).

### usuariolist
El método usuariolist tiene como función principal proporcionar una visión general completa de todos los usuarios registrados en el sistema. Este método actúa como un punto final de lectura masiva, devolviendo la lista completa de usuarios disponibles sin requerir ningún parámetro de filtrado por parte del cliente.

### usuarioListStream
El método usuarioListStream está diseñado para gestionar la recuperación de grandes volúmenes de datos de usuarios de manera eficiente y escalable. A diferencia de los métodos unary anteriores, este método implementa un patrón Server Streaming RPC. Esto significa que el cliente envía una única solicitud inicial, y el servidor responde enviando un flujo continuo de mensajes (en este caso, uno por cada usuario) en lugar de una sola respuesta final.

### usuarioStream
El método usuarioStream implementa el patrón Bidirectional Streaming RPC. Esta es la forma más avanzada de comunicación gRPC, donde tanto el cliente como el servidor envían un flujo de mensajes de forma independiente y simultánea a través de un único canal activo.

## Postman ->

### serviceStatus
![caps](/caps/serverstatus.png)

### usuariolist
![caps](/caps/usuariolist.png)

### usuarioByEmail
![caps](/caps/usuariobyemail.png)

### usuarioListStream
![caps](/caps/usuarioListStream.png)

### usuarioStream
![caps](/caps/usuarioDuplex.png)

**Nota:** En la ultima captura se usa el parametro que se puede ver en todas las imagenes como
Parametro/Message

**Este proyecto sirve como referencia para la implementación de microservicios, con una arquitectura flexible y abierta a modificaciones según las necesidades funcionales."**

This project was created using `bun init` in bun v1.3.10. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
