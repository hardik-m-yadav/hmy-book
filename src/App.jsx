import { useState } from 'react'
import './App.css'
import Bannner from './assets/components/Bannner'
import Hero from './assets/components/Hero'
import Navbar from './assets/components/Navbar'
import Footer from './assets/components/Footer'

function App() {

  const [searchQuery, setSearchQuery] = useState('best sellers');
 

  return (
   <>
   <div className=' min-h-screen bg-gray-900'>
    <Navbar handleSearch={(term) => setSearchQuery(term)}/>
    <Bannner/>
    <Hero searchQuery={searchQuery}/>
   </div>
   <Footer/>
   </>
  )
}

export default App
