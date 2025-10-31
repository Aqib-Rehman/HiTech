import { Box, Container, Grid, Typography } from "@mui/material"
import React from "react"
import { useParams } from "react-router-dom"

export const ProjectDetails = () => {
  const { id } = useParams()

  const aboutProject = [
    {
      id: 1,
      projectDescription:
        "1Chandni Chowk Plaza was a commercial complex situated in a densely populated area facing severe electricity shortages and rising utility costs.",
      TypeOfServiceOffered: "This is the content of Blog Post 1.",
      ClientsRequirement:
        "The clients sought an eco-friendly and sustainable solution to overcome the frequent power outages and reduce their dependency on the grid. They wanted a cost-effective energy system that would also contribute to their corporate social responsibility goals.",
      TypeOfSolution:
        "Our team conducted a thorough energy audit and designed a customized solar energy system to meet the plaza's electricity needs. We installed high-efficiency solar panels on the rooftop, harnessing the abundant sunlight available in the area. To ensure uninterrupted power supply, we integrated a battery storage system that stores excess energy during sunny hours and releases it during peak demand or cloudy days. The system not only provided a reliable and continuous power source but also significantly reduced their electricity bills, making the plaza more financially sustainable.",
    },
    {
      id: 2,
      projectDescription:
        "2Chandni Chowk Plaza was a commercial complex situated in a densely populated area facing severe electricity shortages and rising utility costs.",
      TypeOfServiceOffered: "This is the content of Blog Post 1.",
      ClientsRequirement:
        "The clients sought an eco-friendly and sustainable solution to overcome the frequent power outages and reduce their dependency on the grid. They wanted a cost-effective energy system that would also contribute to their corporate social responsibility goals.",
      TypeOfSolution:
        "Our team conducted a thorough energy audit and designed a customized solar energy system to meet the plaza's electricity needs. We installed high-efficiency solar panels on the rooftop, harnessing the abundant sunlight available in the area. To ensure uninterrupted power supply, we integrated a battery storage system that stores excess energy during sunny hours and releases it during peak demand or cloudy days. The system not only provided a reliable and continuous power source but also significantly reduced their electricity bills, making the plaza more financially sustainable.",
    },
    {
      id: 3,
      projectDescription:
        "3Chandni Chowk Plaza was a commercial complex situated in a densely populated area facing severe electricity shortages and rising utility costs.",
      TypeOfServiceOffered: "This is the content of Blog Post 1.",
      ClientsRequirement:
        "The clients sought an eco-friendly and sustainable solution to overcome the frequent power outages and reduce their dependency on the grid. They wanted a cost-effective energy system that would also contribute to their corporate social responsibility goals.",
      TypeOfSolution:
        "Our team conducted a thorough energy audit and designed a customized solar energy system to meet the plaza's electricity needs. We installed high-efficiency solar panels on the rooftop, harnessing the abundant sunlight available in the area. To ensure uninterrupted power supply, we integrated a battery storage system that stores excess energy during sunny hours and releases it during peak demand or cloudy days. The system not only provided a reliable and continuous power source but also significantly reduced their electricity bills, making the plaza more financially sustainable.",
    },
    {
      id: 4,
      projectDescription:
        "4Chandni Chowk Plaza was a commercial complex situated in a densely populated area facing severe electricity shortages and rising utility costs.",
      TypeOfServiceOffered: "This is the content of Blog Post 1.",
      ClientsRequirement:
        "The clients sought an eco-friendly and sustainable solution to overcome the frequent power outages and reduce their dependency on the grid. They wanted a cost-effective energy system that would also contribute to their corporate social responsibility goals.",
      TypeOfSolution:
        "Our team conducted a thorough energy audit and designed a customized solar energy system to meet the plaza's electricity needs. We installed high-efficiency solar panels on the rooftop, harnessing the abundant sunlight available in the area. To ensure uninterrupted power supply, we integrated a battery storage system that stores excess energy during sunny hours and releases it during peak demand or cloudy days. The system not only provided a reliable and continuous power source but also significantly reduced their electricity bills, making the plaza more financially sustainable.",
    },
    {
      id: 5,
      projectDescription:
        "5Chandni Chowk Plaza was a commercial complex situated in a densely populated area facing severe electricity shortages and rising utility costs.",
      TypeOfServiceOffered: "This is the content of Blog Post 1.",
      ClientsRequirement:
        "The clients sought an eco-friendly and sustainable solution to overcome the frequent power outages and reduce their dependency on the grid. They wanted a cost-effective energy system that would also contribute to their corporate social responsibility goals.",
      TypeOfSolution:
        "Our team conducted a thorough energy audit and designed a customized solar energy system to meet the plaza's electricity needs. We installed high-efficiency solar panels on the rooftop, harnessing the abundant sunlight available in the area. To ensure uninterrupted power supply, we integrated a battery storage system that stores excess energy during sunny hours and releases it during peak demand or cloudy days. The system not only provided a reliable and continuous power source but also significantly reduced their electricity bills, making the plaza more financially sustainable.",
    },

    // Add more blog posts as needed
  ]

  const infoAbout = [
    {
      id: 1,
      name: "Company Ltd",
      date: "12 November, 2022",
      value: "PKR 40,00,000",
      owner: "Private",
      category: "Solar PV System",
      website: "www.companyltd.com",
    },
    {
      id: 2,
      name: "Company Ltd",
      date: "12 November, 2022",
      value: "PKR 40,00,000",
      owner: "Private",
      category: "Solar PV System",
      website: "www.companyltd.com",
    },
    {
      id: 3,
      name: "Company Ltd",
      date: "12 November, 2022",
      value: "PKR 40,00,000",
      owner: "Private",
      category: "Solar PV System",
      website: "www.companyltd.com",
    },
  ]
  const blogPost = aboutProject.find((post) => post.id.toString() === id)
  const projectinfo = infoAbout.find((post) => post.id.toString() === id)
  return (
    <Container
      sx={{
        "&.MuiContainer-root ": {
          p: 0,
          maxWidth: "1440px",
        },
      }}
    >
      {/* <Grid
        container
        sx={{ width: "100%" }}
        justifyContent='center'
        alignItems={"center"}
      >
        <Grid item md={6}>
          <Box component='img' src={"/image4.png"} />
        </Grid>
        <Grid item md={6}>
          <Box component='img' src={"/image3.png"} />
        </Grid>
      </Grid> */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "4rem" }}>
        <Box component='img' src={"/image4.png"} />
        <Box component='img' src={"/image3.png"} />
      </Box>
      <Grid container sx={{ px: "6.5rem" }} justifyContent='space-between'>
        <Grid item md={7.9}>
          <Box sx={{ bgcolor: "#F5F5F5", borderRadius: "1rem", px: "1.5rem" }}>
            <Typography
              sx={{
                fontSize: " 1.5rem",
                fontWeight: 600,
                color: "#1A1A1A",
                pt: "1.5rem",
              }}
            >
              Here to know about this project
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                mt: "1.5rem",
              }}
            >
              Project description
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                mt: "1rem",
                fontWeight: 400,
              }}
            >
              {blogPost.projectDescription}
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                mt: "1.5rem",
                fontWeight: 500,
              }}
            >
              Type of Service Offered
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1rem",
                mt: "1rem",
                fontWeight: 400,
              }}
            >
              {blogPost.TypeOfServiceOffered}
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                mt: "1.5rem",
                fontWeight: 500,
              }}
            >
              Clients' Requirement/Problem
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1rem",
                mt: "1.5rem",
                fontWeight: 400,
              }}
            >
              {blogPost.ClientsRequirement}
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                mt: "1.5rem",
                fontWeight: 500,
              }}
            >
              Type of Solution We Came Up With
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1rem",
                mt: "1.5rem",
                fontWeight: 400,
                pb: "2.5rem",
              }}
            >
              {blogPost.TypeOfSolution}
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          md={3.9}
          sx={{ bgcolor: "#F5F5F5", borderRadius: "1rem", px: "1.5rem" }}
        >
          <Typography
            sx={{
              fontSize: " 1.5rem",
              fontWeight: 600,
              color: "#1A1A1A",
              mt: "1.5rem",
            }}
          >
            Information
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              Name:
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {projectinfo.name}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              Date:
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {projectinfo.date}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              value:
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {projectinfo.value}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              Category:
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {projectinfo.category}
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "1.5rem",
            }}
          >
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              Website:
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: "1.25rem",
                fontWeight: 400,
              }}
            >
              {projectinfo.website}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}
