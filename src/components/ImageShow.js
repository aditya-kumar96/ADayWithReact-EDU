function ImageShow({image}) {
  //get the images as props 
  //and set to img to show in browser
  return <div><img src={image.urls.small
  }/></div>;
}

export default ImageShow;
