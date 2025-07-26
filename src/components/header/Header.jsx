import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <header>
            <div className='titulos'>
                <Link to="/"><h2 className='tituloNombre'>Jadith Molinares</h2></Link>
                <Link to="/projects"><h2 className='tituloNombre'>Proyectos</h2></Link>
                <Link><h2 className='tituloNombre'>Acerca de mi</h2></Link>
                <Link to=""><h2 className='tituloNombre'>Source</h2></Link>

            </div>
        </header >
    )
}

export default Header