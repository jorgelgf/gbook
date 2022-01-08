import React from "react";
import Find from "../Find/Find";
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
          <Find />
        </S.DivInter>
      </S.DivFull>
    </div>
  );
}
