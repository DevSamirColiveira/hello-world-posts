import './PostConteudo.css';
import styles from './PostConteudo.module.css';

import { Route, Routes, useParams } from "react-router-dom"
import posts from 'json/posts.json'
import PostModelo from "Componentes/PostModelo";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NaoEncontrada from 'Paginas/NaoEncontrada';
import PaginaPadrao from 'Componentes/PaginaPadrao';
import PostCard from 'Componentes/PostCard';


export default function PostConteudo() {
  const paramentros = useParams();

  const post = posts.find((post) => {
    return post.id === Number(paramentros.id);
  })

  if (!post) {
    return <NaoEncontrada />
  }


  const postsRecomendados =  posts
    .filter((posts) => (posts.id) !==Number(paramentros.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

    console.log(postsRecomendados);

  return (
    <Routes>
      <Route path="*" element={<PaginaPadrao />}>
        <Route index element={
          <PostModelo
            FotoCapa={`/assets/posts/${post.id}/capa.png`}
            título={post.titulo}
          >
            <div className="post-markdown-container">
              <ReactMarkdown>
                {post.texto}
              </ReactMarkdown>
            </div>
            <h2 className={styles.tituloOutrosPosts}>
              Outros posts que você pode gostar:
            </h2>
            <ul className={styles.postsRecomendados}>
              {postsRecomendados.map ((post) => (
                <li key={post.id}>
                  <PostCard post={post}/>
                </li>
              ))}
            </ul>
          </PostModelo>
          }/>
      </Route>
    </Routes>
  )
}