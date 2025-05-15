import searchImages from "./api";
import SearchBar from "./components/SearchBar";

function App() {
  const handleSubmit=(search)=>{
    console.log('Do a search ',search)
    searchImages(search);
  }

  return <div>
    <SearchBar
    onSubmit={handleSubmit}
    />
  </div>;
}

export default App;
