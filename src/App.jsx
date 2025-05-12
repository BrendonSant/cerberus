import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import ThreeDMe from './components/3dMe'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden bg-black'>
      <Hero />
     <About/>
     
     <div className='w-full h-screen '>
     <ThreeDMe/>
     </div>
    
    
    </main>
  )
}

export default App