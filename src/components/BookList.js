import BookShow from "./BookShow"

function BookList({ books }) {
    const renderedBooks =
        books.map((book) => {
            return <BookShow key={book.id} book={book} />
        });

    return <div>{renderedBooks}</div>
}

export default BookList;