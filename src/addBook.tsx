import React, { useState, FormEvent } from 'react';

interface AddBook{
    title:string;
    author: string;
    cover_image_url: string;
    published_date: number;
    isbn: string;
}
export function AddBook() {
    const [title, setTitle]=useState("");
    const[author, setAuthor]= useState("");
    const[publishDate, setPublishedDate]= useState("");
    const[coverImageUrl, setCoverImage] = useState("");
    const[isbn, setIsbn] = useState("");
    const[publisher, setPublisher]= useState("");

  const setSearch = ()=>{
    fetch(`http://localhost:3001/books/by-isbn/${isbn}`)
    .then(response => response.json())
    .then(json => {
        setTitle(json.title)
        setAuthor(json.author)
        setPublishedDate(json.publishDate)
        setPublisher(json.publisher)
        setCoverImage(json.coverImageUrl)
    })
  }
    const data = {
        title: title,
        author: author,
        publishDate: publishDate,
        publisher: publisher,
        coverImageUrl: coverImageUrl,
        isbn: isbn
    }
    const submitForm =(event: FormEvent)=>{
        event.preventDefault()
        fetch("http://localhost:3001/books/new", {
        method: "Post",
        body: JSON.stringify(data),
        headers: {"Content-Type": "application/json"}
        })
    }
    return (
    <section>
    <h2>Add Book</h2>
    <label htmlFor="isbn">Search by ISBN</label>
    <input type="text" id="isbn"  value={isbn} onChange={event=> {setIsbn(event.target.value)}}/>
    <button onClick={setSearch}>Set</button>
    <form onSubmit={submitForm} >

    <label htmlFor="title">Title</label>
    <input type="text" id="title"  value={title} onChange={event=> {setTitle(event.target.value)}}/>

    <label htmlFor="author">Author</label>
    <input type="text" id="author"  value={author} onChange={event=> {setAuthor(event.target.value)}}/>

    <label htmlFor="coverImageUrl">Cover Image URL</label>
    <input type="text" id="coverImageUrl"  value={coverImageUrl} onChange={event=> {setCoverImage(event.target.value)}}/>

    <label htmlFor="publishDate">Published Date</label>
    <input type="text" id="publishDate"  value={publishDate} onChange={event=> {setPublishedDate(event.target.value)}}/>

    <label htmlFor="publisher">Publisher</label>
    <input type="text" id="publisher"  value={publisher} onChange={event=> {setPublisher(event.target.value)}}/>

    <label htmlFor="publisher">ISBN</label>
    <input type="text" id="isbn"  value={isbn} onChange={event=> {setIsbn(event.target.value)}}/>

    <button type="submit" value="Add">
        Add
    </button>
  </form>
    </section>
    )
  }