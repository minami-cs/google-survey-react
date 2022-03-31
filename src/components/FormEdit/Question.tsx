import styled from 'styled-components';
import { MenuItem, Select, TextField } from '@mui/material';

export default function Question() {
  return (
    <QuestionBox>
      <Header>
        <Title
          fullWidth
          variant="filled"
          defaultValue="제목없는 질문"
          placeholder="질문"
        />
        <SelectType>
          <TypeItem value="short">단답형</TypeItem>
          <TypeItem value="long">장문형</TypeItem>
          <TypeItem value="radio">객관식 질문</TypeItem>
          <TypeItem value="checkbox">체크박스</TypeItem>
          <TypeItem value="dropdown">드롭다운</TypeItem>
        </SelectType>
      </Header>
      <Content>
        <div />
      </Content>
      <Footer>
        <div />
      </Footer>
    </QuestionBox>
  );
}

const QuestionBox = styled.div(
  ({ theme }) => `
  margin-top: 12px;
  padding: 20px;
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  background-color: ${theme.basicWhite};
`
);

const Header = styled.div(
  ({ theme }) => `
  display: flex;
`
);

const Title = styled(TextField)(
  ({ theme }) => `
  .MuiInputBase-input {
    padding: 16px;
    background-color: ${theme.paleGrey};
    
  }
  
  .MuiInputBase-root {
    &::after {
      border-bottom: 2px solid ${theme.basicPurple};
    }
  }
`
);

const SelectType = styled(Select)(
  ({ theme }) => `
  margin-left: 20px;

  .MuiSelect-select {
    width: 208px;
  }

  .MuiInputBase-root {
    &:focus {
      border: 2px solid ${theme.basicPurple};
    }
  }
`
);

const TypeItem = styled(MenuItem)(({ theme }) => ``);

const Content = styled.div(({ theme }) => ``);

const Footer = styled.div(({ theme }) => ``);
