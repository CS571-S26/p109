import { Image, Button } from "react-bootstrap";
import { BsInstagram, BsSpotify, BsAppleMusic, BsYoutube } from 'react-icons/bs';
import frog from "../assets/frog-sticker.png"


export default function Footer() {
    return (
        <div className="text-center py-5">
            <div className="pb-3">
                <Button variant="link" href='https://www.instagram.com/badbunnypr/?hl=en' target="_blank" rel="noopener noreferrer">
                    <BsInstagram size={20} color="#f5f0e8"></BsInstagram>
                </Button>
                <Button variant="link" href='https://open.spotify.com/artist/4q3ewBCX7sLwd24euuV69X' target="_blank" rel="noopener noreferrer">
                    <BsSpotify size={20} color="#f5f0e8"></BsSpotify>
                </Button>
                <Button variant="link" href='https://music.apple.com/us/artist/bad-bunny/1126808565' target="_blank" rel="noopener noreferrer">
                    <BsAppleMusic size={20} color="#f5f0e8"></BsAppleMusic>
                </Button>
                <Button variant="link" href='https://www.youtube.com/@BadBunnyPR' target="_blank" rel="noopener noreferrer">
                    <BsYoutube size={20} color="#f5f0e8"></BsYoutube>
                </Button>
            </div>
            <Image className='mx-auto d-block' src={frog} height={100} alt="Sticker of frog posing with a coffee mug"></Image>
        </div>
        
    )
}