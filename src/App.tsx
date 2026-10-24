import { Routes, Route } from 'react-router-dom'
import { lazy } from 'react'
import Header from '@/components/layout/Header'

const HomePage = lazy(()=> import('@/pages/HomePage'))
const ResultPage = lazy(()=> import('@/pages/ResultsPage'))
const DetailsPage = lazy(()=> import('@/pages/DetailsPage'))
function App() {
  
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/search' element={<ResultPage />}/>
        <Route path='/details/:mediaType/:id/:title' element={<DetailsPage />}/>
      </Routes>
    </>
  )
}
 
export default App
