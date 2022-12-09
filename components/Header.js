import styles from '../styles/Header.module.css'

const Header = () => {
  return (
    <header>
        <div className={styles.title}>
            Markdown Previewer
        </div>
    </header>
  )
}

export default Header