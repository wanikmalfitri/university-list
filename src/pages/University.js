import React from 'react'
import { withRouter } from "react-router-dom"
const University = ({match}) => {
  const uniId = match.params.id
  return (
    <div>
      University {uniId}
    </div>
  )
}

export default withRouter(University)
