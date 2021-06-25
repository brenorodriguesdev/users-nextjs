import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"
import HomePage from "../presentation/pages/home"

export default function Home() {
    return (
        <HomePage />
    )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {

    const { ['users.token']: token } = parseCookies(ctx)

    if (!token) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false
            }
        }
    }

    return {
        props: {}
    }
}