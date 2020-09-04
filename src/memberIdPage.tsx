import React from 'react'
import {useParams} from 'react-router-dom'
import {useState , useEffect} from 'react'


interface MemberItem{
    name: string;
    email: string;
} 

export function MembersIdPage() {
    const [item, setItem] = useState<MemberItem>({name: '', email: ''})
    useEffect(() => {
        fetch(`http://localhost:3001/members/${id}`)
            .then(response => response.json())
            .then(json => setItem(json.member))
    })
    let { id } = useParams();
    return <section> 
        <a href= "/members"> Members</a>
        <h2>Member ID: {id}</h2>
        <h1>Name :{item.name}</h1>
        <h3>Email:{item.email}</h3>
         </section>

};