import "./styles/App.css";
import { Header, Profile } from "./components";
import { Post } from "./components/Post";

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
