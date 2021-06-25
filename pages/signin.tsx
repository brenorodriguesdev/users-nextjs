import { GetServerSideProps } from "next";
import { parseCookies } from "nookies";
import { makeSignInPage } from "../main/factories/pages/sign-in-page-factory";

export default function SignIn() {
  return makeSignInPage()
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  const { ['users.token']: token } = parseCookies(ctx)

  if (token) {
      return {
          redirect: {
              destination: '/',
              permanent: false
          }
      }
  }

  return {
      props: {}
  }
}