import { Router } from "express";

import { CreateRentalController } from "@modules/rentals/useCases/createRental/CreateRentalController";
import { DevolutionRentalController } from "@modules/rentals/useCases/DevolutionRental/devolutionRentalController";
import { ListRentalByUserController } from "@modules/rentals/useCases/listRentalByUser/ListRentalByUserController";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const rentalsRoutes = Router();

const createRentalController = new CreateRentalController();
const devolutionRentalController = new DevolutionRentalController();
const listRentalByUserController = new ListRentalByUserController();

rentalsRoutes.post("/", ensureAuthenticated, createRentalController.handle);
rentalsRoutes.post(
    "/devolution/:id",
    ensureAuthenticated,
    devolutionRentalController.handle
);

rentalsRoutes.get(
    "/user",
    ensureAuthenticated,
    listRentalByUserController.handle
);

export { rentalsRoutes };
