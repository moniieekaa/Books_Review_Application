import React from "react";

export default function Pagination({
  booksPerPage,
  totalBooks,
  paginate,
  currentPage,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBooks / booksPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-6 mb-6">
      <ul className="pagination justify-content-center ">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`page-item ${number === currentPage ? "active" : ""}`}
          >
            <button
              onClick={() => paginate(number)}
              className="page-link"
              style={{ cursor: "pointer" }}
            >
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
