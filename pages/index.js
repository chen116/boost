import Head from 'next/head'
import React from 'react'
// import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


// import Layout, { siteTitle } from '../components/layout'

import Layout from "../components/layout";


export async function getStaticProps() {
  // const allPostsData = [1, 4, 9, 16];
  const allPostsData = [{"s":"TaiSol Electronics : To clarify the report from Anue"}, {"s":"TaiSol Electronics : To clarify the report from Anue" },{"s":"TaiSol Electronics : To clarify the report from Anue"}];
  return {
    props: {
      allPostsData
    }
  }
}



// export default function Home ( { allPostsData }) {
  export default function Home ( propss ) {

return (
<Layout>

 <Head>
       <title>Taisol</title>
       <link rel="icon" href="/favicon.ico" />
       </Head>
{/* 
<div class="grid grid-cols-5 grid-rows-2 gap-1 mt-10">  
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2"> <img className="" src="/images/index01.jpg"  /></div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2"> <img className="" src="/images/index02.jpg"  /></div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2"> <img className="" src="/images/index03.jpg"  /></div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2"> <img className="" src="/images/index04.jpg"  /></div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2"> <img className="" src="/images/index05.jpg"  /></div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2">Consumer Electronics</div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2">Enterprise Computing & Data Center</div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2">LED Lighting</div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2">Telecommunication</div>
  <div class="flex-1 text-white-700 text-center bg-gray-400 px-4 py-2 m-2">Industrial Applications</div>



</div> */}


<div class="flex bg-white-300 mt-10">
  <div class="flex-1 text-white-700 text-center bg-white-400 m-2 pr-8 pl-8"> <img class="items-center" src="/images/index01.jpg"  />Consumer Electronics</div>
  <div class="flex-1 text-white-700 text-center bg-white-400 m-2 pr-8 pl-8"> <img class="items-center" src="/images/index02.jpg"  />Enterprise Computing & Data Center</div>
  <div class="flex-1 text-white-700 text-center bg-white-400 m-2 pr-8 pl-8"> <img class="items-center" src="/images/index03.jpg"  />LED Lighting</div>
  <div class="flex-1 text-white-700 text-center bg-white-400 m-2 pr-8 pl-8"> <img class="items-center" src="/images/index04.jpg"  />Telecommunication</div>
  <div class="flex-1 text-white-700 text-center bg-white-400 m-2 pr-8 pl-8"> <img class="items-center" src="/images/index05.jpg"  />Industrial Applications</div>
</div>

<div class="grid grid-cols-2 grid-rows-1 gap-4 mt-0">  
  <div class="block text-blue-700 bg-gray-400 px-4 py-2 ml-20 text-left"><Link href="/about/about-taisol"><a>News</a></Link></div>
  <div class="block text-blue-700 bg-white-400 px-4 py-2 mr-20 text-left">Product</div>
</div>

<div class="grid grid-flow-col grid-rows-3 gap-4 mt-0 ml-20">
  
            {propss.allPostsData.map((  id  ) => (
  <div className="" key={id.s}>
    
  <Link href={`/posts/${id.s}`}>
 <a>{id.s} </a>
  </Link>
  <br />

  </div>
            ))}
  
</div>


    <Container className="container-fluid">

      <Row className="pt-5">
        <Col className="my-auto">
          <h1 className="display-2 font-weight-bolder">
            <strong>
              Hi cat cat meow
            </strong>
          </h1>
          <p className="lead">
            lol
          </p>

         
        </Col>
        <Col className="">
          <img className="rounded " src="http://placekitten.com/500/500" alt="" />
        </Col>
      </Row>
    </Container>

</Layout>
)


}



