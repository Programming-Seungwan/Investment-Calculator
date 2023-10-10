import Header from './components/header';
import Form from './components/form';
import Table from './components/table';
import { useState } from 'react';

function App() {
  // 각각의 데이터를 상태로 관리하게 한다
  const [currentSaving, setCurrentSaving] = useState('');
  const [yearlySaving, setYearlySaving] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [investmentDuration, setInvestmentDureation] = useState('');
  const [tableContent, setTableContent] = useState([]);

  // 이벤트를 관리할 수 있는 핸들러 함수를 만들어서 각 컴포넌트에 전달한다
  function handleCurrentSaving(ev) {
    setCurrentSaving(parseInt(ev.target.value));
  }

  function handleYearlySaving(ev) {
    setYearlySaving(parseInt(ev.target.value));
  }

  function handleInterstRate(ev) {
    setInterestRate(parseInt(ev.target.value));
  }
  function handleInvestmentDuration(ev) {
    setInvestmentDureation(parseInt(ev.target.value));
  }
  function handleFormReset(ev) {
    ev.preventDefault();
    setCurrentSaving('');
    setYearlySaving('');
    setInterestRate('');
    setInvestmentDureation('');
    setTableContent([]);
  }

  // userInput은 key value로 picking이 가능한 객체에 해당한다
  // calculateHandler 함수는 form에 있는 정보들을 받아서 tableContent를 바꾸는 기능
  const calculateHandler = (userInput) => {
    userInput.preventDefault();

    // per-year results
    const yearlyData = [];

    let currentSavings = parseInt(userInput.target[0].value);
    const yearlyContribution = parseInt(userInput.target[1].value);
    let expectedReturn = parseInt(userInput.target[2].value);
    expectedReturn = expectedReturn / 100;
    const duration = parseInt(userInput.target[3].value);

    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }

    setTableContent([...yearlyData]);
  };

  return (
    <div>
      <Header />

      <Form
        currentSaving={currentSaving}
        yearlySaving={yearlySaving}
        interestRate={interestRate}
        investmentDuration={investmentDuration}
        handleCurrentSaving={handleCurrentSaving}
        handleYearlySaving={handleYearlySaving}
        handleInterstRate={handleInterstRate}
        handleInvestmentDuration={handleInvestmentDuration}
        calculateHandler={calculateHandler}
        handleFormReset={handleFormReset}
      />

      <Table
        tableContent={tableContent}
        currentSaving={currentSaving}
        yearlySaving={yearlySaving}
      />
    </div>
  );
}

export default App;
