/* eslint-disable no-unused-vars */
import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import './Spinner.css'

function Spinner() {
    let [loading, setLoading] = useState(true)

  return (
    <div className="spinner">

      <ClipLoader
        color={'var(--secondary-color)'}
        loading={loading}
        size={50}
      />
    </div>
  )
}

export default Spinner