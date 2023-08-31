import MenuLink from '../MenuLink';
import styles from './menu.module.css';

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
          Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
          Sobre Mim
        </MenuLink>
        <MenuLink to="/github">
          GitHub
        </MenuLink>
        <MenuLink to="/linkedin">
          Linkedin
        </MenuLink>
      </nav>
    </header>
  )
}