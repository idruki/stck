import  React from 'react'
import{ Routes, Route} from 'react-router-dom'
import Auth from './pages/Auth/Auth'
import Home from './pages/Home/Home'
import Questions from './pages/Questions/Questions'
import AskQues from './pages/AskQues/AskQues'
import DisplayQues from './pages/Questions/DisplayQues'


const AllRoutes=() => {
    return(
        <Routes>
            <Route path='/' element={ <Home/>}/>
            <Route path='/Auth' element={ <Auth/> } />
            <Route path='/Questions' element={ <Questions/> } />
            <Route path='/AskQues' element={ <AskQues/> } />
            <Route path='/Questions/:id' element={ <DisplayQues/> } />
        </Routes>
      
    )
}

export default AllRoutes