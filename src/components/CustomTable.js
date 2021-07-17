import React from "react";
import { useTable, useSortBy } from "react-table";
import { ArrowCircleDownIcon, ArrowCircleUpIcon } from "@heroicons/react/solid";

const CustomTable = ({ columns, data }) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useSortBy);
  return (
    <table
      {...getTableProps()}
      className="w-full border border-primary-lighter"
    >
      <thead className="bg-primary-darkest text-white font-semibold text-xs uppercase text-left">
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="h-12 items-center px-4"
              >
                {column.render("Header")}
                <span>
                  {column.isSorted ? (
                    column.isSortedDesc ? (
                      <ArrowCircleDownIcon className="inline-flex -mt-1 h-4 w-4 ml-2" />
                    ) : (
                      <ArrowCircleUpIcon className="inline-flex -mt-1 h-4 w-4 ml-2" />
                    )
                  ) : (
                    ""
                  )}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody
        {...getTableBodyProps()}
        className="bg-white divide-y divide-primary-lighter border-r border-l border-b border-primary-lighter text-sm"
      >
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className="align-top">
              {row.cells.map((cell) => {
                return (
                  <td {...cell.getCellProps()} className="py-2 px-4">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default CustomTable;
