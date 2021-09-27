import { createGlobalStyle } from 'styled-components';
import RobotoMonoRegular from '../assets/fonts/RobotoMono-Regular.ttf';
import MontserratSemiBold from '../assets/fonts/Montserrat-SemiBold.ttf';
import MontserratBold from '../assets/fonts/Montserrat-Bold.ttf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Courier New', monospace;;
    src: url(${RobotoMonoRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Courier New', monospace;;
    src: url(${MontserratSemiBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Courier New', monospace;;
    src: url(${MontserratBold});
    font-style: normal;
  }
  html{
    font-family:'Courier New', monospace;;
    color: var(--gray-1);
  }
  *{
    font-family: 'Courier New', monospace;;
    
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Courier New', monospace;
  }
  .MenuContainer{
    z-index:1;
    position: relative;
  }

  .MenuItem{
    display:inline-block;
    width: 15%; 
    padding: 2rem 1rem 1rem;
    text-align : center;
    font-size: 25px;
    font-family: 'Courier New', monospace;
  }

  .MenuItem:hover{
    background: red;
    color:orange;
    transition: 10;
    font-size: 300%;
    transition-duration: 0.5s;
  }

  @media screen and (min-width: 300px) {
  div.text-on-image {
    font-size: 30px;
  }
}

@media screen and (max-width: 600px) {
   div.text-on-image {
    font-size: 60px;
  }
}

  .homePageimage{
    display: block;
    width: 100%;
  }
 
  .head-text {
    position: relative;
      color: black;
}
  .text-on-image {
  position: absolute;
  right: 30%;
  left: 10%;
  bottom: 10em;
  font-size: 30px;
}
`;

export default Typography;
