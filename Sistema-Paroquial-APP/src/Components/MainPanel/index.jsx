import { Card } from "@mui/material";
import * as S from "./style";

function MainPanel() {
  return (
    <S.MainPanelStyle>
      <Card className="panel">
        <h2>Sistema Paroquial</h2>
        <p>Versão 1.0</p>
      </Card>
    </S.MainPanelStyle>
  );
}

export default MainPanel;
