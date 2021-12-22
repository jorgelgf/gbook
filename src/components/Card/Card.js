import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";
import SnackBarOn from "../SnackBar/SnackBarOn";
import SnackBarOff from "../SnackBar/SnackBarOff";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  borderRadius: "10px",
  bgcolor: "white",
  boxShadow: 24,
  alignText: "justify",
  p: 3,
};

export default function Card({ title, description, authors, date, read, img }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    //console.log("local: ", localStorage.getItem(title));
  };
  const handleClose = (title) => {
    setOpen(false);
  };

  const addFavor = (title, read, event) => {
    event.preventDefault();
    localStorage.setItem(title, [read]);
  };

  return (
    <>
      {" "}
      <div>
        <Button onClick={handleOpen} style={{ color: "black" }}>
          +Info
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  margin: "0 0 25px 0",
                }}
              >
                {" "}
                <div onClick={(event) => addFavor(title, read, event)}>
                  <SnackBarOn />
                </div>
                <div onClick={() => localStorage.removeItem(title)}>
                  <SnackBarOff />
                </div>
                <br />
              </div>
              {title}
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2, textAlign: "justify" }}
            >
              <b>Description:</b>
              {description.length > 299
                ? " " + description.substr(0, 300) + " [ ... ]"
                : `\n Without description `}
              <br />
              <br />
              <b>Authors:</b> {authors}
              <br />
              <br />
              <b>Publication Date: </b>
              {date}
              <br />
              <br />
              <b>
                Read:{" "}
                <a
                  rel="noreferrer"
                  href={read}
                  target="_blank"
                  style={{ textDecoration: "none", color: "blue" }}
                >
                  {" "}
                  Click here
                </a>
              </b>
              <br />
              <br />
              <ButtonX onClick={handleClose}>x</ButtonX>
            </Typography>
          </Box>
        </Modal>
      </div>
    </>
  );
}

const ButtonX = styled.button`
  margin: 10px;
  padding: 3px 3px 3px 3px;
  border-radius: 5px;
  width: 30px;
  color: white;
  border: none;
  background-color: #222222;
  margin-top: "50px";
  margin-left: 90%;
`;
