import styled from 'styled-components';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Button } from '@mui/material';
import FormHeader from '../../components/FormEdit/FormHeader';

export default function NewForm() {
  return (
    <Wrapper>
      <Main>
        <Section>
          <FormHeader />
          <Header>
            <HeaderTitle placeholder="제목 없는 설문지" />
            <AcUnitIcon />
            <HeaderDescription placeholder="설문지 설명" />
          </Header>
        </Section>
        <Section>
          <Question>
            <QuestionTitle placeholder="제목없는 질문" />
          </Question>
        </Section>
        <SubmitButton variant="outlined" color="primary">
          미리보기
        </SubmitButton>
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
`;

const Main = styled.main`
  max-width: 770px;
  margin: 0 auto;
  padding-top: 20px;
`;

const Section = styled.section``;

const Header = styled.div`
  padding: 22px 24px 24px 24px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.basicWhite};
`;

const HeaderTitle = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const HeaderDescription = styled.textarea`
  resize: none;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const Question = styled.div`
  margin-top: 12px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.borderColor};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.basicWhite};
`;

const QuestionTitle = styled.textarea`
  resize: none;
  width: 446px;
  border: 1px solid ${({ theme }) => theme.borderColor};
`;

const SubmitButton = styled(Button)``;
