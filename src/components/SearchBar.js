import { useState } from "react";

function SearchBar({onSubmit}) {
  //create state for getting value from input
  const [search,setSearch] = useState('')
  //child to parent using callback function
  const handleClick=(event)=>{
    event.preventDefault()
    onSubmit(search)
    console.log('new search is',search)
    
  }
//change the state
  const handleChanges=(event)=>{
    setSearch(event.target.value)
  }
  
  //UI for input for the search Bar
  return <div>
    <form onSubmit={handleClick}>
    <input type="text" placeholder="Search for Images" onChange={handleChanges} />
    <button >Search</button>
    </form>
    </div>;
}

export default SearchBar;
