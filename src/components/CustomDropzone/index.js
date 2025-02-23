import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { MdDeleteOutline } from 'react-icons/md'
import defaultIcon from '../../assets/svg/Color.svg'
import { AtomicButton, Container, StyledContainer, StyledText, ButtonWrapper } from './index.styles'
import pdfIcon from '../../assets/svg/Pdf.svg'
import docIcon from '../../assets/svg/Docx.svg'
import docxIcon from '../../assets/svg/Doc.svg'
import { IconButton } from '@mui/material'

const CustomDropzone = ({ onFileSelect, message, file, setFile, handleView }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFile(acceptedFiles)
      onFileSelect(acceptedFiles)
    },
     // eslint-disable-next-line react-hooks/exhaustive-deps
    [onFileSelect]
  )

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    accept: { 'text/pdf': ['.pdf', '.docx', '.doc'] },
  })

  const handleDelete = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setFile([])
    onFileSelect(null)
  }

  const handleFileInputChange = (e) => {
    const files = e.target.files
    if (files.length > 0) {
      setFile(files)
      onFileSelect(files)
    }
  }

  const getFileIcon = (fileType) => {
    let icon
    switch (fileType) {
      case 'application/pdf':
        icon = pdfIcon
        break
      case 'application/msword':
        icon = docIcon
        break
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        icon = docxIcon
        break
      default:
        icon = defaultIcon
        break
    }
    return icon
  }

  const fileIcon = file ? getFileIcon(file[0]?.type) : defaultIcon

  return (
    <StyledContainer>
      <StyledText display="block" className="description" type="Subtitle1">
        {message}
      </StyledText>
      <Container {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <div className="icon-box">
          <img className="icon" src={fileIcon} alt="type-icon" />
        </div>
        {!file ? (
          <>
            <p>Drag & Drop File</p>
            <span className="alt">pdf.doc.docx</span>
          </>
        ) : (
          <>
            <p className="file-name">{file[0]?.name}</p>
            <IconButton type="button" onClick={handleDelete}>
              <MdDeleteOutline />
            </IconButton>
          </>
        )}
        <input type="file" style={{ display: 'none' }} onChange={handleFileInputChange} />
      </Container>
      <ButtonWrapper>
        <AtomicButton variant="contained" type="button" label="+ BROWSE" handleClick={open} />
        <AtomicButton variant="outlined" type="button" label="Preview" handleClick={handleView} />
      </ButtonWrapper>
    </StyledContainer>
  )
}

export default CustomDropzone
