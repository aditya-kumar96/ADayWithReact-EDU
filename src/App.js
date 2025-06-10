import searchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images,setImages] = useState([])
  const handleSubmit=async (search)=>{
    
    const result = await searchImages(search);
    setImages(result)
    
  }

  return( <div>
    <SearchBar
    onSubmit={handleSubmit}
    />
    {/* added ImageList Component to show the images  */}
    <ImageList images={images}/>
  </div>)
}

export default App;
