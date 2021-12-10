import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "styled-components";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  borderRadius: "10px",
  bgcolor: "white",
  //border: "2px solid #000",
  boxShadow: 24,
  alignText: "justify",
  p: 4,
};

export default function Card({ title, description }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Info</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, textAlign: "justify" }}
          >
            <p>
              <h3>Description</h3>
            </p>
            {description && description.length > 299
              ? description.substr(0, 300) + " [ ... ]"
              : description}

            <footer
              style={{ marginTop: "50px", textAlign: "right" }}
              onClick={handleClose}
            >
              <ButtonX>x</ButtonX>
            </footer>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
const ButtonX = styled.button`
  margin: 10px;
  padding: 3px 3px 3px 3px;
  border-radius: 5px;
  color: white;
  background-color: black;
`;