'use client'

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { Button } from "./ui/button"

const UserLinks = () => {

  const { data: session, status} = useSession();

  return (
    <div className="flex flex-row gap-3">
        {status === 'authenticated' ? (
          <div className="flex flex-row gap-3">
            <Link href="/orders">
              <Button variant="outline" className="hidden md:block rounded-full">Order</Button>
            </Link>

            <Button
                variant="outline"
                className="cursor-pointer hidden md:block rounded-full"
                onClick={()=>signOut()}
            >
                SignOut
            </Button>
          </div>
        ) : (
          <Link href="/login">
            <Button className="hidden md:block">
              Login
            </Button>
          </Link>
        )}

        {session?.user.isAdmin ? (
          <Link href="/add">
            <Button className="hidden md:block rounded-full">Add</Button>
          </Link>
        ) : (
          ""
        )}
    </div>
  )
}

export default UserLinks