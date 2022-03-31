import styled from 'styled-components';
import { MenuItem, Select, TextField } from '@mui/material';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import SubjectIcon from '@mui/icons-material/Subject';
import ShortTextIcon from '@mui/icons-material/ShortText';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

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
        <SelectType defaultValue="radio">
          <TypeItem value="short">
            <ShortTextIcon />
            <ItemText>단답형</ItemText>
          </TypeItem>
          <TypeItem value="long">
            <SubjectIcon />
            <ItemText>장문형</ItemText>
          </TypeItem>
          <TypeItem value="radio">
            <RadioButtonCheckedIcon />
            <ItemText>객관식 질문</ItemText>
          </TypeItem>
          <TypeItem value="checkbox">
            <CheckBoxIcon />
            <ItemText>체크박스</ItemText>
          </TypeItem>
          <TypeItem value="dropdown">
            <ArrowDropDownCircleIcon />
            <ItemText>드롭다운</ItemText>
          </TypeItem>
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
    display: flex;
    vertical-align: middle;
    width: 208px;
    font-size: 0.875rem;
    color: ${theme.iconGrey};
    
    .MuiSvgIcon-root	{
      color: ${theme.iconGrey};
      margin-right: 16px;
    }
  }
  

  .MuiInputBase-root {
    &:focus {
      border: 2px solid ${theme.basicPurple};
    }
  }
`
);

const TypeItem = styled(MenuItem)(
  ({ theme }) => `
  .MuiMenuItem-root {
    color: ${theme.iconGrey};
  }

  .MuiSvgIcon-root	{
    margin-right: 16px;
    color: ${theme.iconGrey};
  }
`
);

const ItemText = styled.p(
  ({ theme }) => `
  font-size: 0.875rem;
  color: ${theme.iconGrey};
`
);

const Content = styled.div(({ theme }) => ``);

const Footer = styled.div(({ theme }) => ``);
