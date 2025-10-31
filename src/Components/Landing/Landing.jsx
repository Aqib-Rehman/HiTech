import { Box, Button, Container, Rating, Typography } from "@mui/material"

export const Landing = () => {
  return (
    <Container
      sx={{
        "&.MuiContainer-root ": {
          p: 0,
          // px: { md: "2.9rem" },
          maxWidth: "2160px",
          // maxWidth: "100%",
        },
      }}
    >
      <Box
        loading='lazy'
        sx={{
          backgroundImage: [
            // "linear-gradient(90deg, #FFF 0%, rgba(255, 255, 255, 0.00) 68.07%)",
            "url(./herobg2.jpg)",
          ],
          height: { xs: "15rem", md: "90vh", xl: "64rem" },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // display: "flex",
          // alignItems: "center",
          // justifyContent: "center",
          // flexShrink: 0,
          // filter: "blur(10px)", // Add a blur effect
        }}
      >
        <Box
          sx={{
            pt: { xs: "60px", md: "113px" },
            pl: { md: "104px" },
            px: "1rem",
          }}
        >
          <Typography
            sx={{
              color: "#61C112",
              fontSize: { xs: "28px", md: "60px" },
              fontWeight: 700,
              lineHeight: "normal",
            }}
          >
            Powering A Sustainable Future
          </Typography>
          <Typography
            sx={{
              pt: { xs: "1rem", md: "23px" },
              width: { md: "545px" },
              color: { xs: "rgba(0, 0, 0, 0.40)", md: "#1A1A1A" },
              fontWeight: 400,
              fontSize: { xs: "12px", md: "16px" },
              display: { xs: "none", md: "block" },
            }}
          >
            Welcome to HitechSkyEnergy, where we empower you to power your world
            with clean, renewable energy. Our state-of-the-art solar solutions
            tap into the limitless potential of the sun, providing you with a
            sustainable and eco-friendly way to meet your energy needs. Discover
            the benefits of solar power and embrace a greener future with us.
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          "&.MuiContainer-root ": {
            p: 0,
            // px: { md: "2.9rem" },
            maxWidth: "1440px",
            // maxWidth: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            mt: "4rem",
            px: { xs: "1.2rem", sm: "8rem", md: "2.9rem" },
          }}
        >
          <Box sx={{ display: "flex" }}>
            {/* <Box component='img' src={"./HITECH-SOLAR.png"} /> */}
            <Box
              component='img'
              src={"/solar-panels.png"}
              sx={{
                height: { xs: "100%", md: "23rem" },
                width: { xs: "100%", md: "23rem" },
                mt: { xs: "2rem", md: "0rem" },
              }}
            />
            {/* <Box
              component='img'
              src={"./penels-placement.png"}
              sx={{position:"relative", right:"10%" }}
            /> */}
          </Box>
          <Box sx={{ ml: { md: "7.44rem" } }}>
            <Typography
              sx={{
                color: " #61C112",

                // fontFamily: "Degular Display",
                fontSize: { xs: "1.8rem", md: "2.5rem" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              About Us
            </Typography>
            <Typography
              sx={{
                color: "#000",
                // fontFamily: "Degular Display",
                fontSize: { sm: "1.6rem", md: "2.5rem" },
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: { md: "normal" },
                mt: "1rem",
              }}
            >
              Empowering a Sustainable Future through Innovative Solar Solutions
            </Typography>
            <Typography
              sx={{
                color: "rgba(0, 0, 0, 0.40)",
                fontFamily: "Futura",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
                mt: "1.5rem",
              }}
            >
              Welcome to HitechSkyEnergy, a leading provider of comprehensive
              solar energy solutions. With a passion for sustainability and a
              commitment to excellence, we are dedicated to revolutionizing the
              way we power our world.
            </Typography>
            <Typography
              sx={{
                // width: "34.875rem",
                color: "var(--kelly-green, #61C112)",
                fontFamily: "Futura",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                mt: "1.5rem",
              }}
            >
              We have 10+ years of experience in power supply and renewable
              energy solutions
            </Typography>
            {/* <Typography
              sx={{
                color: "var(--eerie-black, #1A1A1A)",
                fontFamily: "Futura",
                fontSize: "1.25rem",
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: "normal",
                mt: "2.5rem",
              }}
            >
              Have any question? Give us a call
            </Typography> */}
          </Box>
        </Box>
      </Container>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          mt: { md: "5rem" },
          gap: { xs: "2rem", md: "7rem" },
          py: "3rem",
          bgcolor: { md: "#F5F5F5" },
          // mx:"auto"
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Count percentage={100}>
              <Typography
                sx={{
                  fontSize: { md: "40px" },
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                20+
              </Typography>
            </Count>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#1A1A1A",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 600,
              mt: "24px",
            }}
          >
            Years of Experience
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Count percentage={100}>
              <Typography
                sx={{
                  fontSize: { md: "40px" },
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                3000+
              </Typography>
            </Count>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#1A1A1A",
              fontSize: { xs: "1.5rem", md: "2rem" },
              fontWeight: 600,
              mt: "24px",
            }}
          >
            Projects Completed
          </Typography>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Count percentage={90}>
              <Typography
                sx={{
                  fontSize: { md: "40px" },
                  fontWeight: 700,
                  color: "#1A1A1A",
                }}
              >
                90%
              </Typography>
            </Count>
          </Box>
          <Typography
            sx={{
              textAlign: "center",
              color: "#1A1A1A",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontWeight: 600,
              mt: "24px",
            }}
          >
            Customer Satisfaction
          </Typography>
        </Box>
      </Box>
      <Container
        sx={{
          "&.MuiContainer-root ": {
            p: 0,
            // px: { md: "2.9rem" },
            maxWidth: "1440px",
            // maxWidth: "100%",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column-reverse", md: "row" },
            mt: "3rem",
            px: { xs: "1.2rem", sm: "8rem", md: "2.9rem" },
          }}
        >
          <Box
            component='img'
            src={"/pexelsbulb.png"}
            sx={{ mt: { xs: "1.5rem", md: "0rem" } }}
            loading='lazy'
          />

          <Box
            sx={{
              bgcolor: { md: "#F5F5F5" },
              ml: { md: "1.5rem" },
              pl: { md: "1.5rem" },
            }}
          >
            <Typography
              sx={{
                color: " #61C112",

                // fontFamily: "Degular Display",
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                mt: { xs: "3rem", md: "8.12rem" },
              }}
            >
              Our Vision
            </Typography>
            <Typography
              sx={{
                color: "#000",
                // fontFamily: "Degular Display",
                fontSize: { xs: "0.9rem", md: "1.5rem" },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: { md: "normal" },
                mt: { xs: "0.8rem", md: "1.5rem" },
                width: { md: "80%" },
                mb: "1.5rem",
              }}
            >
              "To lead the way in the renewable energy revolution, offering
              groundbreaking solar and wind solutions that empower individuals
              and businesses to embrace eco-friendly practices, minimize their
              carbon footprint, and contribute positively to the environment."
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            mt: { md: "2.5rem" },
            px: { xs: "1.2rem", sm: "8rem", md: "2.9rem" },
          }}
        >
          <Box
            sx={{
              bgcolor: { md: "#F5F5F5" },
              mr: { md: "1.5rem" },
              pl: { md: "1.5rem" },
            }}
          >
            <Typography
              sx={{
                color: " #61C112",

                // fontFamily: "Degular Display",
                fontSize: { xs: "1.5rem", md: "2.5rem" },
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
                mt: { xs: "3rem", md: "8.12rem" },
              }}
            >
              Our Mission
            </Typography>
            <Typography
              sx={{
                color: "#000",
                // fontFamily: "Degular Display",
                fontSize: { xs: "0.9rem", md: "1.5rem" },
                fontStyle: "normal",
                fontWeight: 500,
                lineHeight: { md: "normal" },
                mt: { xs: "0.8rem", md: "1.5rem" },
                width: { md: "80%" },
                mb: "1.5rem",
              }}
            >
              "To lead the way in the renewable energy revolution, offering
              groundbreaking solar and wind solutions that empower individuals
              and businesses to embrace eco-friendly practices, minimize their
              carbon footprint, and contribute positively to the environment."
            </Typography>
          </Box>
          <Box
            component='img'
            src={"/pexelsPanels.png"}
            sx={{ mt: { xs: "1.5rem", md: "0rem" } }}
          />
        </Box>
      </Container>
      <Box
        // sx={{
        //   display: "flex",
        //   flexDirection: { xs: "column-reverse", md: "row" },
        //   bgcolor: "#F5F5F5",
        //   mt: { xs: "3rem", md: "100px" },
        //   px: { xs: "1.2rem", md: "2.9rem" },
        // }}
        sx={{ textAlign: "center" }}
      >
        {/* <Box component='img' src={"/pexelsbulb.png"} sx={{display:{xs:"none"}}}/> */}
        <Box
          sx={{
            bgcolor: "#F5F5F5",
            // ml: { md: "1.5rem" },
            // pl: { md: "1.5rem" },
            px: {
              xs: "1.2rem",
              sm: "10rem",
              md: "10rem",
              lg: "20rem",
              xl: "30rem",
            },
            py: { xs: "2rem", md: "2.9rem" },
            mt: "2rem",
            mb: { md: "12rem" },
          }}
        >
          <Typography
            sx={{
              color: " #61C112",

              // fontFamily: "Degular Display",
              fontSize: { xs: "1.5rem", md: "2.5rem" },
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              mt: { md: "1.12rem" },
            }}
          >
            About The Founder
          </Typography>
          <Typography
            sx={{
              color: "#000",
              // fontFamily: "Degular Display",
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontStyle: "normal",
              fontWeight: 500,
              // lineHeight: "normal",
              mt: "1.5rem",
              // width: { md: "60%" },
            }}
          >
            “Empowering the world with renewable energy and a brighter tomorrow”
          </Typography>
          <Typography
            sx={{
              color: "rgba(0, 0, 0, 0.40)",
              // fontFamily: "Degular Display",
              fontSize: { xs: "0.8rem", md: "1.25rem" },
              fontStyle: "normal",
              fontWeight: 400,
              // lineHeight: "normal",
              mt: "1.5rem",
              // width: { md: "60%" },
            }}
          >
            "Introducing Imtiaz Ishaq, the visionary driving force behind
            HitechSkyEnergy. With an unwavering passion for renewable energy and
            sustainability, he founded the company to transform the way we
            harness power. Imtiaz Ishaq's leadership inspires us to forge a
            greener and more sustainable world through pioneering solar
            solutions."
          </Typography>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", mb: "8rem" }}>
        {/* <Typography
          sx={{
            color: " #61C112",

            // fontFamily: "Degular Display",
            fontSize: "2.5rem",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            mt: "4rem",
          }}
        >
          Our Team
        </Typography>
        <Typography
          sx={{
            color: "#1A1A1A)",
            // fontFamily: "Degular Display",
            fontSize: "20px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            mt: "1rem",
          }}
        >
          Meet Our Expert Members
        </Typography> */}
      </Box>
    </Container>
  )
}

const Count = ({ children, percentage }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: { xs: "100px", md: "180px" },
        height: { xs: "100px", md: "180px" },
        borderRadius: "50%",
        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),
                  conic-gradient( #61C112 ${percentage}%, #F5F5F5 0)`,
        // "&::before": {
        //   content: "'75%'",
        // },
      }}
    >
      {children}
    </Box>
  )
}

// import React from "react"
// import { Typography, Container, Box } from "@mui/material"

// export const Landing = () => {
//   return (
//     <Container

//       // maxWidth='xs'
//       sx={{
//         "&.MuiContainer-root ": {
//           p: 0,
//           maxWidth: "1540px",
//         },

//         // display: "flex",
//         // flexDirection: "column",
//         // alignItems: "center",
//         backgroundImage: `url("./footerbg.png")`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//       }}
//     >
//       <Box
//         sx={{
//           backgroundImage: "url(./herobg.png)",
//           height: "44.375rem", // Full viewport height
//           width: "100%", // Full viewport width
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           flexShrink: 0,
//           // color: "#fff",
//           // fontSize: "32px",
//           // marginTop: "-77px", // Adjust this to match the height of your AppBar
//         }}
//       ></Box>
//       <Container
//         sx={{
//           "&.MuiContainer-root ": {
//             // p: 0,
//             px: "2.9rem",
//             // maxWidth: "1440px",
//             maxWidth: "100%",

//           },
//         }}
//       >
//         <Box sx={{ display: "flex", mt: "4rem" }}>
//           <Box sx={{ display: "flex" }}>
//             <Box component='img' src={"./HITECH-SOLAR.png"} />
//             <Box
//               component='img'
//               src={"./solar-panels.png"}
//               sx={{ height: "23rem", width: "23rem" }}
//             />
//             {/* <Box
//               component='img'
//               src={"./penels-placement.png"}
//               sx={{position:"relative", right:"10%" }}
//             /> */}
//           </Box>
//           <Box sx={{ ml: "7.44rem" }}>
//             <Typography
//               sx={{
//                 color: " #61C112",

//                 // fontFamily: "Degular Display",
//                 fontSize: "2.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 lineHeight: "normal",
//               }}
//             >
//               About Us
//             </Typography>
//             <Typography
//               sx={{
//                 color: "#000",
//                 // fontFamily: "Degular Display",
//                 fontSize: "2.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 600,
//                 lineHeight: "normal",
//                 mt: "1rem",
//               }}
//             >
//               Empowering a Sustainable Future through Innovative Solar Solutions
//             </Typography>
//             <Typography
//               sx={{
//                 color: "rgba(0, 0, 0, 0.40)",
//                 fontFamily: "Futura",
//                 fontSize: "1.25rem",
//                 fontStyle: "normal",
//                 fontWeight: 400,
//                 lineHeight: "normal",
//                 mt: "1.5rem",
//               }}
//             >
//               Welcome to Hitech Solar Solutions, a leading provider of
//               comprehensive solar energy solutions. With a passion for
//               sustainability and a commitment to excellence, we are dedicated to
//               revolutionizing the way we power our world.
//             </Typography>
//             <Typography
//               sx={{
//                 // width: "34.875rem",
//                 color: "var(--kelly-green, #61C112)",
//                 fontFamily: "Futura",
//                 fontSize: "1.25rem",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 mt: "1.5rem",
//               }}
//             >
//               We have 10+ years of experience in power supply and renewable
//               energy solutions
//             </Typography>
//             <Typography
//               sx={{
//                 color: "var(--eerie-black, #1A1A1A)",
//                 fontFamily: "Futura",
//                 fontSize: "1.25rem",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 mt: "2.5rem",
//               }}
//             >
//               Have any question? Give us a call
//             </Typography>
//           </Box>
//         </Box>
//       </Container>
//       <Container
//         sx={{
//           "&.MuiContainer-root ": {
//             p: 0,
//             px: "2.9rem",
//             // maxWidth: "1440px",
//             maxWidth: "100%",
//             pb: "13rem ",
//           },
//         }}
//       >
//         <Box sx={{ display: "flex" }}>
//           <Box component='img' src={"/pexelsbulb.png"} />
//           <Box sx={{ bgcolor: "#F5F5F5", ml: "1.5rem", pl: "1.5rem" }}>
//             <Typography
//               sx={{
//                 color: " #61C112",

//                 // fontFamily: "Degular Display",
//                 fontSize: "2.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 lineHeight: "normal",
//                 mt: "8.12rem",
//               }}
//             >
//               Our Vision
//             </Typography>
//             <Typography
//               sx={{
//                 color: "#000",
//                 // fontFamily: "Degular Display",
//                 fontSize: "1.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 // lineHeight: "normal",
//                 mt: "1.5rem",
//               }}
//             >
//               A world powered by clean and sustainable energy, leading the way
//               towards a greener and brighter future for all.
//             </Typography>
//           </Box>
//         </Box>
//         <Box sx={{ display: "flex", mt: "2.5rem" }}>
//           <Box sx={{ bgcolor: "#F5F5F5", mr: "1.5rem", pl: "1.5rem" }}>
//             <Typography
//               sx={{
//                 color: " #61C112",

//                 // fontFamily: "Degular Display",
//                 fontSize: "2.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 700,
//                 lineHeight: "normal",
//                 mt: "8.12rem",
//               }}
//             >
//               Our Vision
//             </Typography>
//             <Typography
//               sx={{
//                 color: "#000",
//                 // fontFamily: "Degular Display",
//                 fontSize: "1.5rem",
//                 fontStyle: "normal",
//                 fontWeight: 500,
//                 lineHeight: "normal",
//                 mt: "1.5rem",
//               }}
//             >
//               A world powered by clean and sustainable energy, leading the way
//               towards a greener and brighter future for all.
//             </Typography>
//           </Box>
//           <Box component='img' src={"/pexelsPanels.png"} />
//         </Box>
//       </Container>
//     </>
//   )
// }

// import React from "react"
// import { Typography, Container, Box } from "@mui/material"

// export const Landing = () => {
//   return <ComingSoon />
// }

// const ComingSoon = () => {
//   // const classes = useStyles()

//   // Calculate the time remaining for the countdown

//   return (
//     <Container
//       // maxWidth='xs'
//       sx={{
//         "&.MuiContainer-root ": {
//           p: 0,
//           maxWidth: "1540px",
//         },

//         // display: "flex",
//         // flexDirection: "column",
//         // alignItems: "center",
//         backgroundImage: `url("./footerbg.png")`,
//         backgroundSize: "cover",
//         backgroundRepeat: "no-repeat",
//         minHeight: "100vh",
//       }}
//     >
//       <Box
//         sx={{
//           // backgroundColor: "rgba(255, 255, 255, 0.8)",
//           padding: 4,
//           borderRadius: 1,
//           textAlign: "center",
//           pt: 8,
//         }}
//       >
//         <Typography variant='h4' component='h1' gutterBottom>
//           Website Under Maintenance
//         </Typography>
//         <Typography variant='subtitle1'>
//           We apologize for the inconvenience. Please check back later.
//         </Typography>

//         {/* You can add your custom call-to-action buttons or other components here */}
//       </Box>
//     </Container>
//   )
// }
