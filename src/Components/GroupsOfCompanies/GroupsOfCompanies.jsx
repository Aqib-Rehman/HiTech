import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"

export const GroupsOfCompanies = () => {
  const navigate = useNavigate()
  return (
    <>
    
 
    





<Box sx={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
  {/* Heading */}
  <Typography
    sx={{
      fontSize: "2rem",
      color: "#4A4A4A",
      fontWeight: "bold",
      letterSpacing: "0.08rem",
      mb: "1rem",
    }}
  >
    HITECH GROUP OF COMPANIES
  </Typography>

  {/* Table */}
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <tbody>

 


      {/* Logos */}
      <tr>
        <td style={{ textAlign: "left", padding: "0.5rem" }}>
          <img
            src="/left-logo1.jpeg"
            alt="Left Logo 1"
            style={{ width: "160px" }}
          />
        </td>
        <td style={{ textAlign: "left", padding: "0.5rem" }}>
          <img
            src="/left-logo2.jpeg"
            alt="Left Logo 2"
            style={{ width: "150px" }}
          />
        </td>
      </tr>

      {/* Phones */}
      <tr>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>+92 312 3810022</td>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>+92 342 6350044</td>
      </tr>

      {/* Emails */}
      <tr>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>
          info@hitechskyenergy.com
        </td>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>
          info@greenweltenergy.com
        </td>
      </tr>

      {/* Websites */}
      <tr>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>
          https://www.hitechskyenergy.com
        </td>
        <td style={{ textAlign: "left", padding: "0.3rem" }}>
          https://www.greenweltenergy.com
        </td>
      </tr>

      {/* Addresses */}
      <tr>
        <td style={{ textAlign: "left", padding: "0.3rem", lineHeight: 1.5 }}>
          Office #8, Lower Ground Center Point Plaza
          <br />
          Spring North Phase-7, Bahria Town, 46220
        </td>
        <td style={{ textAlign: "left", padding: "0.3rem", lineHeight: 1.5 }}>
          Building #4, Etihad Colony
          <br />
          Allama Iqbal Town, Lahore
        </td>
      </tr>
    </tbody>
  </table>

  {/* Footer */}
  <Typography
    sx={{
      fontSize: "1.6rem",
      color: "#4A4A4A",
      fontWeight: "normal",
      mt: "1.5rem",
      fontStyle: "italic",
    }}
  >
    Under the Umbrella of Hitech Secondary Solutions Pvt. Ltd.
  </Typography>
</Box>








      
       
      <Container
        sx={{
          "&.MuiContainer-root ": {
            px: { md: "6.5rem" },
            maxWidth: "1440px",
            pb: { xs: "5rem", md: "13rem " },
          },
        }}
      >
             </Container>



    </>
  )
}
