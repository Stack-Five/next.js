import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'

interface Props {
  handleLoginChange: (userName: string, roomName: string) => void;
  handleLogin: () => void;
}

export default function Home({ handleLoginChange, handleLogin }: Props) {
  const [roomName, setRoomName] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    handleLoginChange(userName, roomName)
  }, [roomName, userName, handleLoginChange])

  return (
    <div className={styles.container}>
      <Head>
        <title>Native WebRTC API with NextJS and Pusher as the Signalling Server</title>
        <meta name="description" content="Use Native WebRTC API for video conferencing" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles.main} onSubmit={handleLogin}>
       <h1>Lets join a room!</h1>
       <input onChange={(e) => setUserName(e.target.value)} value={userName} className={styles['room-name']} placeholder="Enter Username" />
       <input onChange={(e) => setRoomName(e.target.value)} value={roomName} className={styles['room-name']} placeholder="Enter Room Name"/>
       <button type="submit" className={styles['join-room']}>Join Room</button>
      </form>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/simplewebrtc.svg" alt="Vercel Logo" width={72} height={24} />
          </span>
        </a>
      </footer>
    </div>
  )
}
