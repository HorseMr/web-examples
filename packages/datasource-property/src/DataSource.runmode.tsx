import React, { useEffect, useState, useMemo } from "react";
import { SDK, DynamicDataSource } from "@qcloud-apaas/web-sdk";
import DataTable from "./DataTable";

type ExampleProps = {
  title: string;
  dataSource: DynamicDataSource;
};

const CustomRunComponent = (props: ExampleProps) => {
  const { dataSource, title } = props;
  const [tableRecords, setTableRecords] = useState([]);
  const [count, setCount] = useState(0);
  const columns: any[] = useMemo(
    () =>
      dataSource.fields.map((field) => ({
        key: field?.code,
        name: field?.name,
      })),
    [dataSource]
  );
  useEffect(() => {
    const { type, variableType } = dataSource;
    SDK.fetchByDataSource(dataSource)
      .then((res) => {
        console.log(res);
        if (type === "database") {
          // 以数据库作为数据源
          const { databaseResponse = {} } = res;
          const { records, total } = databaseResponse;
          setTableRecords(records.map((record) => record.fieldValueMap));
          setCount(total);
        } else if (type === "flow" && variableType === "objectList") {
          // 以流程作为数据源，并且选择的流程结束节点类型 为 对象列表类型
          const { flowResponses = [] } = res;
          const response = flowResponses.find(
            (item) => item.variableType === variableType
          );
          if (response && response.records) {
            const { records, total } = res;
            setTableRecords(records.map((record) => record.fieldValueMap));
            setCount(total);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [dataSource]);
  return (
    <>
      <h3>{title}</h3>
      <p>总计： {count}</p>
      <DataTable columns={columns} records={tableRecords}></DataTable>
    </>
  );
};

export default CustomRunComponent;