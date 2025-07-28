import { motion } from 'framer-motion'
import Header from "../components/header/Header"
import SectionProjects from "../components/section/SectionProjects"
const projects = () => {
    return (

        <>
            <Header />
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className='sectionProjectsMotion'>
                <SectionProjects />
            </motion.div>



        </>
    )
}

export default projects