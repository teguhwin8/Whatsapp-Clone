import Head from "next/head"
import ChatContainer from "../components/ChatContainer"
import styles from './Index.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>WhatsApp Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.app}>
        <div className={styles.container}>
          <ChatContainer />
        </div>
      </div>
    </>
  )
}
