import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListCarsUseCase } from "./ListCarsUseCase";

let listCarsUseCase: ListCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listCarsUseCase = new ListCarsUseCase(carsRepositoryInMemory);
    });
    it("Should be able to list all cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 1",
            description: "Car description",
            daily_rate: 205,
            license_plate: "AAA-9999",
            fine_amount: 100,
            brand: "Car Brand",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });
    it("Should be able to list all availabe cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car 2",
            description: "Car description",
            daily_rate: 205,
            license_plate: "AAA-7894",
            fine_amount: 100,
            brand: "Car_brand_test",
            category_id: "category_id",
        });

        const cars = await listCarsUseCase.execute({
            brand: "Car_brand_test",
        });

        expect(cars).toEqual([car]);
    });
});
