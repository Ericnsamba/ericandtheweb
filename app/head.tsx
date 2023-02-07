"use client"
import { usePathname } from "next/navigation"

export default function Head() {
  const path = usePathname()
  return (
    <>
      <title>Eric &amp; the web</title>
      {/* <meta content="width=device-width, initial-scale=1" name="viewport" /> */}
      <link rel="icon" href="/favicon.png" />
        <meta
          name="Description"
          content={`Product designer and a Creative developer. width=device-width, initial-scale=1`}
          
        />
        <link rel="icon" href="/favicon.png" />
    </>
  )
}
