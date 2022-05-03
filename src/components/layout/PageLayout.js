import Head from 'next/head'
import Script from 'next/script'
import styles from "../../../styles/layout/PageLayout.module.scss"

const PageLayout = ({page_title="Incremental Game", children}) => {
    console.log(`-------------------------------------------------------`)
    console.log(`Page Title: ${page_title}`)
    console.log('Children (NEXT LINE):')
    console.log(children)

    return (
        <div className={styles.container}>
            <Head>
                <title>{page_title}</title>
                <meta name="description" content="Incremental Game." />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            
            <main className={styles.main}>
                {children}
            </main>
        </div>
    )
}

export default PageLayout;

