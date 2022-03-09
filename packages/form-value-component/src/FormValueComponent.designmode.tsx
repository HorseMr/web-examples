import React from "react";
import { Slider } from "tea-component";
import properties from "./properties";

const CustomDesignComponent = () => {
  return (
    <div style={{ padding: "20px 0", maxWidth: 380 }}>
      <Slider min={0} max={100} defaultValue={20}></Slider>
    </div>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
