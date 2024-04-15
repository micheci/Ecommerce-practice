import { Box, Button, Container, Typography } from '@mui/material'

const Navbar = () => {
return (
    <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant='h4'>lolTyler1</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button variant="contained">Sign in</Button>
                <Button variant="contained">Sign up</Button>
            </Box>
        </Box>
    </Container>
)
}

export default Navbar