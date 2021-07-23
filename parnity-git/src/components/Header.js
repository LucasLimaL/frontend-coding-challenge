import styles from '../styles/components/Header.module.css'

export function Header() {
    return (
        <header className={styles.Header}>
            <a href='/'>Home</a>
        </header>
    )
}