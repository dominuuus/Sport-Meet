import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Posts'

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/dominuuus.png',
      name: 'Domingos Santiago',
      role: '@dominuuus',
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!'},
      { type: 'paragraph', content: 'Hoje a pedalada foi maravilhosa. Vem fazer parte do grupo'},
      { type: 'paragraph', content: 'Todo sábado às 9h da manhã'},
    ],
    publishedAt: new Date('2025-01-01 18:44:33'),
  },

  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/LinuxJS.png',
      name: 'Thyana Lira',
      role: '@thay_lira',
    },
    content: [
      { type: 'paragraph', content: 'Arrasou amigo'},
      { type: 'link', content: 'jane.design/doctorcare' },
    ],
    publishedAt: new Date('2025-01-01 18:44:33'),
  },
];

function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
          })}
        </main>
      </div>
    </>
  )
}

export default App
