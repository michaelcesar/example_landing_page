'use client';

import * as S from './styles';
import Image from 'next/image';

const Assessments = () => {
  const wh = 50;

  return (
    <S.Assessments>
      <S.Wrapper>
        <S.BoxLeft>
          <S.SubTitle>Qualidade e Segurança</S.SubTitle>
          <S.Title>Confie em quem é de confiança</S.Title>
          <S.Text>
          Descubra um novo nível de experiência digital com nossos sites desenvolvidos com foco em UX/UI. Criamos plataformas intuitivas que facilitam a navegação e a interação do usuário. Com design responsivo e atraente, seu site não apenas impressiona, mas também guia os visitantes de forma eficiente.
          </S.Text>
        </S.BoxLeft>
        <S.BoxRight>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            <S.Title>Michael César</S.Title>
            <S.TextEffect style={{ fontSize: '16px', fontWeight: '500' }}>
              Web Developer and UX/UI Design
            </S.TextEffect>
          </div>
          <S.Text style={{ fontWeight: '400' }}>
          Acredito que grandes conquistas nunca são feitas isoladamente. Minha especialidade é elevar a percepção de valor de empresas, produtos ou serviços por meio de um design mais sofisticado e marcante.
          </S.Text>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
            }}
          >
            <Image
              src="/images/clients/michael.webp"
              width={wh}
              height={wh}
              alt="Michael"
            />
            <S.Text
              style={{ fontWeight: '400', fontSize: '12px', width: '50%' }}
            >
              Produtos digitais que mudam vidas e negócios.
              
            </S.Text>
          </div>
        </S.BoxRight>
      </S.Wrapper>
    </S.Assessments>
  );
};

export default Assessments;
