import { Header } from '@/components'
import { Box, Container, Paper } from '@mui/material';
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <Paper elevation={2}>
          <Box>
            <Outlet />
          </Box>
        </Paper>
      </Container>
    </>
  )


}

export default MainLayout;