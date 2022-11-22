import React from 'react';
import { About} from './components/about/About';
import { Contact} from './components/contact/Contact';
import { Experiences} from './components/experiences/Experiences';
import { Footer } from './components/footer/Footer';
import {Header} from './components/header/Header';
import {Nav} from './components/nav/Nav';
import {Portfolio} from './components/portfolio/Portfolio';
import {Services} from './components/services/Services';

export default function App() {
    return(
        <>
            <Header />
            <Nav />
            <About />
            <Experiences />
            <Services />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}