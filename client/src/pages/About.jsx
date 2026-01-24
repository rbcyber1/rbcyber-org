import { useState } from "react";

export default function About() {
    const [clicker, clickerSet] = useState(0);
    return (
        <>
            <div>
                <p>This is a temporary testing page.</p>
                <button onClick={() => clickerSet(clicker + 1)}>
                    Clicked {clicker} times
                </button>
            </div>
        </>
    );
}
