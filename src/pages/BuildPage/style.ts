import { Box, styled } from "@mui/material";

export const Left = styled(Box)(({ theme }) => ({
  flex: '0 0 400px',
  borderRight: '1px solid',
  borderColor: theme.palette.divider,
  padding: '15px'
}));


export const Right = styled(Box)({
  flex: '1',
  padding: '15px',
  display: 'flex',
  justifyContent: 'center'
})