import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/pages/Home.module.scss'

import PageLayout from '../src/components/layout/PageLayout'

export default function Home() {
  return (
    <PageLayout page_title={"Incremental Game"}>
      <div className={styles.home_container}>

      </div>
    </PageLayout>
  )
}
