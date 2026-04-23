import { useState } from "react";
import { Container, Card, Table, Button, Collapse } from "react-bootstrap";
import { BsSpotify, BsAppleMusic, BsYoutube, BsClock } from "react-icons/bs";

export default function SongRow(props) {
    // TODO: only allow one lyrics section to be open at a time
    const [openLyrics, setOpenLyrics] = useState(null);

    const toggleLyrics = (index) => {
        setOpenLyrics(openLyrics === index ? null : index)
    }

    return (<>
        {/* TODO: open link in a new tab */}
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.time}</td>
            <td><Button variant="link" onClick={() => toggleLyrics(props.song.id)}>View</Button></td>
            <td>
                <Button variant="link" href={props.song.spotifyLink}>
                    <BsSpotify size={25} color="#1DB954"></BsSpotify>
                </Button>
                <Button variant="link" href={props.song.appleMusicLink}>
                    <BsAppleMusic size={25} color="#ff4e6b"></BsAppleMusic>
                </Button>
                <Button variant="link" href={props.song.youtubeLink}>
                    <BsYoutube size={25} color="#FF0000"></BsYoutube>
                </Button>
            </td>
        </tr>

        {/* TODO: get song lyrics using Genius API */}
        <tr>
            <td>
                <Collapse in={openLyrics === props.song.id}>
                    <div>TODO: Get song lyrics from Genius API</div>
                </Collapse>
            </td>
        </tr>
    </>    
    )
}