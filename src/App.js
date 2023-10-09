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

  const calculateHandler = (userInput) => {
    userInput.preventDefault();

    // userInput은 key value로 picking이 가능한 객체에 해당한다
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    // yearlyData는 결과들을 담은 배열로서, 매년도의 결과를 보여주면 된다
    const yearlyData = []; // per-year results

    let currentSavings = parseInt(userInput.target[0].value); // feel free to change the shape of this input object!
    const yearlyContribution = parseInt(userInput.target[1].value); // as mentioned: feel free to change the shape...
    // 이자율은 퍼센트이므로 변환하는 과정임
    let expectedReturn = parseInt(userInput.target[2].value);
    expectedReturn = expectedReturn / 100;
    const duration = parseInt(userInput.target[3].value);

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    // do something with yearlyData ...
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

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <Table
        tableContent={tableContent}
        currentSaving={currentSaving}
        yearlySaving={yearlySaving}
      />
    </div>
  );
}

export default App;
