import './App.css'
import {useEffect, useState} from "react";
import axios from "axios";

export default function App() {
    const [hello, setHello] = useState("");

    useEffect(() => {
        axios.get("api/hello")
            .then(response => setHello(response.data))
            .catch(error => console.log(error))
    })

    return (
        <>
            <h1>Request!</h1>
            <p>{hello}</p>
        </>
    )
}


