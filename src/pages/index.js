import React from 'react';

import Input from '../components/input';
import Ad from '../components/ad';
import SideBarLeft from '../components/sideBarLeft';
import SideBarRight from '../components/sideBarRight';
import Header from '../components/header';
import Footer from '../components/footer';

import SEO from '../components/seo';

import { Container } from '../components/layout/styles';
import {GlobalStyle} from '../components/layout/globalStyles'


const IndexPage = () => {
    return(
      <>
        <SEO
          title = "Home"
          description = "Edite ou transforme seu texto do jeito que você quiser."
        />
        <GlobalStyle/>
        <Container>
            <Header/>
            <Ad/>
            <SideBarLeft/>
            <Input/>
            <SideBarRight/>
            <Footer/>
        </Container>
      </>
    )
}

export default IndexPage;