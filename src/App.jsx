import "./styles/App.css";
import { Header, Profile, Post } from "./components";

function App() {
  return (
    <>
      <Header />

      <main>
        <aside>
          <Profile />
        </aside>

        <article>
          <Post />
        </article>
      </main>
    </>
  );
}

export default App;
