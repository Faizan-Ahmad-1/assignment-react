import React from "react";
import { Button } from "react-bootstrap"; 
import img1 from "../../../assets/Images/Vector.png";
import { styles } from "./BackStyle";

export default function Back() {
    return (
        <div >
            <button style={styles.nextButton}>
                <img style={styles.vector} src={img1} />
            </button>
        </div>
    )
}