import styles from './BotãoPrincipal.module.css';

export default function BotãoPrincipal({ children, tamanho}) {
  return (
    <button className={`
      ${styles.botoes}
      ${styles[tamanho]}
    `}>
      {children}
    </button>
  )
}