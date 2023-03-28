import { Post } from './Components/Post';
import { Header } from './Components/Header/Header';
import { Sidebar } from './Components/Sidebar/Sidebar';

import './styles/global.css';
import styles from './styles/App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author={'Tainã Pino'} content={'um texto qualquer'} />
          <Post
            author={'Gabriela Partezani'}
            content={'um texto qualquer da Gabi'}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
