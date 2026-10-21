import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Header from '@/components/layout/Header'

const HomePage = lazy(()=> import('@/pages/HomePage'))
const ResultPage = lazy(()=> import('@/pages/ResultsPage'))

function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search' element={<ResultPage />}/>
      </Routes>
    </>
  )
}

export default App
