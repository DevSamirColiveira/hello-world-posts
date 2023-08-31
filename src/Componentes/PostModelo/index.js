import styles from './PostModelo.module.css';

export default function PostModelo({ FotoCapa, título, children }) {
  return (
    <article className={styles.PostModeloContainer}>
      <div className={styles.fotoCapa} style={{ backgroundImage: `url(${FotoCapa})` }} />
      <h2 className={styles.Título}> {título}</h2>
      <div className={styles.PostContainer}> {children} </div>
    </article>
  )
}
