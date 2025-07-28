import Header from '../components/header/Header.jsx'
import Section from '../components/section/Section.jsx'
import { motion } from 'framer-motion'


function Home() {
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
                <Section />
            </motion.div>
        </>
    )
}

export default Home