import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useParams } from "react-router-dom";
import {
  deleteReview,
  getBookById,
  getReview,
  postreview,
} from "../Core/_request";
import { UserContext } from "../../context/UserContext";
import Navbar from "../Components/Navbar";
import Pagination from "./Pagination";

export default function BookDetail() {
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const { id } = useParams();

  const getBookDetail = async () => {
    try {
      const res = await getBookById(id);
      console.log("data", res);
      setData(res);
    } catch (error) {
      console.error("Error fetching the book details", error);
    }
  };

  useEffect(() => {
    getBookDetail();
  }, []);

  const deleteComment = async (id) => {
    try {
      const res = await deleteReview(id);
      console.log("del comment:", res);
      getBookReviews();
    } catch (error) {
      console.error("Error deleting the Reviews", error);
    }
  };

  const getBookReviews = async () => {
    try {
      console.log("Fetching review for book id:", id);
      const res = await getReview(id);
      console.log("Review data:", res);
      setReviews(res);
    } catch (error) {
      console.error("Error fetching the Reviews", error);
    }
  };

  useEffect(() => {
    getBookReviews();
  }, []);

  const formik = useFormik({
    initialValues: {
      rating: 0,
      comment: "",
    },
    validationSchema: Yup.object({
      rating: Yup.number()
        .min(1, "Rating must be at least 1 star")
        .max(5, "Rating cannot be more than 5 stars")
        .required("Rating is required"),
      comment: Yup.string()
        .min(5, "Comment must be at least 5 characters long")
        .required("Comment is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      try {
        const res = await postreview(
          data._id,
          user,
          values.rating,
          values.comment
        );
        console.log("res", res);
        setReviews([...reviews, res]); // Add new review to the state
        resetForm(); // Reset form after submission
      } catch (error) {
        console.error("Error uploading reviews", error);
      }
    },
  });

  const renderStars = (rating) => {
    return (
      <div className="rating ms-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <i
            key={star}
            className={`bi ${
              rating >= star ? "bi-star-fill" : "bi-star"
            } fs-5 `}
          ></i>
        ))}
      </div>
    );
  };

  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const reviewsPerPage = 3;
  const indexOfLastReview = currentReviewPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviews.slice(indexOfFirstReview, indexOfLastReview);

  return (
    <div>
      <div>
        <Navbar
          showSearchInput={false}
          // searchTerm={searchTerm}
          // setSearchTerm={setSearchTerm}
          // sortCriteria={sortCriteria}
          // setSortCriteria={setSortCriteria}
        />
      </div>
      <div className="container my-4">
        <div className="row px-4">
          <div className="col-xl-6 card card-xl-stretch d-flex justify-content-center">
            <div className="col-10 h-3/4 d-flex justify-content-center">
              <img
                src={data.coverImageUrl}
                className="w-1/2 h-full"
                alt="Book Cover"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="card w-100 p-5 my-3 ms-4 card-xl-stretch">
              <div className="d-flex flex-column gap-7 gap-lg-10">
                <div>
                  <div className="card-header">
                    <div className="card-title">
                      <h2>{data.title}</h2>
                    </div>
                  </div>
                  <div className="card-body pt-0">
                    <div className="mb-10 fv-row mt-4">
                      <div className="text-muted fs-7">{data.author}</div>
                    </div>
                    <div>
                      <div
                        id="kt_ecommerce_add_product_description"
                        name="kt_ecommerce_add_product_description"
                        className="min-h-200px mb-2"
                      ></div>
                      <div className="text-muted fs-7">{data.description}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row p-4">
          <div className="card">
            <div className="card-body py-3">
              <div className="w-100 flex mt-4">
                <form onSubmit={formik.handleSubmit} className="w-100">
                  <div className="w-36">
                    <div className="rating ms-3">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i
                          key={star}
                          className={`bi ${
                            formik.values.rating >= star
                              ? "bi-star-fill"
                              : "bi-star"
                          } fs-5 `}
                          onClick={() => formik.setFieldValue("rating", star)}
                        ></i>
                      ))}
                    </div>
                    {formik.touched.rating && formik.errors.rating ? (
                      <div className="text-danger whitespace-nowrap">
                        {formik.errors.rating}
                      </div>
                    ) : null}
                  </div>
                  <div className="d-flex gap-3 w-100 row">
                    <div className="col-xl-9">
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Write a comment"
                        className="outline-none py-2 px-4 mt-4 w-100"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.comment}
                      ></textarea>
                      {formik.touched.comment && formik.errors.comment ? (
                        <div className="text-danger">
                          {formik.errors.comment}
                        </div>
                      ) : null}
                    </div>
                    <div className="col-xl-2 p-0 m-0">
                      <button
                        type="submit"
                        className="bg-black w-32 text-sm text-white px-2 h-12 mt-4 me-0"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div className="mt-4">
                {currentReviews.map((r, i) => (
                  <div key={i} className="mb-4 mx-2">
                    <div className="d-flex align-items-center">
                      {renderStars(r.rating)}
                      <p className="ms-8">@{r.user}</p>
                      <button
                        className="ms-8"
                        onClick={() => deleteComment(r._id)}
                      >
                        <i className="bi bi-trash"></i>
                      </button>
                    </div>
                    <p className="ms-4 mt-2 text-start">{r.comment}</p>
                  </div>
                ))}
                <Pagination
                  booksPerPage={reviewsPerPage}
                  totalBooks={reviews.length}
                  paginate={setCurrentReviewPage}
                  currentPage={currentReviewPage}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
