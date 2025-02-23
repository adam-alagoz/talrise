import React, { useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { AtomicButton, Container } from '../../../CandidatesPages/UploadCvPage/components/UploadCv/index.styles'
import defaultIcon from '../../../../assets/svg/Color.svg'
import { IconButton } from '@mui/material'
import { MdDeleteOutline } from 'react-icons/md'
import { useGetCandidateInfo } from '../../../../service/API/candidate'

function StyledDropzone({
  icon,
  file,
  name,
  handleDelete,
  handleDeleteUploadedFile,
  onDrop,
  handleCvDownload,
  handleCoverDownload,
  label,
  blob,
  uploadedCv,
  uploadedCoverLetter,
  uploadedElement,
}) {
  const { getRootProps, getInputProps, isFocused, isDragAccept, isDragReject, open } = useDropzone({
    accept: { 'text/pdf': ['.pdf', '.docx', '.doc'] },
    onDrop: (e) => onDrop(e, name),
  })

  const [nameState, setNameState] = useState(name)

  const { data: userData } = useGetCandidateInfo()

  return (
    <div className="container">
      <Container {...getRootProps({ isFocused, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        {!file ? (
          <>
            <div className="icon-box">
              <img className="icon" src={defaultIcon} alt="" />
            </div>
            <p>Drag & Drop File</p>
            <span className="alt">pdf.doc.docx</span>
          </>
        ) : (
          <>
            <p>Drag & Drop File</p>
            <span className="alt">pdf.doc.docx</span>
            <div className="icon-box">
              <img className="icon" src={icon} alt="type-icon" />
            </div>
            <p className="file-name">{file.name}</p>
            {!uploadedElement && (
              <IconButton onClick={(e) => handleDelete(e, nameState, setNameState)}>
                <MdDeleteOutline />
              </IconButton>
            )}
          </>
        )}

        {nameState === 'cv' && uploadedCv && (
          <div style={{ padding: '20px' }}>
            {uploadedCv}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>{'Delete Your ' + label}</span>{' '}
              <IconButton onClick={(e) => handleDeleteUploadedFile(e, nameState, setNameState)}>
                <MdDeleteOutline />
              </IconButton>
            </div>
          </div>
        )}

        {nameState === 'letter' && uploadedCoverLetter && (
          <div style={{ padding: '20px' }}>
            {' '}
            {uploadedCoverLetter}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <span>{'Delete Your ' + label}</span>{' '}
              <IconButton onClick={(e) => handleDeleteUploadedFile(e, nameState, setNameState)}>
                <MdDeleteOutline />
              </IconButton>
            </div>
          </div>
        )}
      </Container>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
        <AtomicButton variant="contained" type="submit" handleClick={open} label="+ BROWSE" />
        <a
          style={{ textDecoration: 'none', color: '#701d9f' }}
          label={`Download ${label}`}
          onClick={(e) => (name === 'cv' ? handleCvDownload(e) : handleCoverDownload(e))}
          href="#a1"
          id="a1"
          download={
            name === 'cv'
              ? blob.type === 'application/pdf'
                ? `${userData?.cvPath}.pdf`
                : `${userData?.cvPath}.docx`
              : blob.type === 'application/pdf'
              ? `${userData?.coverLetterPath}.pdf`
              : `${userData?.coverLetterPath}.docx`
          }
        >
          {userData?.cvPath && nameState === 'cv' && `Download ${label}`}
          {userData?.coverLetterPath && nameState === 'letter' && `Download ${label}`}
        </a>
      </div>
    </div>
  )
}

;<StyledDropzone />

export default StyledDropzone
