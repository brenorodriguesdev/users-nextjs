import React from "react";
import SignInPage from "../../../presentation/pages/signin";
import { makeSignInService } from "../services/sign-in-service-factory";
import { makeSignInValidation } from "../validation/sign-in-validation-factory";

export function makeSignInPage(): JSX.Element {
    return (

        <SignInPage
            signInUseCase={makeSignInService()}
            validator={makeSignInValidation()}
        />
    )
}