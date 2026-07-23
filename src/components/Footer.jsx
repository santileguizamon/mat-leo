import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
    return (
        <footer id="contacto" className={styles.footer}>
            <div className={`container ${styles.grid}`}>
                <div className={styles.brandInfo}>
                    <h3 className={styles.logo}>
                        <span className={styles.brandRed}>MATAFUEGOS LEO</span> Seguridad
                    </h3>
                    <p className={styles.description}>
                        Más de 40 años protegiendo a consorcios, empresas y particulares con el mejor servicio de recarga y venta de extintores. Recargadores habilitados.
                    </p>
                </div>
                <div className={styles.links}>
                    <h4 className={styles.title}>Navegación</h4>
                    <ul>
                        <li><Link href="#servicios">Servicios</Link></li>
                        <li><Link href="#productos">Productos Auto</Link></li>
                        <li><a href="https://wa.me/5491136378942">WhatsApp</a></li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <h4 className={styles.title}>Contacto</h4>
                    <p>📞 +54 9  11 3637-8942</p>
                    <p>✉️ info@mtseguridadindustrial.com.ar</p>
                    <p>📍 Av. LaFuente 1191, CABA</p>
                </div>
            </div>
            <div className={styles.copyright}>
                <p>&copy; {new Date().getFullYear()} MT Seguridad. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}
