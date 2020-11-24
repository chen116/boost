import styles from './footer.module.css'
import { Container, Row, Col, Navbar, Dropdown,Nav,NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
  
  const footer = () => (
    <div className={styles.footerStyle}>
     

     <Navbar  variant="dark" >
    <Navbar.Brand >Copyright ©2015 TaiSol Electronics Co., Ltd. All rights reserved</Navbar.Brand>
  </Navbar>

            
    </div>
  );
  
export default footer;