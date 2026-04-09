import { Container, Card, Table, Button, Collapse } from "react-bootstrap";
import { BsSpotify, BsAppleMusic, BsYoutube, BsClock } from "react-icons/bs";

export default function SongsTable() {


    return <Container className="mt-5">
        <Card >
            <Table striped>
                <thead>
                    <tr className="text-center">
                        <th>Title</th>
                        <th><BsClock></BsClock></th> {/* TIODO: add a clock icon */}
                        <th>Lyrics</th>
                        <th>Listen on</th>
                    </tr>
                </thead>

                <tbody>
                    {/* TODO: dynamically add the songs using the Genius API */}
                    <tr> {/* TODO add a key for each individual row */}
                        <td>NUEVAYoL</td>
                        <td>3:03</td>
                        <td><Button variant="link">View</Button></td> {/* TODO: add a section w/ lyrics that opens below this row */}
                        <td> {/* TODO: add links  */}
                            <Button variant="link">
                                <BsSpotify size={25} color="#1DB954"></BsSpotify>
                            </Button>
                            <Button variant="link">
                                <BsAppleMusic size={25} color="#ff4e6b"></BsAppleMusic>
                            </Button>
                            <Button variant="link">
                                <BsYoutube size={25} color="#FF0000"></BsYoutube>
                            </Button>
                        </td>
                    </tr>
                    <tr> {/*TODO: hide by default. */}
                        <td>
                            <Collapse in={open}>
                                <div>TODO: Get song lyrics from Genius API</div>
                            </Collapse>
                        </td>
                    </tr>

                    <tr> {/* TODO add a key for each individual row */}
                        <td>VOY A LLeVARTE PA PR</td>
                        <td>2:36</td>
                        <td><Button variant="link">View</Button></td>
                        <td> {/* TODO: add links  */}
                            <Button variant="link">
                                <BsSpotify size={25} color="#1DB954"></BsSpotify>
                            </Button>
                            <Button variant="link">
                                <BsAppleMusic size={25} color="#ff4e6b"></BsAppleMusic>
                            </Button>
                            <Button variant="link">
                                <BsYoutube size={25} color="#FF0000"></BsYoutube>
                            </Button>
                        </td>
                    </tr>
                    <tr> {/* TODO add a key for each individual row */}
                        <td>BAILE INoLVIDABLE</td>
                        <td>6:07</td>
                        <td><Button variant="link">View</Button></td>
                        <td> {/* TODO: add links  */}
                            <Button variant="link">
                                <BsSpotify size={25} color="#1DB954"></BsSpotify>
                            </Button>
                            <Button variant="link">
                                <BsAppleMusic size={25} color="#ff4e6b"></BsAppleMusic>
                            </Button>
                            <Button variant="link">
                                <BsYoutube size={25} color="#FF0000"></BsYoutube>
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Card>
    </Container>
}