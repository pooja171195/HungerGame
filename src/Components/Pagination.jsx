import React from "react";

export const Pagination = ({ currentPage, totalPages, handlePage }) => {
  const btnArray = new Array(totalPages).fill(0).map((_, index) => index + 1);
  console.log(currentPage, totalPages);
  return (
    <>
      {btnArray.map((btn) => (
        <button style={{ margin: "2px" }} onClick={() => handlePage(btn)}>
          {btn}
        </button>
      ))}
    </>
  );
};
