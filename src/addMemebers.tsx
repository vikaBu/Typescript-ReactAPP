import React from 'react'
import {useState, FormEvent} from 'react'

interface Member{
    name: string;
    email: string;
  
}
export function AddMembers<Member>() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");



const data = {
    name: name,
    email: email,
   
}

const submitMember =(event: FormEvent)=>{
    event.preventDefault()
    fetch("http://localhost:3001/members/new", {
    method: "Post",
    body: JSON.stringify(data),
    headers: {"Content-Type": "application/json"}
    })
}

return (
<section>
<h2>Add Member</h2>

<form onSubmit={submitMember} >
<label htmlFor="name">Name</label>
<input type="text" id="name"  value={name} onChange={event=> {setName(event.target.value)}}/>


<label htmlFor="email">Email</label>
<input type="text" id="email"  value={email} onChange={event=> {setEmail(event.target.value)}}/>


<button type="submit" value="Add">add</button>

</form>

</section>
)};