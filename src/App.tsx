import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Header from '@/components/layout/Header'
import PageFallback from '@/components/ui/PageFallback'

const HomePage = lazy(()=> import('@/pages/HomePage'))
const ResultPage = lazy(()=> import('@/pages/ResultsPage'))
const DetailsPage = lazy(()=> import('@/pages/DetailsPage'))
const FavoritesPage = lazy(()=> import('@/pages/FavoritesPage'))
const NotFoundPage = lazy(()=> import('@/pages/NotFoundPage'))
function App() {
  
  return (
    <>
      <Header />
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/search' element={<ResultPage />}/>
          <Route path='/details/:mediaType/:id/:title' element={<DetailsPage />}/>
          <Route path='/favorites' element={<FavoritesPage />}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Routes>
      </Suspense>
    </>
  )
}
 
export default App
