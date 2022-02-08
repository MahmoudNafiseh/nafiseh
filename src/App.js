import './App.css';
import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
function App() {
   const creativeRef = useRef(null);
   const beginText = useRef(null);
   const gradText = useRef(null);
   const [beginTextWidth, setBeginTextWidth] = useState(0);
   const [beginTextHeight, setBeginTextHeight] = useState(0);
   const [gradTextWidth, setGradTextWidth] = useState(0);
   const [gradTextHeight, setGradTextHeight] = useState(0);
   const [burgerOpen, setBurgerOpen] = useState(false);
   useEffect(() => {
      setBeginTextWidth(beginText.current.offsetWidth);
      setBeginTextHeight(beginText.current.offsetHeight);
      setGradTextWidth(gradText.current.offsetWidth);
      setGradTextHeight(gradText.current.offsetHeight);
   }, []);
   useEffect(() => {
      beginText.current = anime
         .timeline({ loop: false })
         .add({
            targets: '.begin-text .top-text1',
            translateY: [-20, 0],
            opacity: [0, 1],
            duration: 500,
            delay: 200,
            easing: 'easeOutExpo',
         })
         .add(
            {
               targets: '.begin-text .top-text2',
               translateY: [-20, 0],
               opacity: [0, 1],
               duration: 500,
               easing: 'easeOutExpo',
            },
            350
         )
         .add(
            {
               targets: '.begin-text .top-text3',
               translateY: [-20, 0],
               opacity: [0, 1],
               duration: 500,
               easing: 'easeOutExpo',
            },
            500
         )
         .add(
            {
               targets: '.hero h1 .creative-text.text1',
               translateY: [-20, 0],
               opacity: 1,
               duration: 500,
               easing: 'easeOutExpo',
            },
            650
         )
         .add(
            {
               targets: '.hero h1 .creative-text.text2',
               translateY: [-20, 0],
               duration: 500,
               easing: 'easeOutExpo',
            },
            650
         )
         .add(
            {
               targets: '.hero h1 .creative-text.text3',
               translateY: [-20, 0],
               duration: 500,
               easing: 'easeOutExpo',
            },
            650
         )
         .add(
            {
               targets: '.hero h1 .creative-text.text1',
               opacity: 0,
               duration: 1200,
               easing: 'easeInExpo',
            },
            2550
         );

      setTimeout(() => {
         creativeRef.current = anime
            .timeline({ loop: true })

            .add({
               targets: '.hero2 .text2',
               opacity: [0, 1],
               duration: 2000,
            })
            .add({
               targets: '.hero2 .text2',
               opacity: 0,
               duration: 1200,
               easing: 'easeInExpo',
               delay: 500,
            })
            .add({
               targets: '.hero2 .text3',
               opacity: [0, 1],
               duration: 2000,
            })
            .add({
               targets: '.hero2 .text3',
               opacity: 0,
               duration: 1200,
               easing: 'easeInExpo',
            })
            .add({
               targets: '.hero2 .text1',
               opacity: [0, 1],
               duration: 2000,
            })
            .add({
               targets: '.hero2 .text1',
               opacity: 0,
               duration: 1200,
               easing: 'easeInExpo',
            });
      }, 3700);
   }, [beginTextWidth, gradTextHeight]);
   return (
      <div className='App'>
         <div className='nav'>
            <div className='logo-container'>
               <Logo />
            </div>
            <div className='navigation-components'>
               <button className='nav-button'>Work</button>
               <button className='nav-button'>Resume</button>
               <button className='nav-button'>Contact</button>
            </div>
            <div
               className={
                  burgerOpen
                     ? 'burger-menu-container container-active'
                     : 'burger-menu-container'
               }
            >
               <span
                  onClick={() => setBurgerOpen(!burgerOpen)}
                  className='burger-click'
               >
                  <button
                     className={
                        burgerOpen ? 'burger-menu active' : 'burger-menu'
                     }
                  ></button>
               </span>
               <ul className='nav-list'>
                  <li>Work</li>
                  <li>Resume</li>
                  <li>Contact</li>
               </ul>
            </div>
         </div>
         <section className='hero'>
            <div className='header'>
               <h1 className='begin-text' ref={beginText}>
                  <span className='top-text1'>Meet</span>{' '}
                  <span className='top-text2'>your</span>{' '}
                  <span className='top-text3'>next</span>
               </h1>
               <h1 className='hero2'>
                  <div className='texts-container'>
                     <span ref={gradText} className='creative-text text1'>
                        Front-End Developer
                     </span>
                     <span className='creative-text text2'>
                        Full Stack Developer
                     </span>{' '}
                     <span className='creative-text text3'>
                        Mobile Developer
                     </span>{' '}
                  </div>
               </h1>
            </div>
         </section>
         <section className='about'>testing</section>
      </div>
   );
}

export default App;
