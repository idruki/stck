import  React from 'react'
import LeftSideBar from '../../components/LeftSideBar/LeftSideBar'
import RightSideBar from '../../components/RightSideBar/RightSideBar'
import QuesDetails from './QuesDetails'


const DisplayQues=() => {
    return(
        <div className='home-container-1'>
            <LeftSideBar/>
            <div className='home-container-2'>
                <QuesDetails/>
                <RightSideBar/>
            </div>
        </div>
    )
}

export default DisplayQues
