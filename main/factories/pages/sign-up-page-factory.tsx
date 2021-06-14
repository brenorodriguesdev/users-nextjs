import React from "react";
import SignUpPage from "../../../presentation/pages/signup";
import { makeCreateUserService } from "../services/create-user-service-factory";
import { makeSignInValidation } from "../validation/sign-in-validation-factory";

export function makeSignUpPage(): JSX.Element {
    return (

        <SignUpPage
            createUserUseCase={makeCreateUserService()}
            validator={makeSignInValidation()}
        />
    )
}