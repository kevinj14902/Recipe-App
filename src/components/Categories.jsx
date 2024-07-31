import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
        <StyledLink to={"/cuisines/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </StyledLink>
        
        <StyledLink to={"/cuisines/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </StyledLink>
        
        <StyledLink to={"/cuisines/Thai"}>
            <GiNoodles/>
            <h4>Thai</h4>
        </StyledLink>
        
        <StyledLink to={"/cuisines/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </StyledLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    background: linear-gradient(35deg, black, black);
    width: 6rem;
    height: 6rem;
    cursor: pointer;

    h4{
        color: white;
        font-size: 1rem;
    }
    
    svg{
        color: white;
        font: 2rem;
    }
    
    &.active{
        background: linear-gradient(to right, #90EE90, #90EE90);

        svg{
            color: black;
        }
        
        h4{
            color: black;
        }
    }
`;

export default Categories