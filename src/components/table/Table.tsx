import React from "react";
import Table from "react-bootstrap/Table";

type TableData = {
  key: string;
  value: string;
};

type TableComponentProps = {
  tableData: TableData[];
};

export const TableComponent: React.FC<TableComponentProps> = ({
  tableData,
}) => {
  return (
    <Table>
      {tableData.map((data, index) => {
        return (
          <tr key={index}>
            <td>{data.key}</td>
            <td>{data.value}</td>
          </tr>
        );
      })}
    </Table>
  );
};
