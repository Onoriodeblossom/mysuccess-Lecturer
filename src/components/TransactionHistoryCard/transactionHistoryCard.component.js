import React from 'react'
import { Container } from './styles'

export const  TransactionHistoryCard=({img,purchaserName,BookName,date})=>{
  return (
    <Container>

        <div className="img">
            <img src={img}/>
        </div>
        <div className='book-details'>
            <div>{purchaserName}purchases your courses</div>
            <div className='book-name'>
                {BookName}
            </div>
            <div>
                {date}
            </div>

        </div>
        <div className='amount'>
            ddd

        </div>
    </Container>
  )
}
