import './App.scss';

function App() {
    return (
        <div className="App">
            <div className="tile">
                <img src={require("./image-qr-code.png")} alt="QR code" className="qr-code"/>
                <div className="text-container">
                    <h1>Improve your front-end skills by building projects</h1>
                    <h2>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</h2>
                </div>
            </div>
        </div>
    );
}

export default App;
