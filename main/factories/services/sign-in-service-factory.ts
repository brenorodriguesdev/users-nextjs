
import { SignInService } from "../../../data/services/sign-in";
import { Axios } from "../../../infra/axios";

export const makeSignInService = (): SignInService => {
    const axios = new Axios('signIn')
    return new SignInService(axios)
}