import React from "react";
import SignInPage from "../../../presentation/pages/signin";
import { makeSignInService } from "../services/sign-in-service-factory";

export function makeSignInPage(): JSX.Element {
    return (

        <SignInPage
            signInUseCase={makeSignInService()}
        />
    )
}