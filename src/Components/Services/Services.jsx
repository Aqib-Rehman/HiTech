import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { useNavigate } from "react-router-dom"
const services = [
  // {
  //   id: "1",
  //   icons: "/windTurbines.png",
  //   serviceNo: "01 Service",
  //   serviceName: "Wind Turbines",
  //   serviceDetail:
  //     "Embrace the power of wind with our efficient and eco-friendly wind turbines.",
  //   img: "/windTurbineImg.png",
  // },
  {
    id: "1",
    icons: "/panelMaintaince.png",
    serviceNo: "01 Service",
    serviceName: "Panel Maintenance",
    serviceDetail:
      "Ensure your solar panels perform optimally with our expert maintenance services.",
    img: "/panelMaintainceImg.png",
  },
  // {
  //   id: "3",
  //   icons: "/windGenerators.png",
  //   serviceNo: "02 Service",
  //   serviceName: "Wind Generators",
  //   serviceDetail:
  //     "Harness the force of the wind to generate clean and sustainable energy.",
  //   img: "/windGeneratorsImg.png",
  // },
  {
    id: "2",
    icons: "/solarPvSystems.png",
    serviceNo: "02 Service",
    serviceName: "Solar PV Systems",
    serviceDetail:
      "Unlock the potential of solar energy with our high-performance PV systems.",
    img: "/solarPvSystemsImg.png",
  },
  {
    id: "3",
    icons: "/solarEnergy.png",
    serviceNo: "03 Service",
    serviceName: "Solar Energy",
    serviceDetail:
      "Experience the brilliance of solar energy and its positive impact on your life.",
    img: "/solarEnergyImg.png",
  },
  {
    id: "4",
    icons: "/hybridEnergy.png",
    serviceNo: "04 Service",
    serviceName: "Hybrid Energy",
    serviceDetail:
      "Embrace a green future with our hybrid energy solutions, combining solar and wind power for efficiency ",
    img: "/hybridEnergyImg.png",
  },
]
export const Services = () => {
  const navigate = useNavigate()
  return (
    <>
      <Box
        onClick={() => navigate("")}
        sx={{
          backgroundImage: "url(./serivesBg.png)",
          height: { xs: "15rem", sm: "25rem", md: "40rem" },
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
            fontFamily: "Degular Display",
            fontSize: { xs: "2rem", md: "3.75rem" },
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
          }}
        >
          Services
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
        Services And Solutions
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
        Maximize Energy Savings with our Solar and wind Services
      </Typography>
      <Container
        sx={{
          "&.MuiContainer-root ": {
            // p: 0,
            px: { md: "6.5rem" },
            // maxWidth: "1440px",
            maxWidth: "1440px",
            pb: { xs: "5rem", md: "13rem " },
          },
        }}
      >
        <Grid container spacing={4} sx={{ mt: "2.5rem" }}>
          {services.map((item, index) => {
            return (
              <Grid
                item
                xs={12}
                sm={6}
                lg={4}
                onClick={() => navigate(`/services-detail/${item.id}`)}
                // sx={{ mx:"auto", width:"100%"}}
              >
                <Box
                  sx={{
                    boxShadow: "0px 0px 10px 0px rgba(26, 26, 26, 0.25)",
                    borderRadius: "12px",
                  }}
                >
                  <Box sx={{ px: "2rem", pt: "1.5rem" }}>
                    <Box component='img' src={item.icons} />
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.40)",
                        fontFamily: "Futura",
                        fontSize: "1rem",
                        fontStyle: "normal",
                        fontWeight: 500,
                        lineHeight: "normal",
                        mt: "1.5rem",
                      }}
                    >
                      {item.serviceNo}
                    </Typography>
                    <Typography
                      sx={{
                        color: "#000",
                        fontFamily: "Degular Display",
                        fontSize: "1.5rem",
                        fontStyle: "normal",
                        fontWeight: 700,
                        lineHeight: "normal",
                        mt: "0.8rem",
                        minHeight: "3.4rem",
                      }}
                    >
                      {item.serviceName}
                    </Typography>
                    <Typography
                      sx={{
                        color: "rgba(0, 0, 0, 0.40)",
                        fontFamily: "Futura",
                        fontSize: "1.25rem",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "normal",
                        mt: "0.75rem",
                        minHeight: "7rem",
                      }}
                    >
                      {item.serviceDetail}
                    </Typography>
                  </Box>
                  <Box
                    component='img'
                    src={item.img}
                    sx={{ width: "100%", mt: "1rem" }}
                  />
                </Box>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}
