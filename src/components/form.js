export default function Form({
  currentSaving,
  yearlySaving,
  interestRate,
  investmentDuration,
  handleCurrentSaving,
  handleYearlySaving,
  handleInterstRate,
  handleInvestmentDuration,
  handleFormReset,
  calculateHandler,
}) {
  return (
    <form className='form' onSubmit={calculateHandler}>
      <div className='input-group'>
        <p>
          <label htmlFor='current-savings'>Current Savings ($)</label>
          <input
            type='number'
            id='current-savings'
            name='current-savings'
            value={currentSaving}
            onChange={handleCurrentSaving}
          />
        </p>
        <p>
          <label htmlFor='yearly-contribution'>Yearly Savings ($)</label>
          <input
            type='number'
            id='yearly-contribution'
            name='yearly-savings'
            value={yearlySaving}
            onChange={handleYearlySaving}
          />
        </p>
      </div>
      <div className='input-group'>
        <p>
          <label htmlFor='expected-return'>
            Expected Interest (%, per year)
          </label>
          <input
            type='number'
            id='expected-return'
            name='interest-rate'
            value={interestRate}
            onChange={handleInterstRate}
          />
        </p>
        <p>
          <label htmlFor='duration'>Investment Duration (years)</label>
          <input
            type='number'
            id='duration'
            name='investment-duration'
            value={investmentDuration}
            onChange={handleInvestmentDuration}
          />
        </p>
      </div>
      <p className='actions'>
        <button type='submit' className='buttonAlt' onClick={handleFormReset}>
          Reset
        </button>
        <button type='submit' className='button'>
          Calculate
        </button>
      </p>
    </form>
  );
}
