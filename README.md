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

## Postman ->
![caps](/caps/serverstatus.png)
![caps](/caps/usuariolist.png)
![caps](/caps/usuariobyemail.png)

**Nota:** En la ultima captura se usa el parametro que se puede ver en todas las imagenes como
Parametro/Message

**Este proyecto sirve como referencia para la implementación de microservicios, con una arquitectura flexible y abierta a modificaciones según las necesidades funcionales."**

This project was created using `bun init` in bun v1.3.10. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
