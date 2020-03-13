import styled from 'styled-components'

export const AppWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const ToolBarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100%;
  background-color: #6e4555;
  align-items: center;
  span {
    font-weight: bolder;
    color: #d282a6;
  }
`

const CustomButton = styled.div`
  display: inline-block;
  background-color: #d282a6;
  padding: 10px;
  margin: 10px;
  cursor: pointer;
  color: #e8b4bc;
  height: 40px;
  font-weight: bold;
  box-sizing: border-box;
  text-transform: uppercase;
  border: 2px solid transparent;
  :hover {
    border: 2px solid pink;
  }
`

export const CanvasContainer = styled.div`
  width: 1200px;
  height: 675px;
  margin: 30px 0px 0px 0px;

  background-color: #3a3238;
`
export const CustomBox = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`
export default CustomButton
