import WebsiteContainer from "../components/WebsiteContainer"
import AnimatedBackground from "../components/AnimatedBackground.jsx"
import ArtworkGallery from "../components/ArtworkGallery.jsx"

function ArtworkPage() {
    return (
        <>
            <WebsiteContainer>
                <ArtworkGallery />
                <AnimatedBackground />
            </WebsiteContainer>
        </>
    )

}

export default ArtworkPage