import { redirect } from "next/navigation"
import { auth } from "../../../auth"
 
export default async function Admin() {
  const session = await auth()
  if (!session) return redirect('api/auth/signin')
 
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}