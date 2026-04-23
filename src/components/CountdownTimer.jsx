import Countdown from 'react-countdown';
import { Col, Row, Button } from 'react-bootstrap';

const renderer = ({ days, hours, minutes, seconds, completed }) => {
    const pad = (n) => String(n).padStart(2, '0');

    if (completed) {
        // Render a completed state
        return <span>The show has started!</span>;
    } 
    
    // Render a countdown
    return (
        // TODO: add styling.
        <Col>
            <Row>
                <div className="d-flex align-items-center justify-content-center gap-3 my-4">
                    <div className="text-center">
                        <div style={{fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold'}}>{pad(days)}</div>
                        <div className="text-uppercase small">Days</div>
                    </div>

                    <div className="display-1 fw-bold mb-3">:</div>

                    <div className="text-center">
                        <div style={{fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold'}}>{pad(hours)}</div>
                        <div className="text-uppercase small">Hours</div>
                    </div>

                    <div className="display-1 fw-bold mb-3">:</div>

                    <div className="text-center">
                        <div style={{fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold'}}>{pad(minutes)}</div>
                        <div className="text-uppercase small">Minutes</div>
                    </div>
                    
                    <div className="display-1 fw-bold mb-3">:</div>

                    <div className="text-center">
                        <div style={{fontSize: 'clamp(2rem, 10vw, 5rem)', fontWeight: 'bold'}}>{pad(seconds)}</div>
                        <div className="text-uppercase small">Seconds</div>
                    </div>
                </div>
            </Row>
        </Col>
    )
};

export default function CountdownTimer({targetDate}) {
    return (
        // TODO: pass the date dynamically
        <Countdown date={new Date(targetDate)} renderer={renderer}></Countdown>
    )
}