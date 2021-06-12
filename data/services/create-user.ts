import { UserModel } from "../../domain/models/User";
import { CreateUserUseCase } from "../../domain/useCases/create-user";
import { HttpClient } from "../contracts/http-client";

export class CreateUserService implements CreateUserUseCase {
    constructor(private readonly httpClient: HttpClient) { }
    async create(user: UserModel): Promise<void | Error> {
        const data = await this.httpClient.post(user)

        if (data instanceof Error) {
            throw data
        }
    }
}