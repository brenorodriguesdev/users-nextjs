import { GetServerSideProps } from "next"
import { redirect } from "next/dist/next-server/server/api-utils"
import { parseCookies } from "nookies"

export default function Home() {
    return (
        <h1>Teste</h1>
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