// components/Header.js
import { Container, Row, Col, Navbar, Dropdown,Nav,NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import Link from 'next/link'
import Example from './VicNav'
import styles from './header.module.css'
import React from 'react'



  
  const Header1 = props => (
    <div className={`${styles.headerStyle} Header`} >
     <Navbar bg="blue" expand="sm">
       <Container className="container-fluid">
         <Navbar.Brand><Link href="/"><a><img src='/images/logo.png'></img></a></Link></Navbar.Brand>
         <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"> 
           <Nav className={`${styles.navBarTop} ml-auto`}    >
             {/* <Nav.Link ><Link href="/about/about-taisol"><a className={styles.navtxt}>About</a></Link></Nav.Link>  */}
             <NavDropdown title="About Taisol" bsClass={styles.navtxt} >
                <Link href="/about/about-taisol"><a><NavDropdown.Item >Company Profile</NavDropdown.Item></a></Link>
               <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
             </NavDropdown>
             <NavDropdown title="News" id={styles.navtxt} >
               <NavDropdown.Item href="#action/3.1">News & Event</NavDropdown.Item>
            </NavDropdown>             
           </Nav>

         </Navbar.Collapse> 
       </Container>
     </Navbar>


    </div>
  );
  


  
  const Header2 = props => (
<>
    <p>
  <a class="btn btn-primary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
    Link with href
  </a>
  <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
    Button with data-target
  </button>
</p>
<div class="collapse" id="collapseExample">
  <div class="card card-body">
    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
  </div>
</div>

<nav class= {`${styles.headerStyle} navbar navbar-expand-lg navbar-dark bg-primary`}>

  <Link href="/"><a class="navbar-brand"><img src='/images/logo.png'></img></a></Link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav" aria-controls="main_nav" >
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" >
    <ul  class={` ml-auto navbar-nav`} id="main_nav" >
     <li class="nav-item"><Link href="/"><a class="nav-link" >Home </a></Link> </li>

     <li class="nav-item dropdown">
     <Link href="/about/about-taisol"><a class="nav-link  dropdown-toggle" data-toggle="dropdown"> About  </a></Link>
	    <ul class="dropdown-menu">
            <Link href="/about/about-taisol"><li><a class="dropdown-item" href="#" > Company Profile</a></li></Link>
	    </ul>
	</li>


     <li class="nav-item dropdown">
     <Link href="/about/about-taisol"><a class="nav-link  dropdown-toggle" data-toggle="dropdown"> News  </a></Link>
	    <ul class="dropdown-menu">
            <Link href="/about/about-taisol"><li><a class="dropdown-item" href="#" >News & Events</a></li></Link>
	    </ul>
	</li>
</ul>
  </div> 


 

</nav>



</>



  );

   function toggleNavPos() {
        var element = document.getElementById("meow");
        if (element.classList.contains("meow"))
        {
            element.classList.add("meow");
            alert("has");
        }else{
            element.classList.remove("k");
            alert("doesnt");
        }
        
      }
  const Header3 = props => ( 
    
    <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.headerStyle} sticky="top">
       <Container>
       <Navbar.Brand><Link href="/"><a><img src='/images/logo.png'></img></a></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={toggleNavPos}/>
        <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className= {`${styles.navBarTop} ml-auto`}  id="meow" >
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
            </Nav>

        </Navbar.Collapse>
    </Container>
        
    </Navbar>
  );

  
//   export default Header3;


class BootstrapNavbar extends React.Component{
    constructor(props) {
        super(props);
        this.myClass = styles.navBarTop;
        this.onClick = this.onClick.bind(this);
      }
      onClick(e){
        var element = document.getElementById("meow");
        if (element.classList.contains( this.myClass))
        {
            element.classList.remove( this.myClass);
        }else{
            element.classList.add(this.myClass);
        }
        console.log(e.currentTarget.classList);
        console.log(element)
      }

      
    render(){
        return(
            <Navbar collapseOnSelect expand="lg" variant="dark" className={styles.headerStyle} sticky="top">
            <Container>
            <Navbar.Brand><Link href="/"><a><img src='/images/logo.png'></img></a></Link></Navbar.Brand>
             <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={this.onClick}/>
             <Navbar.Collapse id="responsive-navbar-nav" >
                 <Nav className= {`${styles.navBarTop} ml-auto`}  id="meow" >
                     <Nav.Link href="#features">Features</Nav.Link>
                     <Nav.Link href="#pricing">Pricing</Nav.Link>
                     <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                         <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                         <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                         <NavDropdown.Divider />
                         <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                     </NavDropdown>
                 </Nav>
     
             </Navbar.Collapse>
         </Container>
             
         </Navbar>
        )  
    }
}
export default BootstrapNavbar;