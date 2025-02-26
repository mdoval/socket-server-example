import { createServer } from "http";
import { Server } from "socket.io";

let httpServer: Server | any = null;
let isRunning: boolean = false;

/**
 * Obtiene la instancia única del servidor HTTP.
 * @returns {Server} Servidor HTTP.
 */
export function getServer(): Server {
  if (!httpServer) {
    httpServer = createServer();
  }

  const io = new Server(httpServer, {
    cors: {
      origin: "*",
    },
  });
  return io;
}

/**
 * Inicia el servidor en el puerto especificado.
 * @param {number} port - Puerto en el que se iniciará el servidor (por defecto 3001).
 */
export function startServer(port: number = 3001): void {
  console.log(`Estado de isRunning desde startServer ${isRunning}`);

  if (!isRunning) {
    httpServer = getServer();

    const io = new Server(httpServer, {/*opciones */});
    io.on("connection", (socket) => {
      console.log("Cliente conectado:", socket.id);


    });

    httpServer.listen(port, () => {
      console.log(`Servidor iniciado en el puerto (startServer) ${port}`);
      isRunning = true;
    });
  } else {
    console.log(`El Servidor YA SE ESTA EJECUTANDO en el puerto ${port}`);
  }
}

/**
 * Detiene el servidor si está en ejecución.
 */
export function stopServer(): void {
  console.log(`Estado de isRunning desde stopServer ${isRunning}`);
  if (!isRunning || !httpServer) {
    console.log("El servidor ya está detenido.");
    return;
  }

  httpServer.close(() => {
    console.log("Servidor detenido. (stopServer)");
    isRunning = false;
    httpServer = null;
  });
}

/**
 * Devuelve el estado del servidor.
 * @returns {string} "Corriendo" si el servidor está activo, "Detenido" en caso contrario.
 */
export function getServerStatus(): string {
  //console.log(`Estado de isRunning desde getServerStatus ${isRunning}`);
  return isRunning ? "Corriendo" : "Detenido";
}
