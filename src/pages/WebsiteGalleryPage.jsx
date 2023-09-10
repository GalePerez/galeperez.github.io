import WebsiteContainer from "../components/WebsiteContainer"
import AnimatedBackground from "../components/AnimatedBackground.jsx"
import Gallery from "../components/Gallery"

function WebsiteGalleryPage() {
    return (
        <>
            <WebsiteContainer>
                <Gallery />
                <AnimatedBackground />
            </WebsiteContainer>
        </>
    )
}

export default WebsiteGalleryPage