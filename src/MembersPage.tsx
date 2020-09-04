import React from 'react';
import {useParams} from 'react-router-dom'
import {useState, useEffect, ChangeEvent} from 'react'

interface Member {
    name: string;
    email: string;
    id : number
}

interface MemProps {
    member : Member;
}

interface MemberProps{
    members: Member [];
}

export function MemberPage() {
    const [member, setMember] = useState([]);
    const [mode, setMode] = useState("Loading")
    const [search, setSearch] = useState("")

    useEffect(() => {
        setMode('Loading')
        fetch(`http://localhost:3001/members?search=${search}`)
            .then(response => response.json())
            .then(json => setMember(json.members))
            .then (() => {setMode('Ready')} )
    }, [search]);

    if (member.length === 0) {
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

       {mode=== "Ready" && <SearchMembers members ={member}></SearchMembers>}
       {mode === "Loading" &&  <p>Loading</p>}
    </div>);
}

export const MemberList = ({member}: MemProps ) => {
    return <li> <a href ={`http://localhost:3000/members/${member.id}`}>{member.name},{member.email} </a></li>
}

export function SearchMembers(props:MemberProps) {
    const membersList = props.members.map((member) =>{
        return <MemberList member ={member}></MemberList>
    })
    if (props.members.length === 0) {
        return (
            <p>No Search Results</p>
        )
    }
    return(
        <section>
        <h2>List of Members</h2>

        <ul>
            {membersList}
        </ul>
        </section>
    )
}
