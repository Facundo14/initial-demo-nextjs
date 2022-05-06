import Head from 'next/head'
import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>

      <h1 className={'title'}>
          Ir a <Link href="/">Home.jsx!</Link>
      </h1>
    </MainLayout>
  )
}
