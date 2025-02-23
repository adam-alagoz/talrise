import Box from '@mui/material/Box'
import { Modal as BasicModal, Backdrop } from '@mui/material'

import { StyledContainer, CloseButton, InBox, AtomicButton } from './index.style'

export default function Modal({
  children,
  handlePrimaryButton,
  open = false,
  handleClose,
  primaryButtonName,
  secondaryButtonName,
  handleSecondaryButton,
  style,
}) {
  return (
    <BasicModal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      BackdropComponent={Backdrop}
      onClose={handleClose}
      sx={style}
    >
      <StyledContainer>
        <Box className="box">
          <CloseButton onClick={handleClose} />
          <InBox>{children}</InBox>
          <AtomicButton variant="contained" handleClick={handlePrimaryButton} label={primaryButtonName} />
          {secondaryButtonName && handleSecondaryButton && (
            <AtomicButton variant="outlined" handleClick={handleSecondaryButton} label={secondaryButtonName} />
          )}
        </Box>
      </StyledContainer>
    </BasicModal>
  )
}
