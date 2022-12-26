import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../Requests'

const Home = () => {
  return (
    <>
      <Main></Main>
      <Row rowId='7' title='Now playing' fetchURL={requests.requestNow_playing}></Row>
      <Row rowId='6' title='Originals' fetchURL={requests.requestOriginals}></Row>
      <Row rowId='3' title='Trending' fetchURL={requests.requestTrending}></Row>
      <Row rowId='4' title='TopRated' fetchURL={requests.requestTopRated}></Row>
      <Row rowId='1' title='UpComing' fetchURL={requests.requestUpcoming}></Row>
      <Row rowId='5' title='Horror' fetchURL={requests.requestHorror}></Row>
      <Row rowId='2' title='Popular' fetchURL={requests.requestPopular}></Row>
    </>
  )
}

export default Home