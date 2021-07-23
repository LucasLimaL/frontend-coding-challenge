import styles from '../styles/pages/Index.module.css'
import Head from 'next/head'
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { useEffect } from 'react';


export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const json = await res.json();

  return {
    props: { data: json }
  }
}


export default function Home() {

  // useEffect(() => {
  //   document.querySelector("body").classList.add("body");
  // });

  return (
    <div className={styles.container}>

      <Head>
        <title>TITULO</title>
        <body className={styles.body} />
      </Head>

      <Header />

      <div className={styles.mainFooterContainer}>
        <main>

          <div>Olá, bem vindo ao meu site, aqui você pode ver:</div>

          <ul>
            <li><a href='/usuarios'>Usuários</a></li>
            <li><a href='/emails'>Emails</a></li>
          </ul>

        </main>


        <Footer />
      </div>
    </div>
  )
}
