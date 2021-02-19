import React from 'react'

const Footer = () => {
  return (
    <footer className="flex align-center justify-space-between p-8 m-4">
      <div className="flex-basis-40">
        <strong>
          <span className="bg-gray-800 h-24 w-auto">
            Developed by <a href="https://github.com/thisismeka">Meerim Abdinazarova</a>
          </span>
        </strong>
      </div>
      <span>
        View this project &nbsp;
        <a href="https://github.com/thisismeka/ecommerce-react">HERE</a>
      </span>
    </footer>
  )
}

export default Footer
