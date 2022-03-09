import React from "react";
import { SDK } from "@qcloud-apaas/web-sdk";
import { Slider } from "tea-component";

import properties from "./properties";

const CustomDesignComponent = (props) => {
  const { compId, fieldBinding } = props;
  const { value, onChange } = SDK.useModel(compId,{ fieldBinding });
  return (
    <div style={{ padding: "20px 0", maxWidth: 380 }}>
      <Slider min={0} max={100} onChange={onChange} value={value}></Slider>
    </div>
  );
};

CustomDesignComponent.properties = properties;

export default CustomDesignComponent;
