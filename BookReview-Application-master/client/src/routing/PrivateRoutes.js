import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import BookListing from "../Book/Pages/BookListing";
import BookDetail from "../Book/Pages/BookDetail";

export default function PrivateRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="BookListing" />} />
        <Route path="BookListing" element={<BookListing />} />
        <Route path="book/:id" element={<BookDetail />} />
      </Routes>
    </div>
  );
}
