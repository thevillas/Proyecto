import React from 'react'
import Styles from '../css/Styles.module.css'

const Footer = () => {
    return (
        <>
            <div className={Styles.content}>
                <div className={Styles.lf}>
                    <h3>Contáctanos</h3>
                </div>
                <div className={Styles.iconos}> 
                    <a href="https://www.facebook.com/profile.php?id=100063754406609&mibextid=ZbWKwL" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/johan.1123/" className="fa fa-instagram"></a>
                    <a href="https://mail.google.com/mail/u/0/?pli=1#inbox?compose=GTvVlcSBpszfdbvcBlLHsTQZmFfhfqckWkBWdTmRwHRBWxRhQdTZTPNpTxNGvtbWgNpVmtxFWjMxJ" className="fa fa-envelope-o"></a>
                    <a href="https://web.whatsapp.com/305 3272915" className="fa fa-mobile"></a>
                </div>
            </div>
        </>
    ) 
}

export default Footer
