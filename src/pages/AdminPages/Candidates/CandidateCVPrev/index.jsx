import React from 'react'
import { useParams } from 'react-router-dom'
import CVPreview from '../../../GeneralPages/DownloadCvPage/CVPreview'
import { useCandidatePersonalInfo, useCandidateListTools } from '../../../../service/API/admin'

const CandidateCVPrev = () => {
  const { candidateID } = useParams()
  const { data } = useCandidatePersonalInfo(candidateID)
  const { data: toolsData } = useCandidateListTools(candidateID)
  return (
    <CVPreview userData={data?.data} toolsData={toolsData} />
  )
}

export default CandidateCVPrev