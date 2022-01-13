import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import dfavo from "../../img/dfavo.png";
import * as S from "./style";

export default function PositionedSnackbar() {
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => async () => {
    await setState({ open: true, ...newState });
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const handleClose = async () => {
    await setState({ ...state, open: false });
  };

  const buttons = (
    <React.Fragment>
      <Button
        onClick={handleClick({
          vertical: "top",
          horizontal: "right",
        })}
      >
        <S.DivImageLeft>
          <img src={dfavo} alt="on favorite" />
        </S.DivImageLeft>
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        style={{ marginBottom: "400px" }}
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I stopped liking"
        key={vertical + horizontal}
      />
    </div>
  );
}
