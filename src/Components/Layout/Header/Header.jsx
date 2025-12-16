import * as React from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import Container from "@mui/material/Container"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Tooltip from "@mui/material/Tooltip"
import MenuItem from "@mui/material/MenuItem"
import AdbIcon from "@mui/icons-material/Adb"
import { useNavigate } from "react-router-dom"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import { Drawer } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
// const pages = ["Home", "About", "Services", "Project", "Blog"]

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "HITECH Group of Comapnies",
    path: "/group-of-companies",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Project",
    path: "/project",
  },
  //  {
  //   name: "Blog",
  //   path: "/blog",
  // },
]
const phoneNumber = "0303-7584921"



export const Header = () => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)
  const [menu, setMenu] = React.useState(false)
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }
  const handleLogout = (setting) => {
    setAnchorElUser(null)
    if (setting === "logout") {
      // Cookies.remove("access_token")
      navigate("/login")
    }
  }
  const settings = [
    "Profile",
    "Account",
    "Dashboard",
    // Cookies.get("access_token") ? "Logout" : "Login",
  ]


  return (
    <AppBar
      position='static'
      sx={{
        // bgcolor: "transparent",
        boxShadow: "none",
        height: { md: " 10.25rem" },
        py: "0.8rem",

        display: "flex",
        justifyContent: "center",
        bgcolor: "white",
      }}
    >
      <Container
        sx={{
          "&.MuiContainer-root ": {
            p: 0,
            maxWidth: "2120px",
          },
        }}
        // maxWidth='xl'
      >
        <Toolbar
          disableGutters
          sx={{
            pl: { xs: "1rem", md: "2rem", lg: "0.8rem" },
            pr: { xs: "1rem", md: "2rem", lg: "2rem" },
            justifyContent: "space-between",
            // alignItems: "center",
          }}
        >
          




{/* ====== LOGO SECTION START ====== */}
<Box
  sx={{
    display: "flex",
    alignItems: "center",
    gap: "2rem",
    cursor: "pointer",
  }}
  onClick={() => navigate("/")}
>
  
   {/* <Box // ==== Left Logos + Tagline ==== }
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center", // ✅ Center logos and tagline
      justifyContent: "center",
      // gap: "0.5rem",
      textAlign: "center", // ✅ Centers text nicely
    }}
  >

    <Typography
      variant="h3"
      sx={{
        fontSize: "0.9rem",
        color: "#4A4A4A",
        fontWeight: "bold",
        mt: "1.8rem",
        textAlign: "center", // optional — centers text if needed
        letterSpacing: "0.05rem", // adds a subtle professional spacing
      }}
    >
     HITECH GROUP OF COMAPNIES
    </Typography>


    
    <Box // Two Logos in a Row }
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center", // ✅ Center both logos
        alignItems: "center",
        gap: "1rem",
      }}
    >
      <Box
        component="img"
        src="/left-logo1.jpeg"
        alt="Left Logo 1"
        sx={{
          width: "80px",
          height: "80px",
          objectFit: "contain",
          display: { xs: "none", md: "flex" },
        }}
      />

      <Box
        component="img"
        src="/left-logo2.jpeg"
        alt="Left Logo 2"
        sx={{
          width: "80px",
          height: "80px",
          objectFit: "contain",
          display: { xs: "none", md: "flex" },
        }}
      />
    </Box>

    
    <Typography // Tagline Below Both Logos }
      variant="subtitle2"
      sx={{
        fontSize: "0.9rem",
        color: "#4A4A4A",
        fontStyle: "italic",
        fontWeight: 500,
        mt: "0.25rem",
      }}
    >
      Under the Umbrella of Hitech secondary solutions Pvt. Ltd.
    </Typography>
  </Box>  */}



  {/* ==== Main Center Logo ==== */}
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src="/logo.png"
      alt="Main Logo"
      sx={{
        width: "150px",
        height: "auto",
        display: { xs: "none", md: "flex" },
      }}
    />
   
  </Box>
</Box>
{/* ====== LOGO SECTION END ====== */}


          




          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size='large'
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={() => setMenu(true)}
              color='inherit'
            >
              <MenuIcon sx={{ color: "black" }} />
            </IconButton>
          </Box>
          <Drawer
            anchor='left'
            open={menu}
            onClose={() => setMenu(false)}
            sx={{
              // display: { laptop: "flex" },
              "& .MuiDrawer-paper": {
                width: { xs: "100%", sm: "50%" },
                height: "100%",
                // top: "10%",
                // zIndex: 0,
                // background: "rgba(0, 0, 0, 1)",
              },
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: "16px",
                textAlign: "center",
                // width: "100%",
                mx: "16px",
              }}
            >
              <IconButton
                onClick={() => setMenu(false)}
                sx={{
                  "&.MuiIconButton-root": {
                    padding: "0rem",
                  },
                }}
              >
                <CloseIcon />
              </IconButton>

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <Box
                  component='img'
                  src='/logo.png'
                  sx={{ width: "auto", maxWidth: "14rem", height: "71px" }}
                />
              </Box>
            </Box>
            <Box
              sx={{
                borderBottom: "2px solid #E0E0E0",
                mt: "16px",
              }}
            />
            <Box
              sx={{ display: "flex", flexDirection: "column", height: "100%" }}
            >
              <Box sx={{ height: "40%", mx: "16px", pt: "16px" }}>
                {pages.map((page, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      navigate(`${page.path}`)
                      setMenu(false)
                    }}
                  >
                    <Typography
                      sx={{
                        color: "#666666",
                        mr: { laptop: "24px", desktop: "48px" },
                        fontFamily: "mulish-regular",
                        fontSize: { laptop: "14px", desktop: "16px" },
                        p: "8px",
                        cursor: "pointer",
                        fontWeight:
                          location.pathname === `${page.path}` ? 700 : 500,
                      }}
                    >
                      {page.name}
                    </Typography>
                    <ChevronRightIcon sx={{ coloe: "#666666" }} />
                  </Box>
                ))}

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/")
                    setMenu(false)
                  }}
                >
                  <Typography
                    sx={{
                      color: "#666666",
                      mr: { laptop: "24px", desktop: "48px" },
                      fontFamily: "mulish-regular",
                      fontSize: { laptop: "14px", desktop: "16px" },
                      p: "8px",
                      cursor: "pointer",
                      fontWeight: location.pathname === "/" ? 700 : 500,
                    }}
                  >
                    About us
                  </Typography>
                  <ChevronRightIcon sx={{ coloe: "#666666" }} />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/Contact")
                    setMenu(false)
                  }}
                >
                  <Typography
                    sx={{
                      color: "#666666",
                      fontFamily: "mulish-regular",
                      p: "8px",
                      fontSize: { laptop: "14px", desktop: "16px" },
                      cursor: "pointer",
                      fontWeight: location.pathname === "/Contact" ? 700 : 500,
                    }}
                  >
                    Contact us
                  </Typography>
                  <ChevronRightIcon sx={{ coloe: "#666666" }} />
                </Box>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "#1A1A1A",
                  px: "24px",
                  pt: "16px",
                  mt: "16px",
                  height: "100%",
                }}
              >
                {/* <Box sx={{ border: "1px solid #4D4D4D", my: "8px" }} /> */}
              </Box>
              {/* <Box sx={{ border: "1px solid #4D4D4D" }} /> */}
              {/* <Box
                sx={{
                  // display: "flex",
                  // flexDirection: "column",
                  // justifyContent: "end",
                  bgcolor: "#1A1A1A",
                  // pt: "8px",
                }}
              >
                <Typography
                  sx={{ textAlign: "center", color: "#FFFFFF", py: "8px" }}
                >
                  Powered by GemCloud
                </Typography>
              </Box> */}
            </Box>
          </Drawer>
        
          <Box
            sx={{
              // flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
                justifyContent: "flex-end",
                gap: "3rem",
              },
            }}
          >
            {pages.map((page, index) => (
              <Button
                key={index}
                onClick={() => navigate(`${page.path}`)}
                sx={{
                  // my: 2,
                  color: "#1A1A1A",
                  display: "block",
                  // mr: "3.75rem",
                  fontSize: "1.25rem",
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Button
              onClick={() => navigate("/contact")}
              sx={{
                backgroundColor: "#61C112",
                color: "#fff",
                fontSize: { xs: "0.8rem", md: "1rem" },
                fontWeight: 400,
                // padding: "0.75rem 1.25rem",
                height: { md: "2.875rem" },
                borderRadius: " 0.625rem",
                "&:hover": {
                  backgroundColor: "#61C112",
                },
              }}
            >
              Contact us
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
