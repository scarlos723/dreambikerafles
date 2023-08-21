import styled from 'styled-components'
import ResponsiveTo from '../../utils/responsiveTo'
export const SliderContainer = styled.section`
  /* position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 12; */
`
export const Article = styled.article`
  width: 100%;
  height: 400px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: inset 8px 0px 4px rgba(0, 0, 0, 0.3), inset -8px 0px 4px rgba(196, 196, 196, 0.3);
  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${ResponsiveTo('xl')}{
    height: 600px;
  }
`
export const Selector = styled.section`
  display: grid;
  gap: 20px;
  height: 50%;
  border-radius: 20px;
  position: relative;
  z-index: 2;
  background-color: #302E30;
  transform: translateY(-40px);
  box-sizing: border-box;
  padding: 20px 16px;
  box-shadow: inset 8px 0px 4px rgba(0, 0, 0, 0.3), inset -8px 0px 4px rgba(196, 196, 196, 0.3);
  
  .progress-container{
    display: grid;
    gap: 8px;
    border-radius: 20px;
    padding: 12px;
    border: 1px solid white;
  }
  .progress-bar{
    width: 100%;
    height: 20px;
    background-color:  #808080;
    border-radius: 50px;
    .progress{
      border-radius: 50px;
      width: 50%;
      height: 100%;
      border-radius: 50px;
      background: linear-gradient(-90deg, #FFD600 0%,  #000000 100%);
      box-shadow: 4px 2px 4px rgba(0, 0, 0, 0.25);
    }
  }
  ${ResponsiveTo('md')}{
    padding: 20px 40px;
  }
  ${ResponsiveTo('xl')}{
    padding: 20px 80px;
  }
`
