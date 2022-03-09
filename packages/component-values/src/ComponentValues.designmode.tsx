import React, { useMemo } from "react";
// import { SDK } from "@qcloud-apaas/web-sdk";
import properties from "./properties";
// import { Form } from "antd";
import { Form } from "tea-component";

const CustomRunComponent = (props) => {
  const { priceComponent, countComponent } = props;
  const totalPrice = useMemo(() => {
    const price = priceComponent?.compId ?? "";
    const count = countComponent?.compId ?? "";
    return `{${price}} * {${count}}`;
  }, [priceComponent, countComponent]);
  return <Form>
    <Form.Item label="总金额：">{totalPrice}</Form.Item>
  </Form>;
};

CustomRunComponent.properties = properties;

export default CustomRunComponent;
