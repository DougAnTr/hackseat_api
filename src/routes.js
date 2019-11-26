import { Router } from "express";

const routes = new Router();

routes.get("/", () => console.log("olá, pessoal!"));

export default routes;
