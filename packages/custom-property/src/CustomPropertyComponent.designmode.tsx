import React from "react";

import properties from "./properties";
import { Slider } from "tea-component";

const CustomRunComponent = (props) => {
  const { defaultVolume, defaultBright } = props;
  
  return (
    <div>
      <section>
        音量：<Slider
          min={0}
          max={100}
          value={defaultVolume}
          disabled={true}
        />
        亮度：<Slider
          min={0}
          max={100}
          value={defaultBright}
          disabled={true}
        />
      </section>
    </div>


  );
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
