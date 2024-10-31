import { Link } from "react-router-dom";
const Book = ({ book }) => {
  const {
    bookId,
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
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 shadow-xl p-6">
        <figure className="bg-gray-200 py-8 rounded-2xl">
          <img src={image} className="h-[166px]" alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex justify-center gap-4">
            {tags.map((tag, idx) => (
              <button key={idx} className="btn btn-xs text-green-500"> {tag} </button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>By : {author}</p>
          <div class="border-t-2 border-dashed"></div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline"> {category} </div>
            <div className="rating flex items-center justify-center gap-2 ">
              {rating}
              <input
                type="radio"
                name="rating-1"
                className="mask mask-star-2 bg-orange-400 text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
