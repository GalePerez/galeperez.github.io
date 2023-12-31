import WebsiteContainer from "../components/WebsiteContainer"
import AnimatedBackground from "../components/AnimatedBackground.jsx"
import Gallery from "../components/WebsiteGallery"

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