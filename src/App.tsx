
import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css';
import { Menu } from './components/Menu';
import { MainContent } from './components/Content';

function App() {

  return (
    <>
      <div className={styles.main}>
        <div className={styles.menu}>
          <Menu />
        </div>

        <div className={styles.content}>
          <div>
            <Header />
          </div>
          <div>
            <MainContent />
          </div>
        </div>

      </div>

    </>
  )
}

export default App;
