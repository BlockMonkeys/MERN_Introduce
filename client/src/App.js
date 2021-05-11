import React from 'react'
import {
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from 'react-router';
import styled from "styled-components";
import Landing from "./components/LandingPage/Landing"
import Introduce from "./components/IntroducePage/Introduce";
import Header from "./components/Header_Footer/Header";
import Footer from "./components/Header_Footer/Footer";
import Projects from "./components/ProjectsPage/Projects";
import Contact from "./components/ContactPage/Contact";
import './App.css';

class App extends React.Component{
    render(){
    return (
      <div>
        <HeaderComponent>
          <Header />
        </HeaderComponent>

        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/introduce" component={Introduce} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <FooterComponent>
          <Footer />
        </FooterComponent>
      </div>
    )
  }
}
export default withRouter(App);

const HeaderComponent = styled.div`
  height: 60px;
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: space-between;
`;


const FooterComponent = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    text-align: center;
    background-color: gray;
    opacity: 0.2;
    z-index: 10;
`;

