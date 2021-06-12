import { SignInModel } from "../models/SignIn";

export interface SignInUseCase {
    sign(signInModel: SignInModel): Promise<string | Error>
}