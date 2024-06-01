import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header'
import Hero from './components/Hero';
import Projects from './components/Projects';




function App() {
  return (
    <main className='flex flex-col justify-center items-center bg-withe w-full '  id="main-section" >
    <Header/>
    <Hero/>
     <Projects/>
     <Aboutme/>
     <Contact/>
     <Footer/>
    </main>
  );
}

export default App;