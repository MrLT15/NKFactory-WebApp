import React from "react";
import { Typography, Box, Grid, Card, CardContent } from "@mui/material";
import { makeStyles } from "@mui/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

const useStyles = makeStyles((theme) => ({
  boxPositionCenter: {
    display: "flex",
    justifyContent: "center",
  },
  boxFlexDirectionColumn: {
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.down("md")]: {
      "& div": {
        fontSize: "16px",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& div": {
        fontSize: "14px",
      },
    },
  },
}));

function CardsSection() {
  const [blueprint, setBlueprint] = React.useState("");
  const handleChange = (event) => {
    setBlueprint(event.target.value);
  };
  const classes = useStyles();
  return (
    <Box sx={{ mt: "82px" }}>
      <Grid container spacing={2}>
        <Grid
          style={{ paddingLeft: "256px", paddingRight: "256px" }}
          item
          xs={12}
        >
          <Card style={{ minHeight: "164px", color: "black", display: "flex" }}>
            <Grid xs={12} lg={3}>
              <CardContent style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{ fontSize: 18, marginBottom: "10px" }}
                >
                  Build NiftyKicksss NFT
                </Button>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Shoes Blueprint
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={blueprint}
                    label="Select Shoes Blueprint"
                    onChange={handleChange}
                    style={{ color: "black" }}
                  >
                    <MenuItem value="" style={{ color: "black" }}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0} style={{ color: "black" }}>
                      Blueprint 1
                    </MenuItem>
                    <MenuItem value={1} style={{ color: "black" }}>
                      Blueprint 1
                    </MenuItem>
                    <MenuItem value={2} style={{ color: "black" }}>
                      Blueprint 1
                    </MenuItem>
                  </Select>
                </FormControl>
              </CardContent>
            </Grid>
            <Grid xs={12} lg={9}>
              <CardContent>
                <Box
                  sx={{ mt: 2 }}
                  className={classes.boxPositionCenter}
                  style={{ justifyContent: "space-evenly" }}
                >
                  <Box
                    sx={{ mx: "24px" }}
                    className={classes.boxFlexDirectionColumn}
                  >
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      variant="p"
                      component="div"
                    >
                      NKFE
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h5"
                      component="div"
                    >
                      0000
                    </Typography>
                  </Box>
                  <Box
                    sx={{ mx: "24px" }}
                    className={classes.boxFlexDirectionColumn}
                  >
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      variant="p"
                      component="div"
                    >
                      NKFT
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h5"
                      component="div"
                    >
                      0000
                    </Typography>
                  </Box>
                  <Box
                    sx={{ mx: "24px" }}
                    className={classes.boxFlexDirectionColumn}
                  >
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      variant="p"
                      component="div"
                    >
                      NKFL
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h5"
                      component="div"
                    >
                      0000
                    </Typography>
                  </Box>
                  <Box
                    sx={{ mx: "24px" }}
                    className={classes.boxFlexDirectionColumn}
                  >
                    <Typography
                      sx={{ fontSize: 18 }}
                      color="text.secondary"
                      variant="p"
                      component="div"
                    >
                      NKFR
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="h5"
                      component="div"
                    >
                      0000
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Grid>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsSection;
