"use client"
import FeedbackCards from '@/components/feedback_Cards/FeedbackCards'
import FeedbackBanner from '@/components/feedback_banner/FeedbackBanner'
import { getDataService } from '@/services/getDataService'
import { createContext, useContext, useEffect, useState } from 'react'

const feedbackUiContext = createContext()

export const useFeedbackuiContext = () => {
  return useContext(feedbackUiContext)
}

const FeedbackPage = () => {
  const [feedbacks, setData] = useState()
  const helper = async () => {
    await getDataService(setData,"client-feedback")
  }
  useEffect(() => {
    helper()
  }, [])
  return (
    <>
      <feedbackUiContext.Provider value={{feedbacks}}>
        <FeedbackBanner />
        <FeedbackCards  />
      </feedbackUiContext.Provider>
    </>
  )
}

export default FeedbackPage