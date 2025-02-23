import ClientListTable from '../CreateClient/ClientListTable'
import Layout from './CreateJobLayout'

export default function CreateJobTablePage() {
  return (
    <Layout
      children={
        <div>
          <ClientListTable />
        </div>
      }
    />
  )
}
