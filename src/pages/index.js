import React from "react"
import GlobalStyles from "../styles/GlobalStyles"
import { ThemeProvider } from "styled-components"
import theme from "../styles/Theme.json"
import { Navbar } from "../components/index"

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar />
    </ThemeProvider>
  )
}
