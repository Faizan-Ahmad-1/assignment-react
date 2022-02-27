import React from "react";
import { Button } from "react-bootstrap";
import "./NextStyle.css" 
import img1 from "../../../assets/Images/Vector.png";
import { styles } from "./NextStyle";

export default function Next() {
    return (
        <div >
            <button style={styles.nextButton}>
                <img style={styles.vector} src={img1} />
            </button>
        </div>
    )
}