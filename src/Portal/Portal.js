

const Portal = ({ OnClose }) => {
    return (<div style={style}>
        <button onClick={OnClose} style={closeStyle}>X</button>
        <h1>React Portal</h1>
    </div>)
}

export default Portal

const style = {
    borderRadius: "5px",
    textAlign: "center",
    maxWidth: "400px",
    marginLeft: "auto",
    marginRight: "auto",
    background: "gray",
    color: "white",
    height: "200px"
}
const closeStyle = {
    width: "40px",
    height: "40px",
    borderRadius: "5px",
    background: "black",
    color: "white",
    padding: "10px",
    marginLeft: "auto",
    display: "block"
}