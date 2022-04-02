// eslint-disable-next-line
import React from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom';
import Main from './components/main';
import './App.css';

function App() {
  return (
    <div className="demo-big-content">
        <Layout>
            <Header className='header-color' title="MyPortFolio" scroll>
                <Navigation>
                    <Link to="/">Accueil</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">Qui suis-je ?</Link>
                    <Link to="/projects">Projets</Link>
                    <Link to="/contact">Contact</Link>
                </Navigation>
            </Header>
            <Drawer title="MyPortFolio">
            <Navigation>
                    <Link to="/">Accueil</Link>
                    <Link to="/resume">Resume</Link>
                    <Link to="/aboutme">QUi suis-je ?</Link>
                    <Link to="/projects">Projets</Link>
                    <Link to="/contact">Me Contacter</Link>
                </Navigation>
            </Drawer>
            <Content>
                <div className="page-content" />
                <Main />
            </Content>
        </Layout>
    </div>
  );
}

export default App;
