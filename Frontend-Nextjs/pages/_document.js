import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-purple-200 flex min-h-screen flex-col container mx-auto max-w-screen-desktop">
          <Main  className="flex-1"/>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument