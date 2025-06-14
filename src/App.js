import { useState } from "react";
import BookCreate from './components/BookCreate'

function App() {
  const [books,setBooks] = useState([])
  const createBook=(title)=>{
    //Bad Code 
    console.log(title)
  }
  return (
    
      <div><BookCreate onCreate={createBook}/>
        </div>
    
  );
}

export default App;
