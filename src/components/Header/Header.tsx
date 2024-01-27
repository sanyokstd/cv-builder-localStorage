import { useStore } from "@/store/store";
import { Avatar, Box, Container, Stack, Tab, Tabs, Typography } from "@mui/material"
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const { userName } = useStore(state => state)
  const location = useLocation();
  return (
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Container maxWidth="xl">
        <Stack direction="row" justifyContent="space-between" alignItems="flex-end" pt={1}>
          <Tabs aria-label="navigation" role="navigation" value={location.pathname}>
            <Tab label="My CV" component={Link} to="/" value="/" />
            <Tab label="Create CV" component={Link} to="/create-cv" value="/create-cv" />
          </Tabs>
          <Stack direction="row" alignItems="center" gap={1} pb={1}>
            <Typography variant="h6">
              {userName}
            </Typography>
            <Avatar />
          </Stack>
        </Stack>
      </Container>
    </Box>
  )
}

export default Header;