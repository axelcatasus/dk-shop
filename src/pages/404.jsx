import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <Link to="/">Go home</Link>.
    </main>
  )
}

export default NotFoundPage

export const Head = () => <title>Not found</title>
