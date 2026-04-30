import { useState } from "react";
import { Container, Card, Table, Button, Collapse } from "react-bootstrap";
import { BsSpotify, BsAppleMusic, BsYoutube, BsClock } from "react-icons/bs";

export default function SongRow(props) {
    const [openLyrics, setOpenLyrics] = useState(null);

    const toggleLyrics = (index) => {
        setOpenLyrics(openLyrics === index ? null : index);
    }

    const parseLyrics = (lyrics) => {
        // Split lyrics on [ to create sections.
        const sections = lyrics.split(/(?=\[)/).filter(Boolean);
        return sections.map((section) => {
            const titleMatch = section.match(/^\[(.+?)\]/);
            const title = titleMatch ? titleMatch[1] : '';
            const body = section.replace(/^\[.+?\]/, '').trim();
            return { title, body };
        })
    }

    return (<>
        <tr>
            <td>
                {props.song.title} <br/>
                <span> By {props.song.artists.join(', ')}</span>
            </td>
            <td>{props.song.time}</td>
            <td><Button variant="link" onClick={() => toggleLyrics(props.song.id)}>View</Button></td>
            <td>
                <Button variant="link" href={props.song.spotifyLink} target="_blank" rel="noopener noreferrer">
                    <BsSpotify size={25} color="#1DB954"></BsSpotify>
                </Button>
                <Button variant="link" href={props.song.appleMusicLink} target="_blank" rel="noopener noreferrer">
                    <BsAppleMusic size={25} color="#ff4e6b"></BsAppleMusic>
                </Button>
                <Button variant="link" href={props.song.youtubeLink} target="_blank" rel="noopener noreferrer">
                    <BsYoutube size={25} color="#FF0000"></BsYoutube>
                </Button>
            </td>
        </tr>

        <tr>
            <td colSpan={4}>
                <Collapse in={openLyrics === props.song.id}>
                    <div className="p-3">
                        {props.song.lyrics 
                        ? (
                            <div className="lyrics-grid">
                                {parseLyrics(props.song.lyrics).map((section, i) => (
                                    <div key={i} className="lyrics-section">
                                        <p className="lyrics-title">[{section.title}]</p>
                                        <p className="lyrics-body">{section.body}</p>
                                    </div>
                                ))}
                            </div>
                        )
                        : "There are currently no lyrics to show"
                        }
                    </div>
                </Collapse>
            </td>
        </tr>
    </>    
    )
}