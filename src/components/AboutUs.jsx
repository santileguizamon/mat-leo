import styles from './AboutUs.module.css';

export default function AboutUs() {
    return (
        <section id="nosotros" className={`section ${styles.aboutSection}`}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>
                        Sobre <span>Nosotros</span>
                    </h2>
                    <p className={styles.description}>
                        Con más de 40 años de trayectoria en el rubro de seguridad industrial, nos hemos consolidado como referentes en la protección de vidas y bienes. Nuestra historia comenzó con la firme vocación de brindar un servicio honesto y de calidad.
                    </p>
                    <p className={styles.description}>
                        Nos especializamos específicamente en la recarga, revisación y mantenimiento integral de equipos contra incendio. Además, comercializamos una amplia gama de matafuegos, accesorios y kits vehiculares que cumplen con los más altos estándares de calidad y normas IRAM.
                    </p>
                    <p className={styles.description}>
                        Trabajamos día a día para que consorcios, empresas y particulares tengan la tranquilidad de estar verdaderamente protegidos ante cualquier emergencia.
                    </p>
                </div>
            </div>
        </section>
    );
}
