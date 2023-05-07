import React from "react";
import Box from "./components/box";
import Circle from "./components/circle";
import Card from "./components/card";

import image1 from "./cardimage/1.jpg";
import image2 from "./cardimage/2.jpg";
import image3 from "./cardimage/3.png";
import image4 from "./cardimage/4.jpg";
import image5 from "./cardimage/5.jpg";

const cardData=[
  {
    imageList: image1, titleList: "강아지1", index: "포메"
  },
  {
    imageList: image2, titleList: "강아지2", index: "웰시코기"
  },
  {
    imageList: image3, titleList: "강아지3", index: "시바견"
  },
  {
    imageList: image4, titleList: "강아지4", index: "리트리버"
  },
  {
    imageList: image5, titleList: "힘들어요..", index: "어렵다"
  }
]

const Main = () => {
  const circleColorArr = [
    "pink",
    "red",
    "black",
    "gray",
    "green",
    "blue",
    "orange",
  ];

  return (
    <>
      <Box boxColor="red" boxText="text1"/>
      <Box boxColor="blue" boxText="text2"/>
      <Box boxColor="green" boxText="text3"/>
      <Box boxColor="pink" boxText="text4"/>
      <ul>
        {circleColorArr.map((eachCircle)=>(
          <Circle circleColor={eachCircle} />
        ))}
      </ul>

      <ul>
        {cardData.map((eachData)=>(
          <Card cardUrl={eachData.imageList} cardTitle={eachData.titleList} cardText={eachData.index}/>
        ))}
      </ul>
    </>
  );
};

export default Main;
