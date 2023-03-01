import { FC } from 'react'

import Head from 'next/head'

import {
  AboutSectionLayout,
  LinkButton,
  PageLayout,
  SectionTypeList,
  AboutAppDescription,
  CustomizeMain,
} from 'components'

const About: FC = () => {
  // Non-customized drink
  const IconName = 'pumpkin'
  const DrinkName = 'Hocus Pocus Latte'
  const Description =
    'It’s not Halloween without the Sanderson sisters! To order up this spooky treat, start with a Venti Iced Pumpkin Spice Latte, add two pumps of white mocha sauce and two pumps of apple brown sugar syrup and finish with extra caramel drizzle and cinnamon dolce topping.'
  const OptionNames = [
    'Hocus Pocus Latte',
    'white mocha sauce',
    'apple brown sugar syrup',
    'caramel drizzle',
    'cinnamon dolce',
  ]

  // Customized drink
  const CstmTitleDescription =
    'You can name a drink, add or remove options, and leave comments.Share your original drink with your friends!'
  const CstmDrinkName = 'My Pumplin Fav...'
  const CstmDescription =
    'I added “chocolate sauce” to Hocus Pocus Latte. The chocolate sauce makes Hocus Pocus Latte better to me!'
  const CstmOptionNames = [...OptionNames, 'chocolate sauce']

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
          <AboutAppDescription />

          <AboutSectionLayout title='Choose from three type of section'>
            <SectionTypeList />
          </AboutSectionLayout>

          <AboutSectionLayout title='Find your drink'>
            <CustomizeMain
              iconName={IconName}
              title={DrinkName}
              description={Description}
              optionNames={OptionNames}
            />
          </AboutSectionLayout>

          <AboutSectionLayout
            title='Customize your drink'
            description={CstmTitleDescription}
          >
            <CustomizeMain
              iconName={IconName}
              title={CstmDrinkName}
              description={CstmDescription}
              optionNames={CstmOptionNames}
            />
          </AboutSectionLayout>

          <AboutSectionLayout title='Can’t wait to start?'>
            <LinkButton
              buttonContent={'Get started'}
              link={'/'}
            />
          </AboutSectionLayout>
        </PageLayout>
      </main>
    </>
  )
}

export default About
