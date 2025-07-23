import { redirect } from "next/navigation"
import { auth } from "../../../auth"
import LogoutButton from "./sair"
import Lista from "./lista"

 
export default async function Admin() {
  const session = await auth()
  if (!session) return redirect('api/auth/signin')

  
 
  return (
    <div>
      <LogoutButton />

      <Lista />
    </div>
  )
}