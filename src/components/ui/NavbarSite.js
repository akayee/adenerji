import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import styles from '../../assets/mystyle.module.css';

const NavbarSite = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar  color="rgba(255,255,255,0.7)" light expand="md">
        <NavbarBrand href="/"><div className={styles.bigblue}>AD Enerji Mühendislik</div></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className={styles.bigblue}>
              <NavLink  href="/"> <div className={styles.bigblue}>Anasayfa</div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/about"><div className={styles.bigblue}>Hakkımızda</div></NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dashboard"><div className={styles.bigblue}>Projeler</div></NavLink>
            </NavItem>
          </Nav>
          <NavbarText><div className={styles.blue}>Yenilenebilir Enerji Kaynakları</div></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavbarSite;