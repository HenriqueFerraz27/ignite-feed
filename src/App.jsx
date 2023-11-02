import "./styles/App.css";
import { Header, Profile, Post } from "./components";

function App() {
  const posts = [
    {
      author: {
        avatarUrl: "https://github.com/HenriqueFerraz27.png",
        name: "Henrique Ferraz",
        role: "Web Developer",
      },
      content: `
      Fala galeraa 👋
      
      Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
      `,
      published: new Date("2023-11-02 12:09:00"),
    },
    {
      author: {
        avatarUrl: "https://github.com/HenriqueFerraz27.png",
        name: "Luiz Ferraz",
        role: "Web Developer",
      },
      content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero
      debitis repellendus repudiandae quibusdam ex quis nobis atque eaque hic
      dolorum sit tempora, rem sed praesentium quisquam accusamus iure
      eveniet.`,
      published: new Date("2023-11-02 12:09:00"),
    },
  ];

  return (
    <>
      <Header />

      <main>
        <aside>
          <Profile />
        </aside>

        <article>
          {posts.map((post, index) => {
            return (
              <Post
                key={index}
                author={post.author}
                content={post.content}
                published={post.published}
              />
            );
          })}
        </article>
      </main>
    </>
  );
}

export default App;
