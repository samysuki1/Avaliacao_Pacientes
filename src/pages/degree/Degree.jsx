import { DEGREE_CONFIG } from "./Degree.config";
import * as S from "./Degree.styles";

export function Degree() {
  return (
    <S.Wrapper>
      <S.Title>{DEGREE_CONFIG.TITLE}</S.Title>
      <S.Content>
        <S.Paragraph>
          <span>o que eles costumam avaliar?</span> {DEGREE_CONFIG.DATA.INSTITUTION}
        </S.Paragraph>
        <S.Paragraph>
          <span>Quantidade de Estrelas</span> {DEGREE_CONFIG.DATA.COURSE}
        </S.Paragraph>
        <S.Paragraph>
          <span>Profisional Atencioso</span> {DEGREE_CONFIG.DATA.DURATION}
        </S.Paragraph>
        <S.Paragraph>
          <span>Agendamento Rápido</span> {DEGREE_CONFIG.DATA.START}
        </S.Paragraph>
      </S.Content>
    </S.Wrapper>
  );
}
