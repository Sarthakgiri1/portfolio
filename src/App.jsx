import React,{useState} from 'react'
import Navbar from './components/Navbar'

import Home from './sections/Home'
import Projects from './sections/Projects'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Hobbies from './sections/Hobbies'
import Certificates from './sections/Certificates'
import Contact from './sections/Contact'

export default function App(){
  const [active,setActive]=useState('home')

  const pages={
    home:<Home/>,
    projects:<Projects/>,
    education:<Education/>,
    skills:<Skills/>,
    hobbies:<Hobbies/>,
    certificates:<Certificates/>,
    contact:<Contact/>
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar active={active} setActive={setActive}/>
      <main>{pages[active]}</main>
    </div>
  )
}