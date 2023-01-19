import Head from 'next/head'
import { LPSectionLayout, LinkButton } from '@/components'

import { PageLayout } from '@/components'


export default function Home({ children }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app'
        />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1'
        />
        <link
          rel='icon'
          href='/favicon.ico'
        />
      </Head>

      <main>
        <PageLayout>
          <div>LP</div>
          <LPSectionLayout>
            <LinkButton
              buttonContent={'Get started'}
              link={'home'}
            />
          </LPSectionLayout>
        </PageLayout>
      </main>
    </>
  )
}
