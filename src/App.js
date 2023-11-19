import './App.css';
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import TipAmount from "./components/TipAmount";
import Bill from "./components/Bill";
import Message from "./components/Message";

function App() {
    const percents = [0, 5, 10, 20]
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState();
    const [friendTip, setFriendTip] = useState(0);

    const handleReset = () => {
        setBill(c => 0)
        setMyTip(() => 0)
        setFriendTip(() => 0)
    }

    return (
        <div className="container text-nowrap bg-light">
            <h1>Tip calculator</h1>
            <Bill bill={bill} setBill={setBill}/>
            <TipAmount title={"My tip was"} percents={percents} tipVal={myTip} setTip={setMyTip}/>
            <TipAmount title={"My friend tips were"} percents={percents} tipVal={friendTip} setTip={setFriendTip}/>
            <Message bill={bill} myTip={myTip} friendTip={friendTip}/>
            {bill > 0 ? <Button variant="outline-dark" onClick={handleReset}>Reset</Button> : <></>}
            <div className={"mb-3"}>&nbsp;</div>
        </div>
    );
}

export default App;
