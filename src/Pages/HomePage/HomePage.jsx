import React from 'react'
import {Header} from '../../components/Header/Header'
import { Cards } from '../../components/Main/Cards'
import { Banner } from '../../components/Main/Banner'
import { Footer} from '../../components/Footer/Footer'

export function HomePage () {
  return (
    <>
   <Header/>
   <Banner />
   <Cards />
   <Footer />

   </>
  )
}
