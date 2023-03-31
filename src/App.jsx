import { Post } from './Components/Post';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';

import './styles/global.css';
import styles from './styles/App.module.css';

//author: {avatarUrl: "", name: "", role: ""}
//publishedAt: Date
//content: string

const posts = [
  {
    id: 1,
    author: {
      name: 'Tainã Pino',
      avatarUrl: 'https://avatars.githubusercontent.com/u/63248706?v=4',
      role: 'Web Developer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 https://jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-03-28 07:02:00'),
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: 'https://github.com/diego3g.png',
      role: 'CTO na Rocketseat',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'link', content: '👉 https://jane.design/doctorcare' },
    ],
    publishedAt: new Date('2022-03-28 07:02:00'),
  },
];

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
