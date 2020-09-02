import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link, useParams} from 'react-router-dom';
import './App.scss';
import {BooksPage} from './Book'

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
            </ul>
          </nav>
      <Switch>
      <Route exact path = '/'>
          <HomePage/>
        </Route>
        <Route exact path = '/books'>
          <BooksPage/>
        </Route>
        <Route exact path ='/members'>
          <MembersPage/>
        </Route>
        <Route path ='/books/:id'>
          <BookIdPage/>
          </Route>
         <Route path ='/members/:id'>
          <MembersIdPage/>
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

function MembersPage() {
  return <h2>Members</h2>;
}

function BookIdPage() {
  let { id } = useParams();
return <h2>Books id: {id}</h2>;
}
function MembersIdPage() {
  let { id } = useParams();
return <h2>Member id:  {id}</h2>;
}
function HomePage() {
  return <h2>this is home page</h2>;
}

export default App;
