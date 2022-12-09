function BookShow({ book, onDelete }) {
    const handleClick = () => {
        onDelete(book.id)
    }

    return (<div>
        <div className="book-show">
            {book.title}
            <div className="actions">
                <button className="delete" onClick={handleClick} />
            </div>
        </div>
    </div>)
}

export default BookShow;