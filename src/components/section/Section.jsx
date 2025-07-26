import './section.css'
import { Link } from 'react-router-dom'
import imgPerfil from '../../assets/Jadith.jpeg'
import github from '../../assets/github.png'
import linkedin from '../../assets/linkedin.png'
import Facebook from '../../assets/facebook.png'

const Section = () => {
    return (
        <section>
            <div className='nameAndImage'>
                <h1><strong>Jadith Molinares</strong> </h1>
                <h3>Tecnico en Sistemas</h3>
                <h3>Tecnologo en Anlisis y Desarrollo de Software</h3>
                <img src={imgPerfil} alt="Jadith Molinares" />
            </div>

            <div className='aboutMe' id='aboutMe'>
                <h1><strong>Acerca de mi</strong></h1>
                <p>Tecnico en Sistemas y actual aprendiz en formación del programa de Análisis y Desarrollo de Software con conocimientos basicos en lenguajes de programación como Java, Python y conocimientos intermedios en PHP. Bases de datos SQL, Tecnologías Front-End HTML, CSS y JavaScript. Capaz de analizar, diseñar, desarrollar y mantener sistemas de información acorde a los requerimientos del cliente, los avances tecnológicos e implementando buenas prácticas de desarrollo y calidad de software.</p>
            </div>

            <div className='portafolio'>
                <Link to="/projects"><button><strong>Mi Portafolio</strong></button></Link>
            </div>

            <div className='bio'>
                <h1><strong>Estudios</strong></h1>
                <h3>2021</h3><p>Tecnico en sistemas, SENA.</p>
                <h3>2025</h3><p>Tecnologo en Analisis y Desarrollo de Software, SENA.</p>
            </div>

            <div className='hobbies'>
                <h1><strong>Pasatiempos</strong></h1>
                <p>Me gusta escuchar musica, escucho muchos generos pero mi favorito es el <strong>Trap</strong>, me gusta tocar la guitarra, jugar video juegos con mis amigos y ver anime.</p>

            </div>

            <div className='socialNet'>
                <h1><strong>Redes Sociales</strong></h1>
                <ul>
                    <div className='contenedorImg'><img src={github} alt="Github" /><li>Github</li></div>
                    <div className='contenedorImg'><img src={linkedin} alt="Linkedin" /><li>Linkedin</li></div>
                    <div className='contenedorImg'><img src={Facebook} alt="Facebook" /><li>Facebook</li></div>
                </ul>

            </div>


            <h3 className='derechosReservados'>© 2025 Jadith Molinares. All Rights Reserved.</h3>

        </section>
    )
}

export default Section