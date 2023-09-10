import '../style/Gallery.css'
import WebsiteCards from './WebsiteCards'
import model2 from '/model2.png'


function Gallery() {

    return(
        <>
            <div className='model2'>
                <img src={model2} />
            </div>
            <div className="gallery-container">
                <WebsiteCards />
            </div>
        </>
    )
}

export default Gallery