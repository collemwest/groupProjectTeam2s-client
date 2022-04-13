import styled from "styled-components";

// const ComingUp = styled.div`
//   background-color: ${({ theme }) => theme.bgMain };
//   padding: 10px 0;

//   & p {
//     margin-left: 25px;
//     font-weigth: 200;
//     color: ${({ theme }) => theme.secondary };
//   }

//   & h2 {
//     margin-left: 25px;
//     font-weight: bolder;
//     text-transform: uppercase;
//     font-family: futura-pt;
//     color: ${({ theme }) => theme.white };
//   }

//   & a {
//     text-decoration: none;
//     cursor: pointer;
//     color: ${({ theme }) => theme.white };
//   }

//   & a:hover {
//     color: ${({ theme }) => theme.primary };
//     -webkit-transition: color 0.3s ease-out 0s;
//     -moz-transition: color 0.3s ease-out 0s;
//     -ms-transition: color 0.3s ease-out 0s;
//     -o-transition: color 0.3s ease-out 0s;
//     transition: color 0.3s ease-out 0s;
//   }

//   & img:hover {
//     opacity: 1;
//   }
// `;

const MoviesMonthImg = styled.img`
  opacity: 0.7;
  object-fit: cover;
  image-rendering: optimizeQuality;
  margin: 0 auto;
  height: 15vw;
  min-height: 120px;
  max-height: 250px;
  margin-left: 25px;
  width: 30vw;
  min-width: 250px;
  max-width: 400px;
  border-bottom: ${({ theme, mainPage = true }) =>
    mainPage ? `4px solid ${theme.secondary}` : "none"};

  @media (max-width: 576px) {
    width: 93vw;
    height: 88vw;
  }

`;


const MoviesMonthScreeningContainer = styled.div`
  display: flex;
  height: 25px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 25px;
  gap:5px;
`;

const MoviesMonthScreeningItem = styled.div`
  background-color: ${({ theme }) => theme.primary };
  color: #000;
  height: 25px;
  line-height: 25px;
  text-align: center;
  padding: 0 5px;
  font-weight: bold;
`;


export {
    // ComingUp,
    MoviesMonthImg,
    MoviesMonthScreeningContainer,
    MoviesMonthScreeningItem,
};
  