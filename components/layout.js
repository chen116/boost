// import Head from 'next/head'
// // import styles from './layout.module.css'
// // import utilStyles from '../styles/utils.module.css'
// import Link from 'next/link'
// import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'

// const name = 'Your Name'
// export const siteTitle = 'Next.js Sample Website'

// export default function Layout({ children }) {
//   return (
//     <>
// <div>
//     <Navbar bg="light" expand="lg">
//       <Container className="container-fluid">
//         <Navbar.Brand href="#home">taisol Resact-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="mr-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//             <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
//               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//               <NavDropdown.Divider />
//               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
//             </NavDropdown>
//           </Nav>
//           <Form inline>
//             <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//             <Button variant="outline-primary">Search</Button>
//           </Form>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//     </div>
//     <main>{children}</main>
//     </>
//   )
// }
import Footer from "./Footer";

import Header from "./Header";
import Head from 'next/head'

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%"
};

const contentStyle = {
  flex: 1,
  display: "flex",
  flexDirection: "column"
};

const Layout = propss => (
  <div className="Layout" style={layoutStyle}>

    <Header />
    <div className="Content" style={contentStyle}>
      {propss.children}
    </div>
    <Footer />
  </div>
);

export default Layout;