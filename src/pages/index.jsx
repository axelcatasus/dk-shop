import * as React from "react"
import Header from '../components/Header'
import './main.scss'
import { main } from './index.module.scss'

const IndexPage = () => {
  return (
    <>
    <Header />
    <main className={main}>
      <h1>DK Shop</h1>
    </main>
    </>
  )
  
}

export default IndexPage

export const Head = () => <title>DK Shop</title>
