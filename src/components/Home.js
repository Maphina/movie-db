import './home.css'
import React from "react";
import { useHistory} from "react-router-dom";
import { useState } from 'react';
const Home = () => {
    const history = useHistory()
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('maria');
    const [isPending] = useState(false);
    function goToMovies() 
   {
        history.push('/movies')
    }
    return ( 
    <div className="viewlist" >
      <h1>Welcome to YT movie list page</h1>
        <button  onClick={goToMovies}><h2>Go to movies list</h2></button>
        <div className="edit">
        <form> 
        <label> User Name:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Feedback:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Gender:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Female">Others</option>
        </select>
        { !isPending && <button> Post </button>}
        { isPending && <button disabled>Adding ...</button>}
      </form>
        </div>
        </div>
        
          
       
     );
    }
 
export default Home;