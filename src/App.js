import './App.css';
import {useState} from "react";
import Button from 'react-bootstrap/Button';
import TipAmount from "./components/TipAmount";
import Bill from "./components/Bill";
import Message from "./components/Message";

function App() {
    const [bill, setBill] = useState(0);
    const [myTip, setMyTip] = useState(0);

    const handleReset = () => {
      setBill(c => 0)
    }

    return (
        <div className="container text-nowrap">
            <h1>Tip calculator</h1>
            <Bill bill={bill} setBill={setBill}/>
            <TipAmount title={"My tip was"}/>
            <TipAmount title={"My friend tips were"}/>
            <Message bill={bill}/>
            {bill > 0 ? <Button variant="outline-dark" onClick={handleReset}>Reset</Button> : <></> }

        </div>
    );
}

export default App;
