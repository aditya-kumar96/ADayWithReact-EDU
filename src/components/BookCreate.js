import { useState } from "react";

function BookCreate({onCreate}){
    //create title state
    const [title,setTitle] = useState('')

    //handle change for set the title
    const handleChange=(event)=>{
        setTitle(event.target.value)
    }

    //handle the submit the form
    const handleSubmit=(event)=>{
        event.preventDefault();
        onCreate(title)
        setTitle('')

    }
    //UI for create a book
    return <div className="book-create">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Create!</button>
        </form>
    </div>
}
export default BookCreate;