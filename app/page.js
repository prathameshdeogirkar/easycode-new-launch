"use client"
import React, { Suspense, useEffect, useState } from 'react'
import HeroSection from './components/HeroSection'
import axios from 'axios'
import Navbar from './components/Navbar'
import LoadingComp from './components/LoadingComp'

function page() {

  const [latestData, setLaunchData] = useState()
  const [isApiFetch, setIsAPiFetch] = useState(false)

  const loadLaunchData = async () => {
    try {
      let result = await axios("/api/newlaunch");

      if (result) {
        setLaunchData(result.data?.data?.reverse()[0])
        setIsAPiFetch(true)
      }
    } catch (error) {
      console.error("error:", error.message)
    }
  }
  console.log(latestData)
  useEffect(() => {
    loadLaunchData()
  }, [])

  return (
    <>
      {
        !isApiFetch ? <LoadingComp /> :

          <>
            <Navbar />
            <HeroSection data={latestData} />
          </>
      }
    </>
  )
}

export default page