import { useState } from "react";

function SearchBar({onSubmit}) {
  const [search,setSearch] = useState('')
  const handleClick=(event)=>{
    event.preventDefault()
    onSubmit(search)
    console.log('new search is',search)
    
  }

  const handleChanges=(event)=>{
    setSearch(event.target.value)
  }
  
  
  return <div>
    <form onSubmit={handleClick}>
    <input type="text" placeholder="Search for Images" onChange={handleChanges} />
    <button >Search</button>
    </form>
    </div>;
}

export default SearchBar;
