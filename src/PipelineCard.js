import { useState } from "react";

function PipelineCard({ name, status , logs }) {
    const [showLogs,setShowLogs] = useState(false)

    let color = "orange";
    if (status === "success") {
        color = "green";
    } else if (status === "failed") {
        color = "red";
    }
    return (
        <div className="pipeCard" onClick={() => setShowLogs(!showLogs)}>
            <h3>{name}</h3>
            <p style={{ color: color }} >
            Status : {status}</p>
            {showLogs && (
                <div>
                    {logs.map((log,index) => (
                        <p key = {index}>{log}</p>
                    ))}
                    </div>
            )}

        </div>
    )
}
export default PipelineCard;

// const [state, setState] = useState(initialState)
