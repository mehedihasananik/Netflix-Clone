import React from 'react'
import { Main } from '../Components/Main'
import { Row } from '../Components/Row'
import requests from '../Requests'

export const Home = () => {
  return (
    <div>
      <div className="relative ">
        <Main />
      </div>
      <Row title="Upcoming" fetchUrl={requests.requestUpcoming}></Row>
      <Row title="Trending" fetchUrl={requests.requestTrending}></Row>
      <Row title="Popular" fetchUrl={requests.requestPopular}></Row>
      <Row title="Horror" fetchUrl={requests.requestUpcoming}></Row>
    </div>
  )
}
