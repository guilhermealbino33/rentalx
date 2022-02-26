import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetUserPasswordUseCase } from "./ResetUserPasswordUseCase";

class ResetUserPasswordController {
    async handle(request: Request, response: Response): Promise<Response> {
        const resetUserPasswordUseCase = container.resolve(
            ResetUserPasswordUseCase
        );
        await resetUserPasswordUseCase.execute();
        return response.send();
    }
}

export { ResetUserPasswordController };
