import styles from '../styles/pages/Index.module.css'
import Head from 'next/head'
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { useEffect } from 'react';


export default function Home() {

  // useEffect(() => {
  //   document.querySelector("body").classList.add("body");
  // });

  return (
    <div className={styles.container}>

      <Head>
        <title>Home</title>
        <body className={styles.body} />
      </Head>

      <Header />

      <div className={styles.mainFooterContainer}>
        <main>

          <h1>Olá, bem vindo ao meu site, aqui você pode ver:</h1>

          <ul>
            <li><a href='/users'>Usuários Cadastrados</a></li>
            <li><a href='/emails'>Emails Cadastrados</a></li>
          </ul>

        </main>


        <Footer />
      </div>
    </div>
  )
}
