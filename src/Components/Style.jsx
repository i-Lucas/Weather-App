import styled from 'styled-components';
import img from './weather.gif';

const AppContainer = styled.div`

     width: 100%;
     height: 100vh;

     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;

     .Container {

          width: 100%;
          height: 100%;

          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
         
          background-image: url(${img});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          .box {

               width: 100%;
               height: 70%;
               display: flex;
               flex-direction: column;
               justify-content: space-around;
               align-items: center;
               text-align: center;

               h1 {
                    font-family: 'Roboto', sans-serif;
                    font-weight: bold;
                    font-size: 1.5em;
                    color: #fff;
               }

               .descr {
                    
                    h1 { 
                         margin-bottom: 30px;
                    }
               }
          }
     }

     @media (min-width: 600px) { 

          .Container {

               width: 30%;
               height: 99%;
               border-radius: 20px;
          }
     }

`;

export default AppContainer;