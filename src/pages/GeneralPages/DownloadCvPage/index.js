import { useGetTools, useGetUserData } from '../../../service/API/candidate'
import CVPreview from './CVPreview'

const DownloadCvPage = () => {
  const { data } = useGetUserData()
  const { data: toolsData } = useGetTools()

  return <CVPreview userData={data?.data} toolsData={toolsData} />
}
export default DownloadCvPage
//to do : add menu button copy it from dashboard later
// transfer data here first show them then send them
