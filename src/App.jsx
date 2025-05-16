import React from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import MainPage from './Pages/MainPage/MainPage'
import ArticlePage from './Pages/ArticlePagewon/ArticlePage'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/main' element={<MainPage />}/>
            <Route path='/article' element={<ArticlePage />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App