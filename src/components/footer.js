import styles from './All.module.css'

const Footer = () =>{
    return(
       <div className={styles.footer}>
        <div className={styles.footer__box}>
            <p>Markaziy Osiyoda elektron tovarlar savdosi bilan shug'ullanuvchi yetakchi kompaniyalardan biridir</p>
        </div>
        <div className={styles.footer__box}>
            <h1>Katalog</h1>
            <p>SERVER QURILMALARI</p>
            <p>TARMOQ QURILMALARI</p>
            <p>MONOBLOK, KOMPYUTER, NOUTBUK, AKSESSUARLAR</p>
            <p>GADJETLAR, IP-TELEFONIYA</p>
        </div>
        <div className={styles.footer__box}>
            <h1>Kontaktlar</h1>
            <div className={styles.footer__box__cont}>
                <div className={styles.instagram}></div>
                <div className={styles.telegram}></div>
                <div className={styles.phone}></div>
            </div>
        </div>
       </div>
    )
}
export default Footer;