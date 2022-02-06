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
            targets: '.begin-text-overlay',
            width: beginTextWidth + 10,
            height:
               window.innerHeight < 1000
                  ? beginTextHeight + 10
                  : beginTextHeight + 25,
            duration: 500,
            delay: 2000,
            easing: 'easeInQuad',
            direction: 'normal',
         })
         .add({
            targets: '.begin-text-overlay',
            height: 0,
            translateY: window.innerHeight < 1000 ? 20 : 55,
            duration: 500,
            direction: 'normal',
            easing: 'easeInQuad',
         });
      beginText.current = anime.timeline({ loop: false }).add({
         targets: '.begin-text',
         opacity: [0, 1],
         duration: 100,
         delay: 2500,
         easing: 'easeInOutQuad',
      });

      creativeRef.current = anime
         .timeline({ loop: false })
         .add({
            targets: '.creative-text-overlay',
            height: gradTextHeight,
            // width: [
            //    beginTextWidth + 10,
            //    beginTextWidth + 10,
            //    gradTextWidth,
            //    gradTextWidth,
            // ],
            duration: 1000,
            delay: 3000,
            direction: 'normal',
            easing: 'easeInQuad',
         })
         .add({
            targets: '.creative-text-overlay',
            width: 0,
            height: gradTextHeight,
            duration: 500,
            easing: 'easeOutQuad',
            direction: 'normal',
         });

      creativeRef.current = anime.timeline({ loop: false }).add({
         targets: '.texts-container',
         opacity: 1,
         duration: 100,
         delay: 4000,
         easing: 'easeInOutQuad',
      });

      creativeRef.current = anime
         .timeline({ loop: true })
         .add({
            targets: '.hero2 .text1',
            opacity: 1,
            delay: 3000,
            duration: 2000,
         })
         .add({
            targets: '.hero2 .text1',
            opacity: 0,
            duration: 1200,
            easing: 'easeInExpo',
            delay: 500,
         })
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
            delay: 1000,
         });
   }, [beginTextWidth, gradTextHeight]);
   return (
      <div className='App'>
         <div className='nav'>
            <div className='logo-container'>
               <Logo />
            </div>
            <div className='navigation-components'>
               {/* <h1>
                  work <span style={{ fontSize: 16 }}>-</span> resume{' '}
                  <span style={{ fontSize: 16 }}>- </span>contact
               </h1> */}
               <button className='nav-button'>Work</button>
               <button className='nav-button'>Resume</button>
               <button className='nav-button'>Contact</button>
            </div>
            <div className='burger-menu-container'>
               <button
                  className={burgerOpen ? 'burger-menu active' : 'burger-menu'}
                  onClick={() => setBurgerOpen(!burgerOpen)}
               ></button>
            </div>
         </div>
         <section className='hero'>
            <div className='header'>
               <h1
                  className='begin-text-overlay'
                  style={{
                     height:
                        window.innerHeight < 1000
                           ? beginTextHeight + 10
                           : beginTextHeight + 25,
                     backgroundColor: 'white',
                     position: 'absolute',
                  }}
               ></h1>
               <h1
                  className='begin-text'
                  ref={beginText}
                  style={{ opacity: 0 }}
               >
                  Meet your next
               </h1>
               <h1 className='hero2'>
                  <div className='texts-container texts-container-overlay'>
                     <span
                        style={{ height: 0, width: gradTextWidth }}
                        className='creative-text-overlay text1'
                     >
                        Front-End Developer
                     </span>
                  </div>
                  <div style={{ opacity: 0 }} className='texts-container'>
                     <span ref={gradText} className='creative-text text1'>
                        Front-End Developer
                     </span>{' '}
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
