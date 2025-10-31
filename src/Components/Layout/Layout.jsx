import { Container, Box } from "@mui/material"
import { Header } from "./Header/Header"
import { Footer } from "./Footer/Footer"

export const Layout = ({ children }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
        overflowY: "auto",
      }}
    >
      <Box>
        <Header />
        {/* <Container
          sx={{
            "&.MuiContainer-root ": {
              p: 0,
              maxWidth: "1540px",
            },
          }}
        >
          
          <Box  
            {children}
          </Box>
        </Container> */}
        <Box>{children}</Box>
      </Box>
      <Footer />
    </Box>
  )
}
