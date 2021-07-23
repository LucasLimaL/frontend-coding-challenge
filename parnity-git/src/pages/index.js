import styles from '../styles/pages/Index.module.css'
import Head from 'next/head'
import Link from 'next/link'
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
            <li>
              <Link href='/users'>
                <a>Usuários Cadastrados</a>
              </Link>
            </li>
            <li>
              <Link href='/emails'>
                <a>Emails Cadastrados</a>
              </Link>
            </li>
          </ul>

        </main>


        <Footer />
      </div>
    </div>
  )
}
