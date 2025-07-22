"use client"

import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"

export default function LogoutButton() {
  return <Button className="bg-red-400 absolute top-4 right-4" onClick={() => signOut({ callbackUrl: "/api/auth/signin" })}>Sair</Button>
}