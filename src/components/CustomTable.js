import React from "react";
import { useTable, usePagination } from "react-table";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/solid";

const CustomTable = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    state: { pageIndex },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 100 },
    },
    usePagination
  );
  return (
    <>
      <table
        {...getTableProps()}
        className="w-full border border-primary-lighter"
      >
        <thead className="bg-primary-darkest text-white font-semibold text-xs uppercase text-left">
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className="h-10 items-center px-4"
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-primary-lighter border-r border-l border-b border-primary-lighter text-xs"
        >
          {page.map((row, i) => {
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
      <div className="pagination flex items-center justify-center space-x-2 mt-4">
        <button
          className={`${
            !canPreviousPage
              ? "bg-primary-light cursor-not-allowed"
              : "bg-primary"
          } px-3 py-2 rounded  text-xs text-white`}
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
        >
          <div className="w-4 h-4 text-center">1</div>
        </button>
        <button
          className={`${
            !canPreviousPage
              ? "bg-primary-light cursor-not-allowed"
              : "bg-primary"
          } px-3 py-2 rounded  text-xs text-white`}
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
        >
          <ChevronLeftIcon className="w-4 h-4" />
        </button>
        <div className="inline-flex px-3 py-2 rounded bg-primary-darkest text-xs text-white">
          <div className="w-4 h-4 text-center">{pageIndex + 1}</div>
        </div>
        <button
          className={`${
            !canNextPage ? "bg-primary-light cursor-not-allowed" : "bg-primary"
          } px-3 py-2 rounded  text-xs text-white`}
          onClick={() => nextPage()}
          disabled={!canNextPage}
        >
          <ChevronRightIcon className="w-4 h-4" />
        </button>
        <button
          className={`${
            !canNextPage ? "bg-primary-light cursor-not-allowed" : "bg-primary"
          } px-3 py-2 rounded  text-xs text-white`}
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
        >
          <div className="w-4 h-4 text-center">{pageCount - 1}</div>
        </button>
      </div>
    </>
  );
};

export default CustomTable;
