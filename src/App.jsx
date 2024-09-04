import React from 'react'

const App = () => {
  return (
    <div className='overflow-x-hidden text--300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
      <div className="fixed top-0 -z-10 h-full w-full">
    <div className="absolute top-0 z-[-2] h-screen w-screen bg-red-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(135,206,235,0.6),rgba(255,255,255,0))]"></div>
    </div>
    <div>
      Our lady of mercy
    </div>
    </div>
  )
}

export default App
