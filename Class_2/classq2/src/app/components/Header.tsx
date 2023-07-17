import Image, { StaticImageData } from "next/image";
import React from "react";
import Image1 from "../../../public/David.jpg";

const Header = (props: { name: string; img: StaticImageData }) => {
  return (
    <div>
      <Image src={props.img} alt="no image"></Image>
      <p>{props.name}</p>
    </div>
  );
};

export default Header;
