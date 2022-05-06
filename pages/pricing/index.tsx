import Link from 'next/link'
import { MainLayout } from '../../components/layouts/MainLayout'
import { DarkLayout } from '../../components/layouts/DarkLayout'

export default function PricingPage() {
  return (
    
      <>
          <h1>Pricing Page</h1>

          <h1 className={'title'}>
            Ir a <Link href="/">Home.jsx!</Link>
          </h1>
      </>
  )
}

PricingPage.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>
        <DarkLayout>
            { page }
        </DarkLayout>
    </MainLayout>
  )
}