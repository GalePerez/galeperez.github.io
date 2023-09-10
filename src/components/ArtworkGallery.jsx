import '../style/Gallery.css'
import ArtworkCards from './ArtworkCards'
import model2 from '/model2.png'


function Gallery() {

    return(
        <>
            <div className='model2'>
                <img src={model2} />
            </div>
            <div className="gallery-container">
                <ArtworkCards />
            </div>
        </>
    )
}

export default Gallery