import { Router } from "express";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import { AuthenticateUserController } from "../modules/accounts/UseCases/authenticateUser/AuthenticateUserController";

const authenticateRoutes = Router();

const authenticateUserControlle = new AuthenticateUserController();

authenticateRoutes.use(ensureAuthenticated);
authenticateRoutes.post("/sessions", authenticateUserControlle.handle);

export { authenticateRoutes };
