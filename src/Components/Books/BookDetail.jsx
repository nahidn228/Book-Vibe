import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  //this bookId is string so we have to convert this into number
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);
  console.log(book);

  const {
    bookId: currentBookId,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };
  const handleWishlist = (id) => {
    addToStoredReadList(id);
  };

  return (
    <div className="hero  min-h-screen my-10">
      <div className="hero-content flex-col lg:flex-row gap-8">
        <div className="h-[700px] p-20 bg-base-200">
          <img className="h-[560px]" src={image} />
        </div>
        <div className="lg:w-3/4 space-y-4">
          <h1 className="text-3xl font-bold"> {bookName} </h1>
          <p className="font-semibold">By : {author}</p>
          <div className="divider"></div>
          <p className="">{category ? category : "No Category selected"}</p>
          <div className="divider"></div>
          <p className="">
            <span className="font-bold">Review: </span>
            {review}
          </p>
          <div className="flex gap-2 ">
            <p className="font-bold">Tag:</p>
            {tags.map((tag, idx) => (
              <p className="text-green-500 font-semibold" key={idx}>
                #{tag}
              </p>
            ))}
          </div>
          <div className="divider"></div>
          <div className="text-gray-500">
            <div className="overflow-x-auto">
              <table className="table">
                <tbody>
                  {/* row 2 */}
                  <tr className="hover">
                    <th>Number of Pages:</th>
                    <td>
                      <span className="text-black font-bold">
                        {" "}
                        {totalPages}{" "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>Publisher:</th>
                    <td>
                      <span className="text-black font-bold">
                        {" "}
                        {publisher}{" "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>Year of Publishing:</th>
                    <td>
                      <span className="text-black font-bold">
                        {" "}
                        {yearOfPublishing}{" "}
                      </span>
                    </td>
                  </tr>
                  <tr className="hover">
                    <th>Rating:</th>
                    <td>
                      <span className="text-black font-bold"> {rating} </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={() => handleMarkAsRead(bookId)}
              className="btn btn-outline btn-accent text-black"
            >
              Mark as Read
            </button>
            <button
              onClick={() => handleWishlist(bookId)}
              className="btn btn-accent text-white"
            >
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
