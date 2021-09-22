import React from 'react'
import { NavLink } from 'react-router-dom'
import { ErrorContainer, H3 } from '../components/ErrorElements'
// import troll from '../images/trollface.jpg'

const ErrorPage = ({theme}) => {
  return (
    <ErrorContainer className={`${theme.bg}`}>
      {/* <img className="w-50 rounded-3 mb-2" src={troll} alt="Not Found :[" /> */}
      <H3 className={`fw-bold ${theme.text}`}>404</H3>
      <H3 className={`fw-bold ${theme.text}`}>Not Found</H3>
      <NavLink activeClassName={`btn ${theme.btn}`} className={`btn ${theme.btn}`} to="/">
        Back
      </NavLink>
    </ErrorContainer>
  )
}

export default ErrorPage
