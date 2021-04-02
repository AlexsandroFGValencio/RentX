import { Router } from "express";

import { CreateCarsController } from "@modules/cars/useCases/createCar/CreateCarsController";

import { ensureAdmin } from "../middlewares/ensureAdmin";
import ensureAuthenticated from "../middlewares/ensureAuthenticated";

const carsRoutes = Router();

const createCarsController = new CreateCarsController();

carsRoutes.post(
  "/",
  ensureAuthenticated,
  ensureAdmin,
  createCarsController.handle
);

export { carsRoutes };
