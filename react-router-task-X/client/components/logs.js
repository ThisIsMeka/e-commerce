import React from 'react'
import { useSelector } from 'react-redux'

const Logs = () => {
  const logs = useSelector((store) => store.logs.logs)
  return (
    <div className="container mx-auto mt-40">
      <span className="font-semibold text-xl">Logs</span>
      {logs.map((el) => (
        <div className="my-4">{el.event}</div>
      ))}
    </div>
  )
}

export default Logs
