import React from "react";
import Header from "../header/Header";
import MenuTop from "../../Menu/MenuTop";
import * as S from "./styles";

export default function Home() {
  return (
    <div>
      <S.DivFull>
        <S.DivInter>
          <S.MenuBar>
            <MenuTop />
          </S.MenuBar>
          <Header />
        </S.DivInter>
      </S.DivFull>
    </div>
  );
}
