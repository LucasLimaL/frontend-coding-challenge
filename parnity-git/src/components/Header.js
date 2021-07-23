import Link from 'next/link'
import styles from '../styles/components/Header.module.css'

export function Header() {
    return (
        <header className={styles.Header}>
            <Link href='/'>
                <a>Home</a>
            </Link>
        </header>
    )
}