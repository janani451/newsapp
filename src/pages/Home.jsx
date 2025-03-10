import React from 'react'
import '../styles/Home.css'
import Hero from '../componets/Hero'
import TopStories from '../componets/TopStories'
import HomeArticles from '../componets/HomeArticles'
import NewsLetter from '../componets/NewsLetter'

const Home = () => {
  return (
    <div className="Home">
      <Hero />

      <div className="home-components">
          <TopStories />
          <HomeArticles />
      </div>

      <NewsLetter />

    </div>
  )
}

export default Home