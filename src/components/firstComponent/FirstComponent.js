import { Title } from './FirstComponent.styled';

export const FirstComponent = ({ title }) => {
  return (
    <>
      {title && <Title>{title}</Title>}
      <Title>Hello 2</Title>
    </>
  );
};
