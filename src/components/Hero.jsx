import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.overlay}></div>
            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>
                    Matafuegos Leo <br />
                    <span style={{ fontSize: '0.7em', color: 'var(--primary-red)', display: 'block', marginTop: '0.5rem' }}>
                        Recarga y Venta de Extintores
                    </span>
                </h1>
                <p className={styles.subtitle}>
                    <strong>Protegemos lo que más te importa.</strong> Con más de <strong>40 años de experiencia</strong> en el rubro, somos expertos en la <strong>recarga y revisación de matafuegos</strong> bajo normas IRAM para consorcios, locales comerciales y particulares. Venta de matafuegos nuevos y kits de seguridad vehicular para la VTV.
                </p>
                <div className={styles.actions}>
                    <a href="https://wa.me/5491136378942?text=Hola,%20quisiera%20consultar%20por%20un%20presupuesto%20de%20matafuegos." target="_blank" rel="noopener noreferrer" className="btn-primary">
                        Solicitar Presupuesto
                    </a>
                    <a href="#servicios" className="btn-secondary">
                        Ver Servicios
                    </a>
                </div>
            </div>
        </section>
    );
}
