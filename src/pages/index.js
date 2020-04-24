import React from "react"
import Background from "../images/ColourDesign.svg"
import styled from "@emotion/styled"
import Layout from "../components/layout"

const Container = styled.div`
  margin: 0;
  padding: 0;
  overflow: hidden;
  backround: #d3f4e1;
`

const StyledBackground = styled(Background)`
  max-width: 100%;
  position: fixed;
`

const IndexPage = () => (
  <Layout>
    <Container>
      <StyledBackground />
    </Container>
  </Layout>
)

export default IndexPage
