import React, { useState } from "react";
import { Box, Typography, Modal, Button, Link } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PropTypes from "prop-types";
import Login from "../Login/Login";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 485,
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "6px",
  boxShadow: 24,
  p: 4,
};

const WaxCloudButton = styled(Button)(({ theme }) => ({
  height: "70px",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: theme.palette.text.secondary,
  "&:hover": {
    backgroundColor: theme.palette.text.primary,
    color: theme.palette.text.secondary,
  },
}));

const AnchorButton = styled(Button)(({ theme }) => ({
  height: "70px",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "#2D479C",
  "&:hover": {
    backgroundColor: "#1E2B53",
  },
}));

const LoginButton = styled(Button)(({ theme }) => ({
  height: "70px",
  width: "100%",
  color: theme.palette.text.primary,
  backgroundColor: "#2D479C",
  "&:hover": {
    backgroundColor: "#1E2B53",
  },
}));

function ModalLogin({ open, handleClose }) {
  const [opens, setOpens] = React.useState(false);
  const loginOpen = () => setOpens(true);
  const loginClose = () => setOpens(false);

  return (
    <>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            color="text.secondary"
            sx={{ mt: "16px" }}
            variant="h4"
            style={{ fontWeight: 700 }}
          >
            To Continue Please Select An Option
          </Typography>
          <Box sx={{ my: "32px" }}>
            <WaxCloudButton
              sx={{ mb: "32px" }}
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              Wax Cloud Wallet
            </WaxCloudButton>
            <AnchorButton
              sx={{ mb: "32px" }}
              variant="contained"
              endIcon={<ArrowForwardIosIcon />}
            >
              Anchor Wallet
            </AnchorButton>
            <LoginButton
              sx={{ mb: "32px" }}
              variant="contained"
              onClick={loginOpen}
            >
              Login
            </LoginButton>
            <Link
              style={{
                display: "flex",
                alignItems: "center",
              }}
              sx={{ mt: "48px" }}
              href="#"
              underline="none"
              color="primary"
            >
              Learn More
              <KeyboardArrowDownIcon color="primary" />
            </Link>
          </Box>
        </Box>
      </Modal>
      <Modal
        //hideBackdrop
        open={opens}
        onClose={loginClose}
        //  aria-labelledby="child-modal-title"
        //  aria-describedby="child-modal-description"
      >
        <Box>
          <Login />
        </Box>
      </Modal>
    </>
  );
}

ModalLogin.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalLogin;
