/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
import constants from './src/styling/constants';
import { configureAnchors } from 'react-update-url-on-scroll';
import { TransAppBarStylings } from './src/components/shell/header/Header.style';
import './src/global.css';
// ES5 way
// exports.onClientEntry = () => {
// ES6 way
export const onClientEntry = () => {  
    // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
    if (typeof window.IntersectionObserver === `undefined`) {
      import(`intersection-observer`);
      import('es7-object-polyfill');
      console.log(`# IntersectionObserver is polyfilled!`);
    }
    // Scrolling event triggers and config settings
    configureAnchors(
      { offset: constants.header.heightNum,
        onSectionEnter: (newState, oldState) => {
        if (typeof newState !== 'undefined') {
          // Modify header based on section
          let header = document.getElementsByTagName("Header");
          if (header.length === 0) 
            return; 
          if (newState['hash'] !== 'home') {
            header[0].setAttribute('style', 'transition: all 0.25s ease-in; background-color: ' + constants.colors.black + ';');
          } else {
            header[0].setAttribute('style', TransAppBarStylings);
          }

          // Underline the current section header
          let allSections = document.getElementsByClassName("section-anchor");
          for (let i = 0; i < allSections.length; i++) {
            let section = allSections[i]; 
            if (section.id === newState['hash']) {
              section.classList.add("selected");
            } else {
              section.classList.remove("selected");
            }
          }
        }
      }
    });
  }
 