import { useFetchAlbumsQuery } from "../store";

function AlbumsList({ user }) {
  const {data , error , isLoading} = useFetchAlbumsQuery(user)


  console.log(data , error ,isLoading)
  return <div>Albums for {user.name}</div>;
}

export default AlbumsList;
