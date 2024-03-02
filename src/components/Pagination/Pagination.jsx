import React from "react";
import "./Pagination.css";

const Navigation = ({ totalPage, page, setPage }) => {
  return (
    <div className="pagination">
      <button onClick={() => setPage((prev) => Math.max(prev - 1, 1))}>
        ←
      </button>
      <span>Page {page}</span>
      <button onClick={() => setPage((prev) => prev + 1)}>→</button>
    </div>
  );
};

export default Navigation;
