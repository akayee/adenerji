import React from 'react';
import styles from '../assets/mystyle.module.css';

import adnanyilmaz from '../assets/img/Adnanyilmaz.jpeg'


import siemensLogo from '../assets/img/siemens-logo-default.png';
import kacoLogo from '../assets/img/member-kaco.jpg';
import hakkimizdaResim from '../assets/img/Hakkimizda.jpg';
import { Container } from 'reactstrap';
function About(props){

    return <div style={{
        backgroundImage: `url(${hakkimizdaResim})`,
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: "cover",
        minHeight: "100vh",
        overflow: "hidden",
    }}> 
    <Container>
    <h1 className={styles.baslik}> Hakkımızda</h1>
       <div className={styles.hakkimizdaAciklama} ><p>AD Mühendislik grup şirketlerinden olan AD Enerji ve Mühendislik şirketimiz güneş enerjisi sistemleri kurmaktadır. 
       Şirketimiz Siemens yatırımları için  Türkiye'deki tek yetkilidir.</p> 
       <p>Yönetim Kurulu Başkanımız Yüksek İnşaat Mühendisi Adnan YILMAZ:</p>
       <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
           <img  src={adnanyilmaz} alt="Logo" />
       </div>
       </div>
      <div className={styles.hakkimizdaIsbitirme}>
          Ad Şirketler Grubunun Yer Aldığı ve İş Bitirmelerinin Bulunduğu Diğer Sektörler.
          <li>Kentsel Dönüşüm</li>
          <li>İPARD Projeleri</li>
          <li>İnşaat Yapım Onarım</li>
          <li>Tarihi Eser İnşaatı</li>
          <li>Mantar Üretim Tesisi Kurulumu</li>
          <li>İmar Planlama</li>
          <li>Park ve Bahçe İnşaatları</li>
          <li>Arıtma Tesisi Kurulumu</li>
      </div>
      <div className={styles.hakkimizdaIsortakları}>
          İş Ortaklarımız
          <li> <div >
           <img style={{height: "128px",
        width: "128px" }} src={siemensLogo} alt="Logo" />
       </div></li>
       <li> <div >
           <img style={{height: "128px",
        width: "128px" }} src={kacoLogo} alt="Logo" />
       </div></li>
       <li> <div >
         Yıltaş Enerji
       </div></li>
      </div>
        </Container>       
       
    </div>
};

export default About