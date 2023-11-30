// Import `<Link>` component from React Router for internal hyperlinks
import { Link } from 'react-router-dom';

const BookList = ({ books, title }) => {
  return (
    <div>
      <h3>{title}</h3>
      {books &&
        books.map((book) => (
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/books/${book._id}`}
            >
              TITLE
            </Link>
        ))}
    </div>
  );
};

export default BookList;
