import React, { useEffect } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

function Cuisines() {

  const [cuisines, setCuisines] = useState([]);
  let params = useParams();

    const getCuisines = async(name) => {
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`)
      const recipes = await data.json();
      setCuisines(recipes.results);
    };

    useEffect(() => {
      getCuisines(params.type);
      console.log(params.type);
    }, [params.type])

  return (
    <Grid>
      {cuisines.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipes/"+item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        )
      })}
    </Grid>
  )
}
  const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
  `;

  const Card = styled.div`
    img{
      width: 100%;
      border-radius: 2rem;
    }
    a{
      text-decoration: none;
    }
    h4{
      text-align: center;
      padding: 1rem;
    }

  `;

export default Cuisines