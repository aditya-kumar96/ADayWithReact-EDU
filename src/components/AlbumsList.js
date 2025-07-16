import { useAddAlbumMutation, useFetchAlbumsQuery } from "../store";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import Skeleton from "./Skeleton";

function AlbumsList({ user }) {
  const {data , error , isFetching} = useFetchAlbumsQuery(user)
  const [addAlbum , results] = useAddAlbumMutation();


  const handleAddAlum=()=>{
    addAlbum(user)
    
  }

  let content ;

    if (isFetching) {
        <Skeleton className="h-10 w-full" times={4} />
    }
    else if(error){
      content = <div>Error in Fetching Album</div>
    }
    else {
      content = data.map((album)=>{
        console.log(album)
        const header = <div>{album.title}</div>
        return <ExpandablePanel key={album.id} header={header}>
          List of the Albums
        </ExpandablePanel>
      })
    }

  
  return <div>
            <div className="m-2 flex flex-row items-center justify-between">
              <h3 className="text-lg font bold">Albums for {user.name}</h3>
            <Button loading={results.isLoading} onClick={handleAddAlum}>
              + Add 
            </Button>
            </div>
            <div>{content}</div>
          </div>;
}

export default AlbumsList;
