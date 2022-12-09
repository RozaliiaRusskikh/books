import axios from "axios";
import { useState } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList"
import { useEffect } from "react";

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/books');

        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, [])

    const deleteBookById = (id) => {
        const updatedBookArray = books.filter((book) => {
            return book.id !== id
        })

        setBooks(updatedBookArray);
    }
    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        const updatedBooks =
            [...books, response.data
            ]
        setBooks(updatedBooks)

    }

    const editBookById = (id, newTitle) => {

        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book
        })
        setBooks(updatedBooks);
    }

    return (<div className="app">
        <h1>Reading list</h1>
        <BookList onEdit={editBookById} books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
    </div>
    )
}

export default App;