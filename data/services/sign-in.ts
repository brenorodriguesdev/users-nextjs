import { SignInModel } from "../../domain/models/sign-in";
import { SignInUseCase } from "../../domain/useCases/sign-in";
import { HttpClient } from "../contracts/http-client";

export class SignInService implements SignInUseCase {
    constructor(private readonly httpClient: HttpClient) { }
    async sign(signInModel: SignInModel): Promise<string | Error> {
        const data = await this.httpClient.post(signInModel)

        if (data instanceof Error) {
            throw data 
        }

        return data
    }
}