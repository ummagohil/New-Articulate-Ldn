import React from "react"
import Background from "../images/ColourDesign.svg"
import styled from "@emotion/styled"
import Header from "../components/header"

const Container = styled.div`
  margin: 0;
  height: 100%;
  overflow: auto;
`

const IndexPage = () => (
  <Container>
    <Background />
  </Container>
)

export default IndexPage
