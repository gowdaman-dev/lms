import {CredentialsProvider} from "next-auth/providers/credentials";
import NextAuth from 'next-auth/next'
const authOption =  {
    providers: [
        CredentialsProvider({

            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }

                if (user) {
                    return user
                } else {
                    return null
                }
            }
        })
    ],
    session:{
        strategy:'jwt',
    },
    secret:env.process.NEXTAUTH_SECRETS,
    pages:{
        signIn:'/sign'
    }

}

const handler  = NextAuth(authOption)

export {handler as GET , handler as POST}