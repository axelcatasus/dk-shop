import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <Link to="/">
        <h1>Go home</h1>
      </Link>
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
