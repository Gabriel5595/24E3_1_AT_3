import styles from "./home.module.css"
import React, { useState } from "react";

export default function Home() {
    const [images, setImages] = useState(5);

    const addImage = () => {
        setImages(images + 1);
    };

    const removeImage = () => {
        if (images > 0) setImages(images - 1);
    };

    return (
        <div className={styles.container}>
            <div className={styles.controls}>
                <button onClick={addImage}>+</button>
                <span>{images}</span>
                <button onClick={removeImage}>-</button>
            </div>
            <div className={styles.gallery}>
                {Array.from({ length: images }).map((_, index) => (
                    <div key={index} className={styles.image}>
                        <p>100 x 100</p>
                    </div>
                ))}
            </div>
        </div>
    );
}