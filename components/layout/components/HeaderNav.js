import styled from "styled-components"
import { useRouter } from "next/router"
import Link  from "next/link";

const HeaderNav = () => {   
   const Router = useRouter();

  return (

    <HeaderNavWrapper>
    <Link href='/'><HeaderNavLinks active={Router.pathname == '/' ? true : false}>
        Campaign
    </HeaderNavLinks></Link>
    <Link href = '/createcampaign'><HeaderNavLinks active={Router.pathname == '/createcampaign' ? true : false}>
        Create Campaign
    </HeaderNavLinks ></Link>
    <Link href='/dashboard'><HeaderNavLinks active={Router.pathname == '/dashboard' ? true : false}>
        Dashboard
    </HeaderNavLinks></Link>
    </HeaderNavWrapper>
  )
}

const HeaderNavWrapper = styled.div`
display: flex;
height: 50%;
justify-content: space-between;
align-items: center;
`

const HeaderNavLinks = styled.div`
  color: ${(props) => (props.active ? 'blue' : 'black')};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.active ? 'white' : "white" };
  height: 100%;
  font-family: 'Poppins';
  margin: 5px;
  border-radius: 10px;
  padding: 8px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 400;
`

export default HeaderNav
