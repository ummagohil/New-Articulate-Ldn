import React from "react"
import Background from "../images/ColourDesign2.svg"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import * as fonts from "../fonts"
import { Helmet } from "react-helmet"

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
  @font-face {
    font-family: 'KeplerStd-BlackScnDisp, Kepler Std';
    font-style: normal;
    font-weight: normal;
    src: local('KeplerStd-BlackScnDisp, Kepler Std'), url('${fonts.KeplerStdBlack}') format('opentype');
  }
  @font-face {
      font-family: "Poppins-Light, Poppins";
      font-style: normal;
      font-weight: normal;
      src: local("Poppins-Light, Poppins"), url('${fonts.PoppinsLight}') format('truetype');
  }
`

const IndexPage = () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Articulate London</title>
    </Helmet>
    <Layout>
      <Container>
        <StyledBackground />
      </Container>
    </Layout>
  </>
)

export default IndexPage
