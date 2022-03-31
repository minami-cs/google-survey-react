import styled from 'styled-components';
import { TextField } from '@mui/material';

export default function FormHeader() {
  const noNewLineInTitle = (e: any) => {
    if (e.key === 'Enter') e.preventDefault();
  };

  return (
    <Header>
      <TopBand />
      <Title
        fullWidth
        multiline
        variant={'standard' as any}
        defaultValue="제목 없는 설문지"
        onKeyDown={e => noNewLineInTitle(e)}
      />
      <Description
        fullWidth
        multiline
        variant={'standard' as any}
        placeholder="설문지 설명"
      />
    </Header>
  );
}

const Header = styled.div(
  ({ theme }) => `
  position: relative;
  padding: 18px 24px 24px 24px;
  border: 1px solid ${theme.borderColor};
  border-radius: 8px;
  background-color: ${theme.basicWhite};
`
);

const TopBand = styled.div(
  ({ theme }) => `
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  border-radius: 8px 8px 0 0;
  height: 10px;
  background-color: ${theme.basicPurple};
`
);

const Title = styled(TextField)(
  ({ theme }) => `
  .MuiInputBase-input {
    padding: 0;
    font-size: 32px;
    line-height: 1.5;
  }

  .MuiInputBase-root {
    &::before {
      border-color: ${theme.borderColor};
    }

    &::after {
      border-bottom: 2px solid ${theme.basicPurple};
    }
  }
`
);

const Description = styled(TextField)(
  ({ theme }) => `
  .MuiInputBase-input {
    margin-top: 5px;
    font-size: 14px;
  }

  .MuiInputBase-root {
    &::before {
      border-color: ${theme.borderColor};
    }

    &::after {
      border-bottom: 2px solid ${theme.basicPurple};
    }
  }
`
);
