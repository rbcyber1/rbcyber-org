function getHealth() {
    fetch("/api/health")
        .then((res) => res.json())
        .then((data) => {
            document.querySelector("p").innerText =
                `Status: ${data.status}, Database: ${data.db}`;
        })
        .catch((err) => {
            document.querySelector("p").innerText =
                `Error fetching health data: ${err.message}`;
        });
}

export default function Health() {
    return (
        <>
            <div>
                <h1>Health Check</h1>
                <p>{getHealth()}</p>
            </div>
        </>
    );
}
