import styled from "styled-components"
import Brightness7Icon from '@mui/icons-material/Brightness7';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { App } from "../Layout";
import { useContext } from "react";
import Wallet from "./Wallet";


const HeaderRight = () => {
   const ThemeToggler = useContext(App);
  return (
    <HeaderRightWrapper>
      <Wallet />
    <ThemeToggle>    
    {ThemeToggler.theme === 'light' ? (<DarkModeIcon onClick={ThemeToggler.changeTheme}/>) :
      (<Brightness7Icon onClick={ThemeToggler.changeTheme}/>)}
       
    </ThemeToggle>   
    </HeaderRightWrapper>
  )
}

const HeaderRightWrapper = styled.div`
margin-right: 15px;
display: flex;
justify-content: space-between;
align-items: center;height: 30%;
`

const ThemeToggle = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${(props)=> props.theme.bgDiv};
padding: 2px 5px 2px 10px ; 
width: 30px;
height: 100%;
cursor: pointer;
border-radius: 15px;
`
export default HeaderRight
