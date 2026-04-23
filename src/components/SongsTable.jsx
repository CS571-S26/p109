import { Container, Card, Table } from "react-bootstrap";
import { BsClock } from "react-icons/bs";
import SongRow from "./SongRow";

export default function SongsTable(props) {
    return <Container className="mt-5">
        <Card >
            <Table striped>
                <thead>
                    <tr >
                        <th>Title</th>
                        <th><BsClock></BsClock></th>
                        <th>Lyrics</th>
                        <th>Listen on</th>
                    </tr>
                </thead>

                <tbody>
                    {props.tracklist.map((song) => (
                        <SongRow song={song} key={song.title}/>
                    ))}
                </tbody>
            </Table>
        </Card>
    </Container>
}