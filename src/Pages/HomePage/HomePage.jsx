import React from 'react'
import {Header} from '../../components/Header/Header'

import { Cards } from '../../components/Main/Cards'
import { CardGrid } from '../../components/Main/CardGrid'
import { Banner } from '../../components/Main/Banner'



export function HomePage() {
  return (
    <>
   <Header/>
   <Banner />
   <CardGrid />
   </>
  )
}
