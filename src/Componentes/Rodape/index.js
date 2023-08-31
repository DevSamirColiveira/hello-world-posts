import styles from './Rodape.module.css';
import { ReactComponent as MarcaRegistrada } from 'assets/marca_registrada_s.svg';

export default function Rodape() {
  return (
    <footer className={styles.rodape}>
      <MarcaRegistrada />
      Desenvolvido por <strong>Samir C Oliveira</strong> na aula de React Router.
    </footer>
  )
}