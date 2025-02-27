import { startHttpServer, stopHttpServer, getHttpServerStatus, desconectarSockets } from "@/actions/server-socket-action";
import { Button } from "@/components/ui/button";
import { disconectSockets } from "@/lib/server";

export default async function Home() {
  const status = await getHttpServerStatus()

  return (
    <div className="h-full w-full bg-gray-200 p-4 space-y-2">
      <div>
        <h1>Bienvenidos al Servidor de Sockets</h1>
      </div>
      <div className="w-full flex flex-col">
        <label className="w-full flex flex-row items-center">
          Estado del Servidor:
          <h1 className="text-2xl font-bold m-2">
            {status.status}
          </h1>
        </label>

        <form action={startHttpServer}>
          <Button type="submit" variant="outline" >
            Inicializar Servidor
          </Button>
        </form>
        <form action={stopHttpServer}>
          <Button type="submit" variant="outline">
            Apagar Servidor
          </Button>
        </form>
        <form action={desconectarSockets}>
          <Button type="submit" variant="outline">
            Desconectar Sockets
          </Button>
        </form>
      </div>
    </div>
  );
}
