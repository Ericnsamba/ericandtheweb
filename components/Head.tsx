import Head from 'next/head'
import React from 'react'

export default function Header() {
  return (
    <div>
        <Head>
        <title>Eric &amp; the web | About me</title>
        <meta
          name="description"
          content="Product designer and app developer website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}
