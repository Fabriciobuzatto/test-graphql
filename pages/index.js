import Head from 'next/head'
import { gql, useQuery } from '@apollo/client'
import styles from '../styles/Home.module.css'

export default function Home() {
  
  const QueryTeste = gql`
    {
      products(filter: {sku: {in: ["24-WG03","24-WG09"]}}) {
        items {
          name
          sku
        }
      }
    }
  `
  const { data } = useQuery(QueryTeste)

  console.log("teste data", data)

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Teste
        </h1>
      </main>      
    </div>
  )

}
