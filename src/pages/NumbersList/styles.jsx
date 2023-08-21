import styled, { css, keyframes } from 'styled-components'
import ResponsiveTo from '../../utils/responsiveTo'
const slideIn = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`
const animation = ({ time = '0.2s', type = 'ease-in' } = {}) => css`
  animation: ${time}s ${slideIn} ${type};
`

export const Container = styled.section`
  padding: 12px;
  box-sizing: border-box;
  display: grid;
  gap: 8px;
  width: 100%;
  height: 100vh;
  background-color: #302E30;
  top: 0;
  left: 0;
  padding-top: 120px;
  box-shadow: inset 8px 0px 4px rgba(0, 0, 0, 0.3), inset -8px 0px 4px rgba(196, 196, 196, 0.3);
  ${animation({ time: '0.5s' })}
  .item{
    display: grid;
    place-content: center;
    border:1px solid white;
    border-radius: 12px;
    padding: 12px 2px;
    box-sizing: border-box;
    svg{
      margin: 0 auto;
    }
    &:hover{
      background-color: #9d9d9d3a;
    }
    svg{
      width: 28px;
      height: 28px;
    }

  }
  .active{
    border:4px solid #FFD600;
  }
  .list, .list-selected{
    display: grid ;
    gap: 8px;
    grid-template-columns: repeat(4, 1fr);
    border: 2px solid white;
    box-sizing: border-box;
    border-radius: 12px;
    height: 210px;
    overflow-y: scroll;
  }
  .list-selected{
    background-color: white;  
    padding: 20px;
    height: 150px;
    .item{
      background-color: #FFD600;
      h4{
        color: black;
      }
    }
  }
  ${ResponsiveTo('md')}{
    .list, .list-selected{
      grid-template-columns: repeat(8, 1fr);
      padding: 8px 20px;
    }
  }
`
