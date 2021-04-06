import { Router } from "express";

import { AuthenticateUserController } from "@modules/accounts/UseCases/authenticateUser/AuthenticateUserController";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const authenticateRoutes = Router();

const authenticateUserControlle = new AuthenticateUserController();

// authenticateRoutes.use(ensureAuthenticated);
authenticateRoutes.post("/sessions", authenticateUserControlle.handle);

export { authenticateRoutes };
