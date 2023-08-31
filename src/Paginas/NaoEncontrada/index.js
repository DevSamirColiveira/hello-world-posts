import styles from './NaoEncontrada.module.css';
import error404 from '../../assets/erro_404.png';
import BotãoPrincipal from 'Componentes/BotãoPrincipal';
import { useNavigate } from 'react-router-dom';

export default function NaoEncontrada() {
  const navegar = useNavigate ()
  return (
    // "<></>React Fragment"
    <>
      <div className={styles.conteudoContainer}>
        <span className={styles.texto404}>404</span>
        <h1 className={styles.titulo}>
          Ops! Página não encontrada.
        </h1>
        <p className={styles.paragrafo}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragrafo}>
          Aguarde uns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        <div 
          className={styles.botaoContainer}
          onClick={() => navegar("/")}
          >
          <BotãoPrincipal tamanho="lg">
          Voltar
        </BotãoPrincipal>
        </div>

        <img className={styles.imagemCachorro}
          src={error404}
          alt="Cachorro de óculos que estar vestido"
        />
      </div>
      <div className={styles.espacoEmBranco}></div>
    </>
  )
}