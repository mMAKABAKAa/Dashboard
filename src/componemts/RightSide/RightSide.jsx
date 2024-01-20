import React from 'react'
import './RightSide.css'
import Updates from '../Updates/Updates'
import CustomerReview from '../CustomerReview/CustomerReview'
const RightSide = () => {
  return (
    <div className="RightSide">
        <h3>Updates</h3>
        <Updates/>
    <div>
        <h3>Customer Review</h3>
        <CustomerReview/>
    </div>
    </div>
  )
}

export default RightSide