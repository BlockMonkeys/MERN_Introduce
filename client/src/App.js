import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { withRouter } from 'react-router';
import styled from "styled-components";
import Landing from "./components/Landing";
import Introduce from "./components/introducePage/Introduce";
import Header from "./components/header_footer/Header";
import Footer from "./components/header_footer/Footer";
import Projects from "./components/projectsPage/Projects";
import Contact from "./components/contactPage/Contact";
import './App.css';

class App extends React.Component{
    constructor(props){
      super(props);
    }
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

        <UpBtn onClick={()=> window.scrollTo({top: 0, behavior: "smooth"})}>⬆️</UpBtn>

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
    opacity: 0.3;
    z-index: 10;
`;

const UpBtn = styled.button`
    position: fixed;
    bottom: 20px;
    right: 5px;
    border: none;
    opacity: 0.3;
    width: 30px;
    height: 30px;
    &:hover{
        cursor: pointer;
        opacity: 1;
    }
    &:focus{
        outline: none;
    }
    @media (max-width: 1119px){
        margin-right: 8px;
    }
`;