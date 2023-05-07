import React from "react";
import styled from "styled-components";

const CircleEach = styled.div`
    width: 100px;
    height: 100px;
    margin-inline: 16px;
    padding: 0;
    background-color: ${(props)=>(props.circleColor)};
    border-radius: 50%;
    display: inline-block;
    
`;

const Circle = (props) => {
    return(
        <>
        <CircleEach circleColor={props.circleColor}>
            
        </CircleEach>
        </>
    );
};

export default Circle;