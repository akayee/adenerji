import React from 'react';
import styles from '../assets/mystyle.module.css';
import anasayfaresim from '../assets/img/10477.png';

function Home(props) {

    return <div className={styles.flex1}>
        <div className={styles.ansayfadiv}>
            <div className={styles.anasayfametin}>

                <h1 className={styles.bigblue}> Anasayfa</h1>
            </div>
            <div className={styles.anasayfametin} >
                <img className={styles.homeimg} src={anasayfaresim} alt="AnasayfaResim" />
            </div>
        </div>



    </div>
};

export default Home;