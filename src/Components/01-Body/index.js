import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Chart from "../01-Body/Nav_Components/piechart";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CommentIcon from "@mui/icons-material/Comment";

const drawerWidth = 300;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function MainDrawer() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [checked, setChecked] = React.useState([0]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const [array, setArray] = React.useState(["All mail", "Trash", "Spam"]);

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        style={{ backgroundColor: "#0f0e0e", position: "absolute" }}
        open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: "none" }) }}>
            <MenuIcon />
          </IconButton>
          <Typography
            style={{
              fontFamily: "fancy, serif",
              textEmphasis: "700",
              flexGrow: 2,
              padding: "1%",
            }}
            variant='h3'
            component='div'>
            DISTRIBUTION DISPENSER
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        style={{ height: "70%", backgroundColor: "#720e07", marginTop: "10%" }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            maxHeight: "100%",
            backgroundColor: "#45050c",
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}>
        <DrawerHeader style={{ marginTop: "10%" }}>
          <Stack style={{ margin: "0 auto", paddingTop: "1%" }}>
            <h1
              style={{
                margin: "0 auto",
                fontFamily: "fancy, serif",
                textEmphasis: "bold",
                paddingTop: "1%",
                color: "#bec3c6",
                paddingTop: "4%",
                textAlign: "left",
              }}>
              Current Workload
            </h1>
            <a
              href='#'
              style={{
                textAlign: "center",
                width: "auto",
                color: "#F57A89",
                fontFamily: "fancy, serif",
              }}
              onClick={handleDrawerClose}>
              Close Menu
            </a>
          </Stack>
        </DrawerHeader>
        <Divider
          style={{
            borderTop: "3px double #bec3c6",
            color: "#bec3c6",
            marginTop: "5%",
          }}
        />
        <div style={{ padding: "1rem", backgroundColor: "#bec3c6" }}>
          <Chart />
        </div>
        <Divider
          style={{ borderTop: "3px double #bec3c6", color: "#bec3c6" }}
        />
        <List>
          {array.map((value, text, index) => (
            <ListItem button key={text}>
              <ListItemButton
                role={undefined}
                onClick={handleToggle(value)}
                dense>
                ,
                <ListItemIcon>
                  <Checkbox
                    edge='start'
                    checked={checked.indexOf(value) !== -1}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      "aria-labelledby": `checkbox-list-label-${value}`,
                    }}
                  />
                </ListItemIcon>
                <ListItemText
                  id={`checkbox-list-label-${value}`}
                  primary={`Line item ${value + 1}`}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </Main>
    </Box>
  );
}

// <Box style={{ marginTop: "5%", textAlign: "center" }}>
//   <div style={{ textAlign: "center", position: "sticky" }}>
//     <div
//       style={{
//         backgroundColor: "#45050c",
//         maxWidth: "25%",
//         borderTopRightRadius: "1rem",
//         borderBottomRightRadius: "1rem",
//       }}>
//       <Chart />
//     </div>
//     <Grid
//       item
//       xs={10}
//       sm={10}
//       md={7}
//       lg={7}
//       style={{ width: "100%", paddingRight: "0", marginLeft: "4%" }}>
//       <Item style={{ backgroundColor: "#e9f1f7", color: "black" }}>
//         <div style={{ minHeight: "10rem", paddingTop: "4%" }}>Hello</div>
//         <div style={{ minHeight: "10rem", paddingTop: "4%" }}>Hello</div>
//         <div style={{ minHeight: "10rem", paddingTop: "4%" }}>Hello</div>
//       </Item>
//     </Grid>
//   </div>
// </Box>
