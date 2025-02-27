"use server";

import { startServer, stopServer, getServerStatus, disconectSockets } from "@/lib/server";
import { redirect } from "next/navigation";

export async function startHttpServer() {
  const port = parseInt(process.env.SERVER_PORT as string)
  startServer(port);  
  //console.log(`Servidor iniciado en el puerto (startHttpServer) ${port}`)
  redirect("/")
  //return { message: "Servidor iniciado en el puerto 4000" };
}

export async function stopHttpServer() {
  stopServer();
  //console.log("Servidor detenido")
  redirect("/")
  //return { message: "Servidor detenido" };
}

export async function getHttpServerStatus() {
  const estado = getServerStatus()
  //console.log(`Estado de getServerStatus desde getHttpServerStatus ${status}`)
  //console.log(`Estado de is Running desde getHttpServerStatus ${estado}`)
  return { status:estado };
}

export async function desconectarSockets() {
  disconectSockets()
}
