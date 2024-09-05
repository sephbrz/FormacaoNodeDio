import fastify, { FastifyRequest } from "fastify";
import cors from "@fastify/cors";

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "Ferrari", base: "Maranello, Italy" }
  ];


const drivers = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" }
  ];

const server = fastify({logger: true});

server.register(cors, {origin: "*"});

server.get("/api/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
  });


type MyRequest = FastifyRequest<{
    Querystring: { id:string }
  }>

server.get("/api/drivers", async (request:MyRequest, response) => {
    const id = parseInt(request.query.id);

    if (id) {
            const driver = drivers.find((d) => d.id === id);

            if (!driver) {
            response.type("application/json").code(404);
            return { message: "Driver Not Found" };
            } else {
            response.type("application/json").code(200);
            return { driver };
            }
    } else {
        response.type("application/json").code(200);
        return { drivers };
    }

  });

  server.listen({ port: 3333 }, () => {
    console.log("Servidor inicializado");
  });