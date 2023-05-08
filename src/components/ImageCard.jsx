const ImageCard = ({ url, tittle }) => { // se reciben 2 props. url y tittle
  return (
    <div className='image-container'>
      <img src={url} alt={tittle} className='image-view' />
    </div>
  )
}
export default ImageCard
