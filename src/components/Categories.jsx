import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks} from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <List>
        <NavLink to={"/cuisines/Italian"}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </NavLink>
        
        <NavLink to={"/cuisines/American"}>
            <FaHamburger/>
            <h4>American</h4>
        </NavLink>
        
        <NavLink to={"/cuisines/Chinese"}>
            <GiNoodles/>
            <h4>Chinese</h4>
        </NavLink>
        
        <NavLink to={"/cuisines/Japanese"}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </NavLink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Categories