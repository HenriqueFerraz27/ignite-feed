import "./styles/App.css";
import { Header, Profile } from "./components";

function App() {
  return (
    <>
      <Header />

      <main>
        <aside>
          <Profile />
        </aside>
      </main>
    </>
  );
}

export default App;
