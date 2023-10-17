import '../style/Cards.css';
import '../style/websitecard.css';

function WebsiteCards() {
    return (
        <>
            <div className="m-2">
                <a href='https://furfam-finder.vercel.app/' target='_blank'>
                <img src="../../gifs/static/f2pgames.png" class="rounded-4 static" style={{width: '25rem'}}/>
                <img src="../../gifs/f2pgames.gif" class="rounded-4 active" style={{width: '25rem'}}/>
                </a>
            </div>
            <div className="m-2">
                <a href='https://f2p-games-rose.vercel.app/' target='_blank'>
                <img src="../../gifs/static/furfam.png" class="rounded-4 static" style={{width: '25rem'}}/>
                <img src="../../gifs/furfam.gif" class="rounded-4 active" style={{width: '25rem'}}/>
                </a>
            </div>
            <div className="m-2">
                <a href='https://galeperez.github.io/aurora-studios/' target='_blank'>
                <img src="../../gifs/static/aurora.png" class="rounded-4 static" style={{width: '25rem'}}/>
                <img src="../../gifs/aurora.gif" class="rounded-4 active" style={{width: '25rem'}}/>
                </a>
            </div>
            <div className="m-2">
                <a href='https://galeperez.github.io/music-player/' target='_blank'>
                <img src="../../gifs/static/music.png" class="rounded-4 static" style={{width: '25rem'}}/>
                <img src="../../gifs/music.gif" class="rounded-4 active" style={{width: '25rem'}}/>
                </a>
            </div>

        </>
    )
}

export default WebsiteCards