import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import TiptapEditor from "../components/TiptapEditor";

export default function Home() {
  return (
      <div>
        <main>
          <div>
            <h1>에디터 테스트</h1>
            <div>
              <TiptapEditor/>
            </div>
          </div>
        </main>
      </div>
  )
}
