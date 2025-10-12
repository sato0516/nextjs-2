'use client'
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function ClientComponent() {
    const router = useRouter()

    console.log('Client')
  return (
  <div>
    Client
    <Link href="/about">About</Link>
    <button onClick={() => (router.push('/about'))}>About2</button>
  </div>)
}