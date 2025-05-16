import React from 'react'
import {Routes , Route, BrowserRouter} from 'react-router-dom'
import LoginPage from './Pages/LoginPage/LoginPage'
import MainPage from './Pages/MainPage/MainPage'
import ArticlePage from './Pages/ArticlePagewon/ArticlePage'
import ArticlePageTo from './Pages/ArticlePageTo/ArticlePageTo'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<LoginPage />}/>
            <Route path='/main' element={<MainPage />}/>
            <Route path='/article' element={<ArticlePage />}/>
            <Route path='/articleto' element={<ArticlePageTo />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App