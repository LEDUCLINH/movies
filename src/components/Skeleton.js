import React from 'react'
import Skeleton from 'react-loading-skeleton'

export const CustomSkeletonList = () => {
  return (
    <div className="skeleton__list">
      {Array(20).fill().map((ske, index) => (
        <Skeleton style={{ margin: '50px 20px 0' }} height={300} width={250} key={index} duration={2} />
      ))}
    </div>
  )
}

export const CustomSkeletonMovie = () => {
  return (
    <div className="skeleton__movie">
      
    </div>
  )
}