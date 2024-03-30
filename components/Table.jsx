import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
} from "@nextui-org/react";

const CustomTable = ({ column, data, deleteQuery }) => {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {column.map((c, i) => (
          <TableColumn key={String(i)}>{c}</TableColumn>
        ))}
      </TableHeader>
      <TableBody emptyContent="No results to display.">
        {data.map((d) => (
          <TableRow key={String(d.id)}>
            <TableCell>{d.query}</TableCell>
            <TableCell>{d.result}</TableCell>
            <TableCell>
              <Button
                isIconOnly
                color="danger"
                onClick={() => {
                  deleteQuery(d.id);
                }}
              >
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CjxwYXRoIGQ9Ik0gMTAgMiBMIDkgMyBMIDMgMyBMIDMgNSBMIDQuMTA5Mzc1IDUgTCA1Ljg5MjU3ODEgMjAuMjU1ODU5IEwgNS44OTI1NzgxIDIwLjI2MzY3MiBDIDYuMDIzNjAyIDIxLjI1MDMzNSA2Ljg4MDMyMDcgMjIgNy44NzUgMjIgTCAxNi4xMjMwNDcgMjIgQyAxNy4xMTc3MjYgMjIgMTcuOTc0NDQ1IDIxLjI1MDMyMiAxOC4xMDU0NjkgMjAuMjYzNjcyIEwgMTguMTA3NDIyIDIwLjI1NTg1OSBMIDE5Ljg5MDYyNSA1IEwgMjEgNSBMIDIxIDMgTCAxNSAzIEwgMTQgMiBMIDEwIDIgeiBNIDYuMTI1IDUgTCAxNy44NzUgNSBMIDE2LjEyMzA0NyAyMCBMIDcuODc1IDIwIEwgNi4xMjUgNSB6Ij48L3BhdGg+Cjwvc3ZnPg=="
                />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTable;
