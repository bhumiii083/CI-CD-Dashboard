function PipelineCard({ name, status }) {
    let color = "black";
    if (status === "success") {
        color = "green";
    } else if (status === "failed") {
        color = "red";
    }
    return (
        <div>
            <h3>{name}</h3>
            <p style={{ color: color }} >
            Status : {status}</p>
        </div>
    )
}
export default PipelineCard;