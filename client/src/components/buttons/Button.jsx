import React from 'react'

const Button = ({type}) => {
  return (
    <>
      {
        type === 'Buy' ? 
        (<button>Buy</button>) 
        : (<button>Sell</button>)
      }
    </>
  )
}

export default Button
