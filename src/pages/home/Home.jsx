import React from 'react'
import './Home.css'
import {Header} from '../../components/Header/Header'
import { Menu } from '../../components/menu/Menu'
import { useState } from 'react'
import Food from '../../components/Food/Food'
import AppDownload from '../../components/AppDownload/AppDownload'

export const Home = () => {

  const [category,setCategory]=useState('All');

  return (
    <div>
        <Header />
        <Menu category={category} setCategory={setCategory}/>
        <Food category={category}/>
        <AppDownload />
    </div>
  )
}
