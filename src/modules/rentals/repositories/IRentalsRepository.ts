import { Rental } from "../infra/entities/Rental";

interface IRentalsRepository {
    create();
    findOpenRentalByCar(car_id: string): Promise<Rental>;
    findOpenRentalByUser(user_id: string): Promise<Rental>;
}

export { IRentalsRepository };
