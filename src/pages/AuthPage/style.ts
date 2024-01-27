import { Stack, styled } from "@mui/material";

export const FormBody = styled(Stack)({
  marginTop: '50px',
  marginBottom: '50px',
  padding: '30px 15px',
  '@media(max-width: 767px)': {
    marginTop: '25px',
    marginBottom: '25px',
  }
})