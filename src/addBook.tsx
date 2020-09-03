import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import './addBook.scss'

export function AddBookPage() {
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [coverImage, setCoverImage] = useState("");
    const [publishedDate, setPublishedDate] = useState("")

    const data = {title: title, author: author, coverImage: coverImage, publishedDate:publishedDate}

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

      <label id="authorName">Author Name</label>
      <input type="text" id="authorName" name="authorName" value={author} onChange ={event=>setAuthor(event.target.value)}/>

      <label id="coverImage">Cover Image URL</label>
      <input type="url" id="coverImage" name="coverImage" value={coverImage} onChange ={event=>setCoverImage(event.target.value)}/>

      <label id="publishedDate">Published date</label>
      <input type="text" id="publishedDate" name="publishedDate" value={publishedDate} onChange ={event=>setPublishedDate(event.target.value)}/>

      <button type="submit" value="Add">
          Add
      </button>
    </form>
    </div>
      )
    ;
  }