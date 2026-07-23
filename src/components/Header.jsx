import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    <span className={styles.brandRed}>ML</span> Cuida lo que mas queres
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><Link href="#nosotros" className={styles.navLink}>Nosotros</Link></li>
                        <li><Link href="#servicios" className={styles.navLink}>Servicios</Link></li>
                        <li><Link href="#productos" className={styles.navLink}>Productos</Link></li>
                        <li><Link href="#contacto" className={styles.navLink}>Contacto</Link></li>
                    </ul>
                </nav>
                <a href="https://wa.me/5491136378942" target="_blank" rel="noopener noreferrer" className="btn-primary">
                    WhatsApp
                </a>
            </div>
        </header>
    );
}
