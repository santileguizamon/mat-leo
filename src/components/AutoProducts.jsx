import { categories, products, getWhatsAppUrl } from '@/data/productos';
import styles from './AutoProducts.module.css';

export default function AutoProducts() {
    return (
        <section id="productos" className={`section ${styles.autoSection}`}>
            <div className="container">
                <h2 className="section-title">
                    Venta de Matafuegos y <span>Kits de Seguridad Vehicular</span>
                </h2>

                {categories.map((cat) => {
                    const catProducts = products.filter((p) => p.category === cat.id);
                    if (catProducts.length === 0) return null;
                    return (
                        <div key={cat.id} className={styles.categoryBlock}>
                            <h3 className={styles.categoryTitle}>
                                {cat.icon} {cat.name}
                            </h3>
                            <div className={styles.grid}>
                                {catProducts.map((product) => (
                                    <div key={product.id} className={styles.card}>
                                        <div className={styles.cardBody}>
                                            <h4 className={styles.productName}>{product.name}</h4>
                                            <p className={styles.productDesc}>{product.description}</p>
                                            <span className={styles.priceTag}>{product.price}</span>
                                        </div>
                                        <a
                                            href={getWhatsAppUrl(product.whatsapp)}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.whatsappBtn}
                                        >
                                            Consultar por WhatsApp
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}

                <div className={styles.contactBanner}>
                    <p>¿No encontrás lo que buscás? Consultanos — tenemos todo en seguridad y cuidado vehicular.</p>
                    <a
                        href={getWhatsAppUrl("Hola, quisiera consultar por productos de seguridad y cuidado vehicular.")}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                    >
                        Consultar por WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
