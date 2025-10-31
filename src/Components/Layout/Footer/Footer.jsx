// import * as React from "react"
// import Box from "@mui/material/Box"
// import { Button, Typography } from "@mui/material"
// import { useNavigate } from "react-router-dom"

// const services = [
//   "Wind Turbines",
//   "Panel Maintenance",
//   "Wind Generators",
//   "Solar PV Systems",
// ]
// const about = [
//   "Wind Turbines",
//   "Panel Maintenance",
//   "Wind Generators",
//   "Solar PV Systems",
// ]
// const projects = [
//   "Wind Turbines",
//   "Panel Maintenance",
//   "Wind Generators",
//   "Solar PV Systems",
// ]
// export const Footer = () => {
//   const navigate = useNavigate()

//   const [menuHeaderItem, setMenuHeaderItem] = React.useState([])

//   return (
//     <>
//       <Box
//         sx={{
//           mt: "48px",
//           // bgcolor: "#F5F5F5",
//           backgroundImage: "url(./footerbg.png)",
//           // height: "24rem",
//           pt: { md: "9.33rem" },
//         }}
//       >
//         <Box
//           sx={{
//             display: { sm: "flex" },
//             flexWrap: { sm: "wrap", md: "nowrap" },
//             // alignItems: { sm: "center" },
//             justifyContent: "space-between",
//             pt: { sm: "32px", md: "3.5rem" },
//             pb: { sm: "2rem", md: "3.5rem" },
//             px: { xs: "40px", md: "7rem" },
//           }}
//         >
//           <Box
//             sx={{
//               // width: { md: "517px" },
//               // ml: { md: "6.25rem" },
//               pt: { xs: "40px", sm: "0px" },
//             }}
//           >
//             <Box
//               onClick={() => navigate("/")}
//               component='img'
//               src='/logo.png'
//             />
//             <Box
//               sx={{
//                 display: "flex",
//                 alignItems: "start",
//                 mt: { xs: "1.8rem", md: "1.6rem" },
//               }}
//             >
//               <Box component='img' src='/location.png' />
//               <Typography
//                 sx={{
//                   width: { sm: "12rem" },
//                   ml: "1rem",
//                   color: " #1A1A1A",
//                   fontFamily: "Futura",
//                   fontSize: "1rem",
//                   fontStyle: "normal",
//                   fontWeight: 500,
//                   lineHeight: "normal",
//                 }}
//               >
//                 Office # 8, Lower Ground Center Point Plaza Spring North Phase-7
//                 Bahria Town, 46220
//               </Typography>
//             </Box>
//             <Box sx={{ display: "flex", alignItems: "start", mt: "1.6rem" }}>
//               <Box component='img' src='/phone.png' />
//               <Typography
//                 sx={{
//                   color: "#1A1A1A",
//                   fontFamily: "mulish-regular",
//                   width: { sm: "12rem" },
//                   ml: "1rem",
//                   fontFamily: "Futura",
//                   fontSize: "1rem",
//                   fontStyle: "normal",
//                   fontWeight: 500,
//                   lineHeight: "normal",
//                 }}
//               >
//                 +92312 3810022
//               </Typography>
//             </Box>
//           </Box>

//           <Box
//             sx={{
//               width: "145px",
//               mt: { xs: "32px", md: "0px" },
//               pb: { xs: "25px", sm: "0px" },
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "#000",
//                 fontSize: "20px",
//                 fontWeight: 700,
//                 fontFamily: "KaiseiDecol-Regular",
//               }}
//             >
//               services
//             </Typography>
//             {services.map((item, i) => (
//               <Typography
//                 // onClick={() =>
//                 //   navigate(`products/${item.parcel_type_ids?.toString()}`)
//                 // }
//                 key={i}
//                 sx={{
//                   color: "rgba(26, 26, 26, 0.40)",
//                   mt: i === 0 ? "2.5rem" : "1rem",
//                   fontFamily: "mulish-regular",
//                   cursor: "pointer",
//                 }}
//               >
//                 {item}
//               </Typography>
//             ))}
//           </Box>

//           <Box
//             sx={{
//               width: "145px",
//               // mt: { xs: "32px", md: "0px" },
//               pb: { xs: "25px", sm: "0px" },
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "#000",
//                 fontSize: "20px",
//                 fontWeight: 700,
//                 fontFamily: "KaiseiDecol-Regular",
//               }}
//             >
//               About
//             </Typography>
//             {about.map((link, i) => {
//               return (
//                 <Typography
//                   key={i}
//                   // onClick={() => handleNavigateToLink(link)}
//                   sx={{
//                     color: "rgba(26, 26, 26, 0.40)",
//                     mt: i === 0 ? "2.5rem" : "1rem",
//                     fontFamily: "mulish-regular",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {link}
//                 </Typography>
//               )
//             })}
//           </Box>
//           <Box
//             sx={{
//               width: "145px",
//               // mt: { xs: "32px", md: "0px" },
//               pb: { xs: "25px", sm: "0px" },
//             }}
//           >
//             <Typography
//               sx={{
//                 color: "#000",
//                 fontSize: "20px",
//                 fontWeight: 700,
//                 fontFamily: "KaiseiDecol-Regular",
//               }}
//             >
//               projects
//             </Typography>
//             {projects.map((link, i) => {
//               return (
//                 <Typography
//                   key={i}
//                   // onClick={() => handleNavigateToLink(link)}
//                   sx={{
//                     color: "rgba(26, 26, 26, 0.40)",
//                     mt: i === 0 ? "2.5rem" : "1rem",
//                     fontFamily: "mulish-regular",
//                     cursor: "pointer",
//                   }}
//                 >
//                   {link}
//                 </Typography>
//               )
//             })}
//           </Box>
//         </Box>
//         <Box
//           sx={{
//             border: "1px solid rgba(26, 26, 26, 0.40)",
//             mx: "6.5rem",
//           }}
//         />
//         <Typography
//           sx={{
//             fontWeight: 500,
//             color: "#1A1A1A",
//             textDecoration: "none",
//             fontFamily: "mulish-regular",
//             textAlign: "center",
//             py: "1.44rem",
//           }}
//         >
//           © Copyright 2023 HitechSkyEnergy
//         </Typography>
//       </Box>
//       <Box
//         sx={{
//           position: "relative",
//           display: { xs: "none", md: "flex" },
//           justifyContent: "center",
//           px: "11rem",
//           // pt: "6.5rem",
//         }}
//       >
//         <Box
//           sx={{
//             bgcolor: "#2B8DD2",
//             position: "absolute",
//             bottom: "28rem",
//             px: "3.63rem",
//             borderRadius: "0.625rem",
//             mx: "auto",
//           }}
//         >
//           <Typography
//             sx={{
//               color: "#FFF",
//               fontWeight: 700,
//               fontSize: "2.5rem",
//               textAlign: "center",
//               pt: "2.5rem",
//               lineHeight: "normal",
//             }}
//           >
//             Fastest & secure way to get clean, safe and renewable energy
//           </Typography>
//           <Box sx={{ display: "flex", justifyContent: "center", pb: "2.5rem" }}>
//             <Button
//               onClick={() => navigate("/contact")}
//               sx={{
//                 backgroundColor: "#61C112",
//                 color: "#fff",
//                 fontSize: "1.25rem",
//                 fontWeight: 400,
//                 padding: "0.75rem 1.25rem",
//                 height: "2.875rem",
//                 borderRadius: " 0.625rem",
//                 mt: "1.5rem",

//                 "&:hover": {
//                   backgroundColor: "#61C112",
//                 },
//               }}
//             >
//               Contact us
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </>
//   )
// }
import * as React from "react"
import Box from "@mui/material/Box"
import { Button, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom"

const services = [
  "Wind Turbines",
  "Panel Maintenance",
  "Wind Generators",
  "Solar PV Systems",
]
const about = [
  "Wind Turbines",
  "Panel Maintenance",
  "Wind Generators",
  "Solar PV Systems",
]
const projects = [
  "Wind Turbines",
  "Panel Maintenance",
  "Wind Generators",
  "Solar PV Systems",
]
export const Footer = () => {
  const navigate = useNavigate()

  const [menuHeaderItem, setMenuHeaderItem] = React.useState([])

  return (
    <>
      <Box
        sx={{
          mt: "48px",
          // bgcolor: "#F5F5F5",
          backgroundImage: "url(./footerbg.png)",
          // height: "24rem",
          pt: { md: "9.33rem" },
        }}
      >
        <Box
          sx={{
            display: { sm: "flex" },
            flexWrap: { sm: "wrap", md: "nowrap" },
            // alignItems: { sm: "center" },
            justifyContent: "space-between",
            pt: { sm: "32px", md: "3.5rem" },
            pb: { sm: "2rem", md: "3.5rem" },
            px: { xs: "40px", md: "7rem" },
          }}
        >
          <Box
            sx={{
              // width: { md: "517px" },
              // ml: { md: "6.25rem" },
              pt: { xs: "40px", sm: "0px" },
              display: "flex",
              alignItems: { md: "center" },
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box
              onClick={() => navigate("/")}
              component='img'
              src='/logo.png'
              sx={{ width: "7rem", height: "4rem" }}
            />
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  mt: { xs: "1.8rem", md: "1.6rem" },
                }}
              >
                <Box component='img' src='/location.png' />
                <Typography
                  sx={{
                    width: { sm: "12rem" },
                    ml: "1rem",
                    color: " #1A1A1A",
                    fontFamily: "Futura",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  Office # 8, Lower Ground Center Point Plaza Spring North
                  Phase-7 Bahria Town, 46220
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "start", mt: "1.6rem" }}>
                <Box component='img' src='/phone.png' />
                <Typography
                  sx={{
                    color: "#1A1A1A",
                    fontFamily: "mulish-regular",
                    width: { sm: "12rem" },
                    ml: "1rem",
                    fontFamily: "Futura",
                    fontSize: "1rem",
                    fontStyle: "normal",
                    fontWeight: 500,
                    lineHeight: "normal",
                  }}
                >
                  +92312 3810022
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            border: "1px solid rgba(26, 26, 26, 0.40)",
            mx: "6.5rem",
          }}
        />
        <Typography
          sx={{
            fontWeight: 500,
            color: "#1A1A1A",
            textDecoration: "none",
            fontFamily: "mulish-regular",
            textAlign: "center",
            py: "1.44rem",
          }}
        >
          © Copyright 2023 HitechSkyEnergy
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          px: "11rem",
          // pt: "6.5rem",
        }}
      >
        <Box
          sx={{
            bgcolor: "#2B8DD2",
            position: "absolute",
            bottom: "28rem",
            px: "3.63rem",
            borderRadius: "0.625rem",
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              color: "#FFF",
              fontWeight: 700,
              fontSize: "2.5rem",
              textAlign: "center",
              pt: "2.5rem",
              lineHeight: "normal",
            }}
          >
            Fastest & secure way to get clean, safe and renewable energy
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", pb: "2.5rem" }}>
            <Button
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "#61C112",
                color: "#fff",
                fontSize: "1.25rem",
                fontWeight: 400,
                padding: "0.75rem 1.25rem",
                height: "2.875rem",
                borderRadius: " 0.625rem",
                mt: "1.5rem",

                "&:hover": {
                  backgroundColor: "#61C112",
                },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  )
}
