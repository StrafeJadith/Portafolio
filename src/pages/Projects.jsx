import { motion } from 'framer-motion'
import Header from "../components/header/Header"
import SectionProjects from "../components/section/sectionProjects"
const projects = () => {
    return (

        <>
            <Header />
            <motion.div
                style={{ paddingTop: '70px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
            >
                <SectionProjects />
            </motion.div>



        </>
    )
}

export default projects