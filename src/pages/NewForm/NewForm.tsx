import styled from 'styled-components';
import { Button } from '@mui/material';
import FormHeader from '../../components/FormEdit/FormHeader';
import Question from '../../components/FormEdit/Question';

export default function NewForm() {
  return (
    <Wrapper>
      <Main>
        <Section>
          <FormHeader />
        </Section>
        <Section>
          <Question />
          <Questions>
            <QuestionTitle placeholder="제목없는 질문" />
          </Questions>
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

const Questions = styled.div`
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
