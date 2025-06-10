import ImageShow from "./ImageShow";

function ImageList({images}) {
  //create a (treats as variable) callback func to call the ImageShow component
  const renderedImages = images.map((image)=>{
  return  <ImageShow key = {image.id}image={image}/>
})
//call this variable here
  return <div>{renderedImages}</div>
}

export default ImageList;
