import React, { useState, useEffect, ChangeEvent,  } from "react";
import './Book.scss';


interface Book {
    title: string;
    author: string;
    id: number;
}
export function BooksPage() {
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState("")
    const [mode, setMode] = useState("Loading")

    useEffect(() => {
        setMode('Loading')
        fetch(`http://localhost:3001/books?search=${search}`)
            .then(response => response.json())
            .then(json => setBooks(json.books))
            .then (() => {setMode('Ready')} )
    }, [search]);


    if (books.length === 0) {
        return <div>Loading</div>
    }
    const updateSearch = (event : ChangeEvent<HTMLInputElement>) => {
        const newSearch = event.target.value
        setSearch(newSearch);
    }

    return (<div>
        <label>
            <input type= "text" value={search} 
            onChange = {(event) => {setSearch(event.target.value)}} />
        </label>

       {mode=== "Ready" && <SearchResults books ={books}></SearchResults>}
       {mode === "Loading" &&  <p>Loading</p>}
    </div>);

}
interface BookProps {
    book :Book;
}

export const Book = ({book}: BookProps ) => {
    return <li> <a href ={`http://localhost:3000/books/${book.id}`}>{book.author},{book.title} </a></li>

}
interface SearchResultsProps{
    books: Book [];
};


export function SearchResults(props:SearchResultsProps) {
    const bookList = props.books.map((book) =>{
        return <Book book ={book}></Book>
    })
    if (props.books.length === 0) {
        return (
            <p>No Search Results</p>
        )
    }
    return(
        <section>
        <h2>List of Books</h2>
        <ul>
            <li>
            {bookList}
            </li>
        </ul>
        </section>
    )
}

