import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
const contact = [
  {
    icon: "/about.png",
    title: "About Us",
    des: "HitechSkyEnergy is your trusted solar energy partner. We're dedicated to delivering sustainable solutions that power a brighter, eco-friendly tomorrow.",
  },
  {
    icon: "/location2.png",
    title: "Office Location",
    des: "Office#8, Lower Ground Center Point Plaza Spring North Phase-7 Bahria Town, 46220",
  },
  {
    icon: "/contact.png",
    title: "Contact Info",
    des: "info@hitechskyenergy.com ",
    con: "+92 312 3810022 \nLandline Number: 5400045\nFax: 5400043\n Imtiaz Ext: 102\nHassan Ext: 103\nAccounts Department Ext: 104\nSales Department Ext: 105\nTechnical Department Ext: 106\nDesign Department Ext: 107\nKitchen Ext: 108",
  },
]
export const Contact = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./contactbg.png)",
          height: { xs: "15rem", sm: "25rem", md: "40rem" }, // Full viewport height
          width: "100%", // Full viewport width
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          // color: "#fff",
          // fontSize: "32px",
          // marginTop: "-77px", // Adjust this to match the height of your AppBar
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",
            fontFamily: "Degular Display",
            fontSize: { xs: "2rem", md: "3.75rem" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Contact
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "var(--kelly-green, #61C112)",
          textAlign: "center",
          fontFamily: "Degular Display",
          fontSize: { xs: "1.5rem", md: "2.5rem" },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mt: "4rem",
        }}
      >
        Contact Info
      </Typography>
      <Typography
        sx={{
          color: "rgba(26, 26, 26, 0.40)",
          textAlign: "center",
          fontFamily: "Futura",
          fontSize: { xs: "1rem", md: "1.25rem" },
          fontStyle: "normal",
          fontWeight: 500,
          lineHeight: "normal",
          mt: "1rem",
        }}
      >
        Can’t wait to hear from you
      </Typography>
      <Container
        sx={{
          "&.MuiContainer-root ": {
            p: 0,
            px: { xs: "1.5rem", sm: "3rem", md: "8.5rem" },
            pb: "10rem",
            // maxWidth: "1440px",
            // maxWidth: "100%",
            // height:"100vh"
          },
        }}
      >
        <Grid container spacing={4} sx={{ mt: "2.5rem" }} justifyContent={"center"}>
          {contact.map((itm, index) => {
            return (
              <Grid item xs={12} sm={5} md={4}>
                <Box
                  sx={{
                    borderRadius: "0.625rem",
                    border: "1px solid rgba(26, 26, 26, 0.40)",
                    background: "#FFF",
                    // width: "18.125rem",
                    // height: " 19.4375rem",
                    m: "auto",

                    minHeight: "23rem",
                    height: "100%",
                    // maxHeight: "25rem",
                    width: "100%",
                  }}
                >
                  {/* <Box sx={{width:"100%", mx:"auto"}}> */}
                  <Box sx={{ display: "flex" }}>
                    <Box
                      component='img'
                      src={itm.icon}
                      sx={{ mt: "1.75rem", mx: "auto" }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      textAlign: "center",
                      fontSize: { xs: "1.25rem", md: "1.5rem" },
                      fontWeight: 700,
                      color: "black",
                      mt: "1.5rem",
                    }}
                  >
                    {itm.title}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgba(0, 0, 0, 0.40)",
                      mt: "1.5rem",
                      mx: "1.3rem",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                    }}
                  >
                    {itm.des}
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: "rgba(0, 0, 0, 0.40)",
                      mt: "0.4rem",
                      mx: "1.3rem",
                      // mb: "1.75rem",
                      fontSize: { xs: "0.9rem", md: "1rem" },
                      whiteSpace: "pre-line",
                    }}
                  >
                    
  {itm.con }

                  
                  </Typography>
                </Box>
              </Grid>
            )
          })}
          <Grid item xs={12} sx={{ mt: "1rem" }}>
            <iframe
              title='Google Map'
              width='100%'
              height='450'
              frameBorder='0'
              style={{ border: 0 }}
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13303.682358526336!2d73.1054305687642!3d33.52945021097353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfedb6a5f08e73%3A0x216aec324391624d!2sCenter%20Point%20Plaza!5e0!3m2!1sen!2s!4v1694402196194!5m2!1sen!2s'
              allowFullScreen=''
            ></iframe>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}
// contactbg
