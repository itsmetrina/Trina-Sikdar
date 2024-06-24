import { motion } from "framer-motion";
import styles from "./FooterStyles.module.css";

const Footer = () => {
    return (
        <section id="footer" className={styles.container}>
            <motion.a
                href="mailto:trinasikdar2000@gmail.com"
                target="_blank"
                whileHover={{scaleX: 0.9}}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 100 }}
            >
                <h4>Get in Touch!</h4>
            </motion.a>
        </section>
    );
};

export default Footer;
