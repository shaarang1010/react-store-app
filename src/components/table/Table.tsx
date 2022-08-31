import React from "react";
import Table from "react-bootstrap/Table";

export type TableData = {
  key: string;
  value: string | number;
};

type TableComponentProps = {
  tableData: TableData[] | [];
};

export const TableComponent: React.FC<TableComponentProps> = React.memo(
  ({ tableData }) => {
    return (
      <Table striped bordered hover>
        <tbody>
          {tableData.map((data, index) => {
            return (
              <tr key={index}>
                <td colSpan={4}>{`${data.key
                  .charAt(0)
                  .toUpperCase()}${data.key.slice(1)}`}</td>
                <td>{data.value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  },
);
