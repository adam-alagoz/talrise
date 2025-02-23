import { Text, TextField } from '../../../atoms'
function CompanyDetailsExtra({ formik }) {
  return (
    <div>
      <Text type="Headline2" className="headline">
        Company Details
      </Text>
      <br></br>
      <Text type="Subtitle1" className="text-basic">
        You can add more details about client's company.
      </Text>
      <TextField
        label="Company Details"
        id="explanationText"
        mainClass="explanation"
        name={`companyProfile`}
        color="secondary"
        multiline
        rows={10}
        placeholder="Type to add  more details about client's company."
        inputProps={{ maxLength: 500 }}
        value={formik?.values.companyProfile}
        onChange={formik?.handleChange}
      />
    </div>
  )
}

export default CompanyDetailsExtra
