import { Router } from "express";

import PostController from "./app/controllers/PostController";
import LoginController from "./app/controllers/LoginController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/", LoginController.index);

routes.use(authMiddleware);

routes.post("/post", PostController.store);
routes.get("/post", PostController.index);

export default routes;
