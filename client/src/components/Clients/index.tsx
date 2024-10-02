'use client';

import * as S from './styles';
import Image from 'next/image';

const Clients = () => {
  const imageSize = 40;

  const clients = [
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
    'user',
  ];

  return (
    <S.Wrapper>
      <S.ImagesContainer size={imageSize}>
        {clients.map((client, index) => (
          <S.ImageWrapper key={index} size={imageSize} index={index}>
            <Image
              src={`/images/clients/${client}.png`}
              alt={`Logo da QuickPage - ${client}`}
              layout="fill"
              objectFit="cover"
            />
          </S.ImageWrapper>
        ))}
      </S.ImagesContainer>
      <S.TextContainer>
        <S.Title>
          Inúmeros clientes <S.TextEffect>satisfeitos.</S.TextEffect>
        </S.Title>
      </S.TextContainer>
    </S.Wrapper>
  );
};

export default Clients;
