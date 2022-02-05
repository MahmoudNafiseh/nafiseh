import './App.css';
import anime from 'animejs/lib/anime.es.js';
import { useState, useEffect, useRef } from 'react';
function App() {
   const creativeRef = useRef(null);
   useEffect(() => {
      creativeRef.current = anime
         .timeline({ loop: true })
         .add({
            targets: '.hero2 .text1',
            opacity: [0, 1],
            duration: 1000,
         })
         .add({
            targets: '.hero2 .text1',
            opacity: 0,
            duration: 800,
            easing: 'easeInExpo',
            delay: 500,
         })
         .add({
            targets: '.hero2 .text2',
            opacity: [0, 1],
            duration: 1000,
         })
         .add({
            targets: '.hero2 .text2',
            opacity: 0,
            duration: 800,
            easing: 'easeInExpo',
            delay: 500,
         })
         .add({
            targets: '.hero2 .text3',
            opacity: [0, 1],
            duration: 1000,
         })
         .add({
            targets: '.hero2 .text3',
            opacity: 0,
            duration: 800,
            easing: 'easeInExpo',
            delay: 2000,
         });
   }, []);
   return (
      <div className='App'>
         <section className='hero'>
            <div className='header'>
               <h1>Meet your next</h1>
               <h1 className='hero2'>
                  <div className='texts-container'>
                     <span className='creative-text text1'>
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
