import React, { useState, useEffect } from 'react'
import { AtomicButton, StyledContainer, StyledP } from './index.styles'
import { Text, TextField } from '../../../../../atoms'
import { FieldArray, FormikProvider } from 'formik'
import { useGetLookUpData, useCreateLookUp } from '../../../../../service/API/lookup'

import { get } from 'lodash'
import { toast } from 'react-toastify'

const CertificateInfo = ({ formik }) => {
  const [seeMore, setSeeMore] = useState(false)
  const [curValue, setCurValue] = useState('')
  const { data } = useGetLookUpData('CERTIFICATE')
  const [suggestedCertificates, setSuggestedCertificates] = useState([])

  useEffect(() => {
    const array = data?.data || []
    formik.values.certificates.forEach((value) => {
      const index = array.findIndex((cert) => cert.id === value.id)
      if (index >= 0) {
        array.splice(index, 1)
      }
    })
    setSuggestedCertificates(array)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data?.data])

  const deleteItemToSuggestedList = (item) => {
    setSuggestedCertificates([...suggestedCertificates.filter((cert) => cert.id !== item.id)])
  }

  let searchedCertificates = suggestedCertificates.filter((certificate) => {
    return certificate?.name.toLowerCase().indexOf(curValue?.toLowerCase()) !== -1
  })
  let sameCertificates = suggestedCertificates.filter((certificate) => {
    return certificate?.name.toLowerCase() === curValue?.toLowerCase()
  })

  const handleClick = (cert, arrayHelpers) => {
    arrayHelpers.push(cert)
    deleteItemToSuggestedList(cert)
  }
  const createMutation = useCreateLookUp()

  const handleAddClick = (arrayHelpers, e) => {
    e.preventDefault()
    if (sameCertificates.length >= 1) {
      arrayHelpers.push(suggestedCertificates.find((cert) => cert.name.toLocaleLowerCase() === curValue.toLocaleLowerCase()))
      deleteItemToSuggestedList(
        suggestedCertificates.filter((cert) => cert.name.toLowerCase() === curValue.toLocaleLowerCase())[0]
      )
      setCurValue('')
    } else {
      createMutation.mutate(
        { name: curValue, type: 'CERTIFICATE' },
        {
          onSuccess: ({ data }) => {
            const idLookUp = get(data, 'id', '')
            toast.success(`Your Certificate has been saved successfully.`)
            arrayHelpers.push({ id: idLookUp, name: curValue })
            setCurValue('')
          },
          onError: (error) => {
            const errors = error.response.data.errors
            const errorMessages = errors.map((error) => error.message).join(' & ')
            toast.error('An error occured while saving your Certificate. Error message: ' + errorMessages)
            setCurValue('')
          },
        }
      )
    }
  }

  const handleClose = (cert, arrayHelpers) => {
    if (data.data.find((obj) => obj.id === cert.id)) {
      setSuggestedCertificates([...suggestedCertificates, cert])
    }

    arrayHelpers.form.setValues({
      ...arrayHelpers.form.values,
      certificates: arrayHelpers.form.values.certificates.filter((param) => {
        return param.id !== cert.id
      }),
    })
  }

  return (
    <StyledContainer>
      <FormikProvider value={formik}>
        <FieldArray
          name="certificates"
          render={(arrayHelpers) => {
            return (
              <div>
                <StyledContainer>
                  <Text className="text-example" type="Subtitle1">
                    Please add all the professional certificates you have. (e.g. Bootcamp, online course etc.)
                  </Text>
                  <StyledContainer className="containerAdd">
                    <TextField
                      className="certificateText"
                      placeholder="Type to add"
                      value={curValue}
                      onChange={(e) => {
                        setCurValue(e.target.value)
                      }}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter') {
                          event.preventDefault()
                        }
                      }}
                    />
                    <AtomicButton
                      className="small"
                      variant="contained"
                      type="submit"
                      handleClick={(e) => handleAddClick(arrayHelpers, e)}
                      label="ADD"
                    />
                  </StyledContainer>
                </StyledContainer>
                <Text className="suggested-text" type="Overline">
                  Suggested Certificates
                </Text>
                <StyledContainer className="containerList">
                  {searchedCertificates.map((cert, i) => {
                    return seeMore ? (
                      <StyledContainer
                        className="cert"
                        key={i}
                        onClick={() => {
                          handleClick(cert, arrayHelpers)
                        }}
                      >
                        {cert.name}
                      </StyledContainer>
                    ) : (
                      i < 4 && (
                        <StyledContainer
                          className="cert"
                          key={i}
                          onClick={() => {
                            handleClick(cert, arrayHelpers)
                            setCurValue('')
                          }}
                        >
                          {cert.name}
                        </StyledContainer>
                      )
                    )
                  })}
                  {suggestedCertificates.length > 4 && (
                    <AtomicButton
                      className="seeMoreLess"
                      variant="text"
                      handleClick={(e) => {
                        e.preventDefault()
                        setSeeMore(!seeMore)
                      }}
                      label={seeMore ? 'See Less >' : 'See More >'}
                    />
                  )}
                </StyledContainer>
                <StyledContainer className="containerAddedList">
                  {formik.values.certificates.map((cert, i) => {
                    return (
                      <StyledContainer value={cert.name} key={i} className="containerAdded">
                        <StyledP>{cert.name}</StyledP>
                        <AtomicButton
                          className="btn-cert small"
                          variant="text"
                          type="submit"
                          handleClick={(e) => {
                            e.preventDefault()
                            handleClose(cert, arrayHelpers)
                          }}
                          label="X"
                        />
                      </StyledContainer>
                    )
                  })}
                </StyledContainer>
              </div>
            )
          }}
        />
      </FormikProvider>
    </StyledContainer>
  )
}

export default CertificateInfo
