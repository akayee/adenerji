import React, { useState } from 'react';
import styles from '../assets/mystyle.module.css';

import 'bootstrap/dist/css/bootstrap.css';
import { Col, Row } from 'reactstrap';
import dokuzeylül from '../assets/projeler/ges.jpg';
import adanakaratas from '../assets/projeler/adanakaratas.jpg';
import ankaracevrekoruma from '../assets/projeler/cevrekoruma.jpg';
import caykur from '../assets/projeler/caykur.jpg';
import saglikbakanligi from '../assets/projeler/saglikbakanligi.jpg';
import beonfabrikasi from '../assets/projeler/beonfabrikasi.jpg';
import tatlar from '../assets/projeler/tatlar.jpg';
import yuzengesjaponya from '../assets/projeler/yuzengesjaponya.jpg';

const projects = [{
    adi: "STM ve DSİ GES Projesi",
    img:yuzengesjaponya,
    summary:"STM aracılığıyla DSİ sulama alanlarında kullanılması amaçlanan güneş enerjisi sistemleri kurulması planlanmaktadır. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır."
},{
    adi: "Dokuz Eylül Üniversitesi GES Projesi",
    img:dokuzeylül,
    summary:"Kampüs içerisinde yer alan sosyal donatılar çatılarına, otopark üst kapatmaları ve müsait olan alanların üzerine yapılması düşünülmektedir. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır."
},
{
    adi: "Adana Karataş Belediyesi GES Projesi",
    summary:"Belediye bünyesinde yer alan sosyal donatılar çatılarına, otopark üst kapatmaları ve müsait olan alanların üzerine yapılması düşünülmektedir. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır.",
    img:adanakaratas
},
{
    adi: "Ankara Çevre Koruma  GES Projesi",
    summary:"Daire Başkanlığı bünyesinde yer alan mücavir alanlar içerisideki park, bahçe ve mesire alanlarının otoparkları üzerine kurulması düşünülmektedir. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır.",
    img:ankaracevrekoruma
},
{
    adi: "ÇAYKUR  GES Projesi",
    summary:"ÇAYKUR kurumu bünyesinde yer alan sosyal donatılar çatılarına, otopark üst kapatmaları ve müsait olan alanların üzerine yapılması düşünülmektedir. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır.",
    img:caykur
},
{
    adi: "Sağlık Bakanlığı  GES Projesi",
    summary:"Sağlık Bakanlığı bünyesinde yer alan Şehir Hastanaleri içerisindeki sosyal donatılar çatılarına, otopark üst kapatmaları ve müsait olan alanların üzerine yapılması düşünülmektedir. Sistem olarak Siemens teknolojileri kullanılacak ve tüm maliyetler Siemens tarafından karşılanacaktır.",
    img:saglikbakanligi
},
{
    adi: "Ankara Büyükşehir Belediyesi  Fabrika Projesi",
    summary:"Beton Üretim Fabrikası kurulumu.",
    img:beonfabrikasi
},
{
    adi: "Tatlar Organik Gübre Projesi",
    summary:"Ankara Tatlar Su Arıtma Teisisinde atılmakta olan organik gübrenin paketlenerek satışa sunulması planlanmaktadır..",
    img:tatlar
}
];
function Projects(props) {    

    const renderItem = (index, key) => {
        return <Col md="4" sm="12" key={key} className={styles.projectItem}>
            <div>
            <img className={styles.projectImage}   src={projects[key].img}  />
            <p className={styles.projecTitle}>{projects[key].adi}</p>
            </div>
            
            <p> {projects[key].summary}</p>
            </Col>;
    }

    return <div>
        <h1 className={styles.bigblue}> Projeler</h1>
        <div style={{textAlign:"center",fontFamily:"'Courier New', monospace",alignItems:"center",}}>Şirketlerimiz tarafından yürütülen çok sayıda proje yer almaktadır. Hizmet verdiğimiz alanlar ile alakalı projelerimiz aşağıda listelenmektedir.</div>
        <div >
        <Row className={styles.projectList} >
            {projects.map((item,index)=>{
                return renderItem(item,index);
            })}
        </Row>
        </div>

        <a href="https://www.freepik.com/photos/green">Green photo created by wirestock - www.freepik.com</a>
    </div>
};


export default Projects;