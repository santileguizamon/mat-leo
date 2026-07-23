import styles from './Services.module.css';

const servicesList = [
    {
        title: 'Recarga de Matafuegos para Consorcios y Empresas',
        description: 'Mantenimiento y recarga anual de extintores bajo estrictas Normas IRAM. Retiramos y entregamos en tu edificio, comercio u oficina en CABA asegurando la total conformidad con la normativa municipal.',
        icon: '🔥',
    },
    {
        title: 'Venta de Matafuegos Nuevos y Accesorios',
        description: 'Comercializamos extintores reglamentarios de todas las clases (ABC para autos y hogares, CO2 para equipos eléctricos, y Clase K para cocinas y restaurantes).',
        icon: '🧯',
    },
    {
        title: 'Habilitaciones y Control Técnico',
        description: 'Asesoramiento técnico especializado para consorcios y locales comerciales. Realizamos el control de dotación, señalización y planillas necesarias para habilitaciones gubernamentales.',
        icon: '📋',
    }
];

export default function Services() {
    return (
        <section id="servicios" className="section">
            <div className="container">
                <h2 className="section-title">
                    Nuestros <span>Servicios de Seguridad</span>
                </h2>

                <div className={styles.coverageArea}>
                    <p>
                        📍 <strong>Área de Cobertura y Retiros:</strong> Realizamos retiros y entregas de matafuegos para consorcios, administraciones de edificios y locales en toda <strong>Capital Federal (CABA)</strong>.<br />
                        Contamos con puntos de recepción y retiro rápido de matafuegos y kits vehiculares en los barrios de <strong>Núñez</strong> y <strong>Bajo Flores</strong>.
                    </p>
                </div>

                <div className={styles.grid}>
                    {servicesList.map((service, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.icon}>{service.icon}</div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
