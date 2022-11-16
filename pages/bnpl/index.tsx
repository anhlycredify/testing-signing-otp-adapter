import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import { RegistrationForm } from '../components/form'

const Bnpl: NextPage = () => {
  const onSubmit = (values: any) => {
    const url = values.redirectUrl + `?signing_id=${values.signingId}&app_id=${values.appId}`;
    console.log('url', url)
    window.location.href = url;
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>BNPL - Fi Adapter testing signing OTP</title>
        <meta name="description" content="Fi Adapter testing signing OTP" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <RegistrationForm onSubmit={onSubmit} />
    </div>
  )
}

export default Bnpl
