import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom';
import './App.scss';
import { BooksPage } from './Book';
import { BookIdPage } from './BookManagePage';
import {AddBook} from './addBook'
import {AddMembers} from './addMemebers'
import {MemberPage} from './MembersPage'
import {MembersIdPage} from './memberIdPage'


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/members">Members</Link>
            </li>
            <li>
              <Link to="/books:/id">Book by id</Link>
            </li>
            <li>
              <Link to="/members:/id">Members by id</Link>
            </li>
            <li>
              <Link to="/add/add-book">Add Book</Link>
            </li>
            <li>
              <Link to="/member-add/add">Add Member</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/books'>
            <BooksPage />
          </Route>
          <Route exact path='/member-add/add'>
            <AddMembers />
          </Route>
          <Route path='/books/:id'>
            <BookIdPage />
          </Route>
          <Route exact path ='/add/add-book'>
            <AddBook />
          </Route>
          <Route path='/members/:id'>
            <MembersIdPage />
          </Route>
          <Route exact path='/members'>
            <MemberPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function HomePage() {
  return <div>
    <img src = "https://www.digitalprintermag.co.uk/wp-content/uploads/used-books-store-2.jpg"/>
    <h2>this is home page</h2>
    </div>;
}

export default App;
