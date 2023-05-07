import React from "react";
import styled from "styled-components";


const CardEach = styled.div`
    width: 200px;
    height: 230px;
    border-radius: 5%;
    background-color: white;
    display: inline-block;
    margin-inline: 30px;
    box-shadow: 5px 5px 5px 5px gray;
    
`;

const UrlEach = styled.div`
    width: 90%;
    height: 45%;
    background-image: url(${(props)=>(props.cardUrl)});
    background-size: 100%;
    border-radius: 8%;
    margin: 8px 0px 0px 10px;
`;

const CardTitle = styled.h2`
    font-size: 20px;
    margin: 12px 0px 10px 8px;
`;

const CardText  = styled.p`
    color: gray;
    margin: 0px 0px 10px 8px;
`;

const CardButton = styled.button`
    width: 90%;
    height: 12%;
    border: none;
    border-radius: 25px;
    margin-left: 8px;
    background: linear-gradient(to left, #889ddc, #6882db);
    color: white;
    font-weight: lighter;
    font-family: 'Noto Sans KR', sans-serif;
`;

const Card = (props)=>{
    return(
        <>
        <CardEach>
            {/* <img src={props.cardUrl} alt="" /> */}
            <UrlEach cardUrl={props.cardUrl}></UrlEach>
            <CardTitle>{props.cardTitle}</CardTitle>
            <CardText>{props.cardText}</CardText>
            <CardButton>Action</CardButton>
        </CardEach>
        </>
    );
};

export default Card;