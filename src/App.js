import "./App.css";
import LoginPage from "./components/LoginPage.jsx";
import bgImage from "./assets/img1.jpg";
function App() {
  return (
    <div
      className="home-body"
      style={{
        backgroundColor: "#002244",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
      }}
    >
      <LoginPage></LoginPage>
    </div>
  );
}

export default App;
