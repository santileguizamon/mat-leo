import styles from './LocationMap.module.css';

export default function LocationMap() {
    return (
        <section className={`section ${styles.mapSection}`}>
            <div className={`container ${styles.container}`}>
                <h2 className={styles.sectionTitle}>
                    Nuestra <span>Ubicación</span>
                </h2>
                <p className={styles.description}>
                    Encuéntranos en nuestro local para atención personalizada, venta de productos vehiculares y asesoramiento.
                </p>
                <div className={styles.mapContainer}>
                    {/* Reemplaza el src de este iframe con el link de "Insertar un mapa" que te da Google Maps para tu dirección real */}
                    <iframe
                        src="https://maps.google.com/maps?q=Matafuegos+Leo&hl=es&z=17&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Mapa de ubicación del local"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
