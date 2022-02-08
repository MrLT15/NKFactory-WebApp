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
  },
}));

function CardsSection() {
  const [molding, setMolding] = React.useState("");
  const handleChange = (event) => {
    setMolding(event.target.value);
  };
  const classes = useStyles();
  return (
    <Box sx={{ mt: "82px" }}>
      <Grid container spacing={2}>
        <Grid sx={{ px: 5 }} item xs={12} lg={8}>
          <Card style={{ minHeight: "164px", color: "black", display: "flex" }}>
            <Grid xs={12} lg={3}>
              <CardContent style={{ textAlign: "center" }}>
                <Button
                  variant="contained"
                  sx={{ fontSize: 18, marginBottom: "10px" }}
                >
                  Build Molding Machine NFT​
                </Button>
                <FormControl sx={{ m: 1, minWidth: 220 }}>
                  <InputLabel id="demo-simple-select-label">
                    Select Molding Machine
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={molding}
                    label="Select Molding Machine"
                    onChange={handleChange}
                    style={{ color: "black" }}
                  >
                    <MenuItem value="" style={{ color: "black" }}>
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={0} style={{ color: "black" }}>
                      Basic
                    </MenuItem>
                    <MenuItem value={1} style={{ color: "black" }}>
                      Modern
                    </MenuItem>
                    <MenuItem value={2} style={{ color: "black" }}>
                      Advance
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
        <Grid sx={{ px: 5 }} item xs={12} lg={4}>
          <Card style={{ minHeight: "144px" }}>
            <CardContent style={{ textAlign: "center" }}>
              <Button
                variant="contained"
                sx={{ fontSize: 18, marginBottom: "10px" }}
              >
                Claim NKFR​
              </Button>
              <Typography
                sx={{ textAlign: "center" }}
                color="text.secondary"
                variant="h5"
                component="div"
              >
                0000​
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CardsSection;
