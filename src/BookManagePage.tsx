import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from "react";

interface BookItem {
    title: string;
    author: string;
    cover_image_url: string;
    id: number;
    published_date: number;
    isbn: number;   
}

export function BookIdPage() {
    const [item, setItem] = useState<BookItem>({title : '', author: '', cover_image_url:'', id: 1, isbn: 1, published_date: 0})
    useEffect(() => {
        fetch(`http://localhost:3001/books/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.book))
    })
    let { id } = useParams();
    return <section> 
        <a href= "/add/add-book"> Add Book</a>
        <h2>Books id: {id}</h2>
        <h1>Title :{item.title}</h1>
        <h3>Author :{item.author}</h3>
        <h3><img src={item.cover_image_url} alt="Book cover"/></h3>
        <h3>ISBN :{item.isbn}</h3>
        <h3>Published :{item.published_date}</h3>
         </section>

};
