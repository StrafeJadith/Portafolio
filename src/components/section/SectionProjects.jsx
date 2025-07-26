import './sectionProjects.css'
import tienda from '../../assets/tienda.png'
const sectionProjects = () => {
    return (
        <section>
            <div className='projects'>
                <h1><strong>Proyectos</strong> </h1>
                <div className='edm'>
                    <a href="https://github.com/StrafeJadith/EDM"><img src={tienda} alt="Tienda" /></a>
                    <h3><a href="https://github.com/StrafeJadith/EDM">Easy Data Management</a></h3>
                    <p>Es un software diseñado para el manejo de inventario, ventas y créditos de una tienda, con el fin de lograr un entorno más confiable y seguro para los  usuarios y administradores, con una estructura intuitiva para una mayor comprensión de los usuarios. Además, permite optimizar los procesos operativos, facilitando la toma de decisiones y mejorando la eficiencia del negocio.</p>


                </div>
            </div>

            <h3 className='derechosReservados2'>© 2025 Jadith Molinares. All Rights Reserved.</h3>

        </section>
    )
}

export default sectionProjects