import React from "react";
import PaginationCSS from "./Pagination.module.css";
interface Props {
  postPerPage: number;
  totalPosts: number;
  paginate: any;
}

const Pagination: React.FC<Props> = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className={PaginationCSS.container}>
      <div className={PaginationCSS.pagination}>
        {pageNumbers.map((number) => (
          <button
            key={number}
            onClick={() => paginate(number)}
            className={PaginationCSS.button}
          >
            {" "}
            {number}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
