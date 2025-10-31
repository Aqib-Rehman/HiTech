import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"
const sideBar = [
  {
    menuName: "Wind Turbines",
    path: "",
  },
  {
    menuName: "Panel Maintenance",
    path: "",
  },
  {
    menuName: "Wind Generators ",
    path: "",
  },
  {
    menuName: "Solar PV Systems",
    path: "",
  },
  {
    menuName: "Solar Energy",
    path: "",
  },
  {
    menuName: "Hybrid Energy",
    path: "",
  },
]

const serviceData = {
  1: {
    id: 1,
    title: "Panel Maintainnence",
    image1: "/panel-maintainance.jpg",
    image2: "/panel-maintainence2.jpg",
    image3: "/panel-maintainnence3.jpg",
    description:
      "Solar panel maintenance is essential. Clean panels every few months with a gentle detergent solution, inspect for damage, and trim nearby vegetation for optimal performance and longevity.",
    keyFeatures: [
      "Remove dust and debris every few months.",
      "Check for cracks, loose connections, and wear.",
      // Add more key features here
    ],
    ourProcess: [
      "Initial consultation and site assessment.",
      "System design and customization for your specific needs.",
      // Add more steps here
    ],
  },
  2: {
    id: 1,
    title: "Solar PV System",
    image1: "/servicesimg1.png",
    image2: "/servicesimg2.png",
    description:
      "Our Solar PV Systems offer cutting-edge photovoltaic technology, providing you with a reliable and sustainable energy solution. Harness the power of the sun to generate clean electricity and contribute to a greener tomorrow. Our customized PV systems are designed to suit your specific energy needs and location, maximizing efficiency and cost-effectiveness.",
    keyFeatures: [
      "Efficient Solar Panels: We use high-quality solar panels with advanced technology to capture and convert sunlight into electricity efficiently.",
      "Customized Design: Our team assesses your energy requirements and designs a tailor-made solar PV system that optimizes energy production.",
      // Add more key features here
    ],
    ourProcess: [
      "Initial consultation and site assessment.",
      "System design and customization for your specific needs.",
      // Add more steps here
    ],
  },
  3: {
    id: 1,
    title: "Solar Energy",
    image1: "/solor-energy-1.jpeg",
    image2: "/solor-energy-2.jpeg",
    description:
      "Solar energy, derived from sunlight via photovoltaic panels and solar thermal systems, is a renewable, eco-friendly power source. It reduces emissions, cuts electricity costs, and fosters energy independence. Advancing technology makes solar panels more efficient and accessible, driving sustainability.",
    keyFeatures: [
      "Remove dust and debris every few months.",
      "Check for cracks, loose connections, and wear.",
      // Add more key features here
    ],
    ourProcess: [
      "Initial consultation and site assessment.",
      "System design and customization for your specific needs.",
      // Add more steps here
    ],
  },
  4: {
    id: 1,
    title: "Hybrid Energy",
    image1: "/hybrid-energy-1.jpg",
    image2: "/hybrid-energy-2.jpg",
    description:
      "Hybrid energy systems blend diverse sources like solar, wind, and batteries, maximizing efficiency and reliability. They cut emissions, adapt to changing conditions, and offer versatile, sustainable energy solutions for a greener future.",
    keyFeatures: [
      "Multiple Energy Integration: Hybrid systems combine solar, wind, and storage, maximizing resource utilization.",
      "Efficiency & Sustainability: They boost energy efficiency and reduce emissions, contributing to a greener and more sustainable energy future.",
      // Add more key features here
    ],
    ourProcess: [
      "Initial consultation and site assessment.",
      "System design and customization for your specific needs.",

      // Add more steps here
    ],
  },
  // 5: {
  //   id: 1,
  //   title: "Solar PV System",
  //   image1: "/servicesimg1.png",
  //   image2: "/servicesimg2.png",
  //   description:
  //     "Our Solar PV Systems offer cutting-edge photovoltaic technology, providing you with a reliable and sustainable energy solution. Harness the power of the sun to generate clean electricity and contribute to a greener tomorrow. Our customized PV systems are designed to suit your specific energy needs and location, maximizing efficiency and cost-effectiveness.",
  //   keyFeatures: [
  //     "Efficient Solar Panels: We use high-quality solar panels with advanced technology to capture and convert sunlight into electricity efficiently.",
  //     "Customized Design: Our team assesses your energy requirements and designs a tailor-made solar PV system that optimizes energy production.",
  //     // Add more key features here
  //   ],
  //   ourProcess: [
  //     "Initial consultation and site assessment.",
  //     "System design and customization for your specific needs.",
  //     // Add more steps here
  //   ],
  // },
  // 6: {
  //   id: 1,
  //   title: "Solar PV System",
  //   image1: "/hybrid-energy-1.jpg",
  //   image2: "/hybrid-energy-2.jpg",
  //   description:
  //     "Our Solar PV Systems offer cutting-edge photovoltaic technology, providing you with a reliable and sustainable energy solution. Harness the power of the sun to generate clean electricity and contribute to a greener tomorrow. Our customized PV systems are designed to suit your specific energy needs and location, maximizing efficiency and cost-effectiveness.",
  //   keyFeatures: [
  //     "Efficient Solar Panels: We use high-quality solar panels with advanced technology to capture and convert sunlight into electricity efficiently.",
  //     "Customized Design: Our team assesses your energy requirements and designs a tailor-made solar PV system that optimizes energy production.",
  //     // Add more key features here
  //   ],
  //   ourProcess: [
  //     "Initial consultation and site assessment.",
  //     "System design and customization for your specific needs.",
  //     // Add more steps here
  //   ],
  // },
}
export const ServicesDetail = () => {
  const { id } = useParams()
  const numericServiceId = parseInt(id, 10)

  if (!serviceData[numericServiceId]) {
    // Handle the case where the serviceId is not found.
    return <div>Service not found</div>
  }

  const { title, description, keyFeatures, ourProcess, image1, image2 } =
    serviceData[numericServiceId]
  return (
    <Container
      sx={{
        "&.MuiContainer-root ": {
          // p: 0,
          px: { md: "6.5rem" },
          maxWidth: "1440px",
          pb: "13rem",
        },
      }}
    >
      <Typography
        sx={{
          color: "var(--kelly-green, #61C112)",
          textAlign: "center",
          fontFamily: "Degular Display",
          fontSize: { xs: "1.8rem", md: "2.5rem" },
          fontStyle: "normal",
          fontWeight: 700,
          lineHeight: "normal",
          mt: "4rem",
          mb: "1.5rem",
        }}
      >
        {title}
      </Typography>
      {/* <Box sx={{ display: "flex", mt: "2.5rem" }}> */}
      <Box sx={{}}>
        {/* {sideBar.map((menuitem, index) => {
            return (
              <Typography
                sx={{
                  bgcolor: "#F5F5F5",
                  borderRadius: "0.625rem",
                  color: "black",
                  px: "1.5rem",
                  py: "0.88rem",
                  fontWeight: 600,
                  // columnGap: 5,
                  mt: index !== 0 ? "0.5rem" : "",
                }}
              >
                {menuitem.menuName}
              </Typography>
            )
          })} */}
        {/* <ContactCard /> */}
      </Box>
      <Box>
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <Box
          sx={{
            display: "flex",
            gap: { xs: "1rem", md: "3rem" },
            justifyContent: "center",
          }}
        >
          <Box
            component='img'
            src={image1}
            sx={{
              width: { xs: "9em", sm: "13rem", md: "17rem" },
              height: "auto",
            }}
          />
          <Box
            component='img'
            src={image2}
            sx={{
              width: { xs: "8em", sm: "13rem", md: "17rem" },
              height: "auto",
            }}
          />
        </Box>
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            borderRadius: "1rem",
            px: "1.5rem",
            mt: "2rem",
          }}
        >
          <Typography
            sx={{
              fontSize: " 1.5rem",
              fontWeight: 600,
              color: "#1A1A1A",
              pt: "1.5rem",
            }}
          >
            Here to know about this service
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.40)",
              fontSize: { xs: "1rem", md: "1.25rem" },
              mt: "1.5rem",
              fontWeight: 500,
            }}
          >
            Service description
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.40)",
              fontSize: { xs: "0.75rem", md: "1rem" },
              mt: "1rem",
              fontWeight: 400,
            }}
          >
            {description}
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.40)",
              fontSize: { xs: "1rem", md: "1.25rem" },
              mt: "1.5rem",
              fontWeight: 500,
            }}
          >
            Key Features:
          </Typography>
          <ul>
            {keyFeatures.map((feature, index) => {
              return (
                <li
                  style={{
                    color: "rgba(0, 0, 0, 0.40)",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    marginTop: "1rem",
                    fontWeight: 400,
                  }}
                >
                  {feature}
                </li>
              )
            })}
          </ul>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.40)",
              fontSize: { xs: "1rem", md: "1.25rem" },
              mt: "1.5rem",
              fontWeight: 500,
            }}
          >
            Our Process:
          </Typography>
          <ol style={{ paddingBottom: "2.5rem" }}>
            {ourProcess.map((feature, index) => {
              return (
                <li
                  style={{
                    color: "rgba(0, 0, 0, 0.40)",
                    fontSize: { xs: "0.75rem", md: "1rem" },
                    marginTop: "1rem",
                    fontWeight: 400,
                    // paddingBottom: "2.5rem",
                  }}
                >
                  {feature}
                </li>
              )
            })}
          </ol>
        </Box>
        {/* </Box>
        </Box> */}
      </Box>
    </Container>
  )
}
const ContactCard = () => {
  return (
    <Box sx={{ borderRadius: "1rem", mt: "1.5rem" }}>
      <Box component='img' src='/servicesContact.png' />
      <Box sx={{ bgcolor: "#61C112" }}>
        <Typography
          sx={{
            color: "#FFF",
            fontWeight: 400,
            fontSize: "1.25rem",
            textAlign: "center",
            pt: "4rem",
          }}
        >
          solar@hitechsolarsolutions.com
        </Typography>
        <Typography
          sx={{
            color: "#FFF",
            fontWeight: 400,
            fontSize: "1.25rem",
            textAlign: "center",
            mt: "1rem",
            pb: "2.25rem",
          }}
        >
          0303-7584921
        </Typography>
      </Box>
    </Box>
  )
}
