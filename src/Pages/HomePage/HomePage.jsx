import React from 'react'
import {Header} from '../../components/Header/Header'
import { CardGrid } from '../../components/Main/CardGrid'
import { Banner } from '../../components/Main/Banner'
import { Footer} from '../../components/Footer/Footer'

export function HomePage () {
  return (
    <>
   <Header/>
   <Banner />
   <CardGrid />
   <Footer />
   </>
  )
}
