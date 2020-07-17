// Write your Character component here
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    height: 100vh;
    
    p {
        width: 40%;
        height: 10vh;
        color: white;
        background-color: black;
        border: 2px solid red;
    };
    
`;

export default function Character (props) {

    return (
        <Container>
            { 
                props.characterData.map((item) => (
                    <p key={item.name}>{`NAME: ${item.name} HEIGHT: ${item.height} HAIR COLOR: ${item.hair_color} EYE COLOR: ${item.eye_color}`}</p>
                    
                ))
            }
        </Container>
    )
}