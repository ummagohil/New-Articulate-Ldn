import React from "react"
import Background from "../images/ColourDesign.svg"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  display: flex;
`

const StyledBackground = styled(Background)`
  max-width: 100%;
  display: block;
  margin: auto;

  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  position: absolute;
  max-height: 100%;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <StyledBackground />
    </Container>
  </Layout>
)

export default IndexPage
