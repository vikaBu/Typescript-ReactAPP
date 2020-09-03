import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import './addBook.scss'

export function AddBookPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [cover_image_url, setCoverImage] = useState("");
    const [publishedDate, setPublishedDate] = useState("");
    const [publisher, setPublisher] = useState("")

    const data = {title: title, author: author, cover_image_url: cover_image_url, publishedDate:publishedDate, publisher: publisher}

    const submitForm = (event: FormEvent) => {
        event.preventDefault()
        fetch ("http://localhost:3001/books/new", {
            method: "post",
            body: JSON.stringify(data),
            headers: {"Content-Type":"application/json"}
        })

    }

    return (<div>
      <h2>Add Book</h2>
      
      <form onSubmit={submitForm}>
      <label htmlFor = "title">Title</label>
      <input type="text" id="title"  value={title} onChange ={event=>setTitle(event.target.value)}/>

      <label htmlFor="authorName">Author Name</label>
      <input type="text" id="authorName" name="authorName" value={author} onChange ={event=>setAuthor(event.target.value)}/>

      <label htmlFor="coverImage">Cover Image URL</label>
      <input type="image" id="coverImage" name="coverImage" value={cover_image_url} onChange ={event=>setCoverImage(event.target.value)}/>

      <label htmlFor="publishedDate">Published date</label>
      <input type="text" id="publishedDate" name="publishedDate" value={publishedDate} onChange ={event=>setPublishedDate(event.target.value)}/>

      <label htmlFor="publisher">Publisher </label>
      <input type="text" id="publisher" name="publisher" value={publishedDate} onChange ={event=>setPublisher(event.target.value)}/>

      <button type="submit" value="Add">
          Add
      </button>
    </form>
    </div>
      )
    ;
  }