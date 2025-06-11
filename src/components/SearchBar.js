import './SearchBar.css'
import { useState } from "react";

function SearchBar({onSubmit}) {
  //create state for getting value from input
  const [search,setSearch] = useState('')
  //child to parent using callback function
  const handleClick=(event)=>{
    event.preventDefault()
    onSubmit(search)
    
    
  }
//change the state
  const handleChanges=(event)=>{
    // add replace() to prevent the lowercase
    setSearch(event.target.value)
  }
  
  //UI for input for the search Bar
  //update the input and add the value so whatever the user input value it will update simontenously
  return (<div className='search_bar'>
    <form onSubmit={handleClick}>
      {/* added label and css for better UI/UX experience */}
      <label>Search Here for images</label>
    <input value={search} placeholder="Search for Images" onChange={handleChanges} />
    
    {/* <button >Search</button> */}
    </form>
    </div>)
}

export default SearchBar;
