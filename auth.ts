import { FindAdmin } from "@/util/login/credencial"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
 
export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        email: {
          type: "email",
          label: "Email",
        },
        password: { 
          type: "password",
          label: "Senha",
        },
      },
      authorize: async (credentials) => {
          
       const login =  await FindAdmin(credentials.email as string, credentials.password as string)
        
       if(login){
         return login
       }else{
        return null
       }
      },
      
      
    }),
  ],
  
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Sempre redireciona para /admin após login
      return "/admin"
    }
  },
})