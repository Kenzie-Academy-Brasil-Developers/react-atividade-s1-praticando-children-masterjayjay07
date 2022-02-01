import "./App.css";
import CenteredCard from "./components/CenteredCard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CenteredCard>
          <h1>João</h1>
          <p>26 anos</p>
          <p>Brasileiro</p>
        </CenteredCard>
        <CenteredCard>
          <h1>Maria</h1>
          <p>20 anos</p>
          <p>Espanhola</p>
        </CenteredCard>
        <CenteredCard>
          <h1>Cristiano</h1>
          <p>36 anos</p>
          <p>Português</p>
        </CenteredCard>
      </header>
    </div>
  );
}

export default App;
