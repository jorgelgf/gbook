import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import favo from "../../img/favo.png";
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
        <S.DivImageRight>
          <img src={favo} alt="off favorite" />
        </S.DivImageRight>
      </Button>
    </React.Fragment>
  );

  return (
    <div>
      {buttons}
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        message="I liked it"
        key={vertical + horizontal}
      />
    </div>
  );
}
