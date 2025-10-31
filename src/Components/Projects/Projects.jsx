import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
const data = [
  {
    id: 1,
    location: "CKMC Kharia Cantt",
    count: "100KW",
    backgroundImage: "/image4.png",
    ml: "2.6rem",
  },
  {
    id: 2,
    location: "Baimi Khan Flour Mills",
    count: "300KW",
    backgroundImage: "/image2.png",
  },
  {
    id: 3,
    location: "Abrar Surgery ",
    count: "150KW",
    backgroundImage: "/abrar-surgery.jpg",
    mr: "2.6rem",
  },
  {
    id: 4,
    location: "Toyota Capital Islamabad",
    count: "75KW",
    backgroundImage: "/toyota-capital.jpg",
    mr: "2.6rem",
  },
  {
    id: 5,
    location: "Latif Rice Mills",
    count: "200KW",
    backgroundImage: "/latif-rice-mills.jpg",
    mr: "2.6rem",
  },
  {
    id: 5,
    location: "Islamabad Diagnostic Center",
    count: "75KW",
    backgroundImage: "/idc.jpg",
    mr: "2.6rem",
  },
  {
    id: 5,
    location: "Cold storage",
    count: "700KW",
    backgroundImage: "/cold-storage.jpg",
    mr: "2.6rem",
  },
  {
    id: 6,
    location: "Noor Hospital",
    count: "150KW",
    backgroundImage: "/noor-hospital.jpg",
    mr: "2.6rem",
  },
  {
    id: 6,
    location: "Gillani Mart",
    count: "110KW",
    backgroundImage: "/gillani-mart.jpg",
    mr: "2.6rem",
  },
  {
    id: 6,
    location: "Dewan Farms",
    count: "65KW",
    backgroundImage: "/dewan.jpg",
    mr: "2.6rem",
  },
  {
    id: 6,
    location: "Seffron City",
    count: "50KW",
    backgroundImage: "/saffron.jpg",
    mr: "2.6rem",
  },
]
export const Projects = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        sx={{
          backgroundImage: "url(./projectbg.png)",
          height: { xs: "15rem", sm: "25rem", md: "40rem" }, // Full viewport height
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            color: "#FFF",
            textAlign: "center",

            fontSize: { xs: "2rem", md: "3.75rem" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Projects
        </Typography>
      </Box>
      <Typography
        sx={{
          color: "var(--kelly-green, #61C112)",
          textAlign: "center",

          fontSize: { xs: "1.5rem", md: "2.5rem" },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mt: "4rem",
        }}
      >
        Our Successful Projects
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
        Delivering Excellence One Solar Project at a Time
      </Typography>
      <Container
        sx={{
          "&.MuiContainer-root ": {
            px: { md: "6.5rem" },
            maxWidth: "1440px",
            pb: { xs: "5rem", md: "13rem " },
          },
        }}
      >
        <Grid
          container
          // justifyContent='center'
          spacing={5}
          sx={{ mt: "2.5rem" }}
        >
          {data.map((dt) => {
            return (
              <Grid
                // onClick={() => navigate(`/project-detail/${dt.id}`)}
                key={dt.id}
                item
                xs={12}
                sm={6}
                lg={4}
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    width: "auto",
                    height: "25rem",
                    backgroundImage: `url(${dt.backgroundImage})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "0.625rem",
                  }}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 700,
                    lineHeight: "120%",
                    letterSpacing: "-0.02rem",
                    // marginTop: "-2.5rem", // Add margin between the text elements
                    position: "relative", // Set the position to relative
                    zIndex: "2", // Set a higher z-index
                    bottom: "5rem",
                    left: "0.5rem",
                  }}
                >
                  {dt.location}
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: "2.5rem",
                    left: "3rem",
                    zIndex: "1", // Set a lower z-index
                  }}
                >
                  <Typography
                    sx={{
                      color: "white",
                      fontSize: "1.2rem",
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "1.8rem",
                    }}
                  >
                    {dt.count}
                  </Typography>
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
