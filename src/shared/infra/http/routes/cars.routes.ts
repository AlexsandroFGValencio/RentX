import { Router } from "express";

import { CreateCarsController } from "@modules/cars/useCases/createCar/CreateCarsController";

const carsRoutes = Router();

const createCarsController = new CreateCarsController();

carsRoutes.post("/", createCarsController.handle);

export { carsRoutes };
