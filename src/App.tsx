import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Header from '@/components/layout/Header'

const HomePage = lazy(()=> import('@/pages/HomePage'))




function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
      </Routes>
    </>
  )
}

export default App
