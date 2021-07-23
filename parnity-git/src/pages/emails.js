import Head from "next/head"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import styles from "../styles/pages/Emails.module.css"


export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const json = await res.json();

    return {
        props: { data: json }
    }
}


export default function Emails({ data }) {
    return (
        <div className={styles.container}>

            <Head>
                <title>Emails</title>
            </Head>

            <Header />

            <div className={styles.mainFooterContainer}>
                <main className={styles.main}>
                    {data.map(data => (
                        <div className={styles.card} key={data.id}>
                            {data.email}
                        </div>
                    ))}
                    {data.map(data => (
                        <div className={styles.card} key={data.id}>
                            {data.email}
                        </div>
                    ))}
                </main>


                <Footer />
            </div>
        </div>
    )
}