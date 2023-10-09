export default function Table({ tableContent, currentSaving, yearlySaving }) {
  const contentLength = tableContent.length;

  return (
    <div className='table-container'>
      {contentLength === 0 ? (
        <p>No Investment calculated yet</p>
      ) : (
        <table className='result'>
          <thead>
            <tr>
              <th>Year</th>
              <th>Total Savings</th>
              <th>Interest (Year)</th>
              <th>Total Interest</th>
              <th>Invested Capital</th>
            </tr>
          </thead>
          <tbody>
            {tableContent.map((item, index) => (
              <tr key={index}>
                <td>{item.year}</td>
                <td>${parseFloat(item.savingsEndOfYear).toFixed(2)}</td>
                <td>${parseFloat(item.yearlyInterest).toFixed(2)}</td>
                <td>
                  $
                  {parseFloat(
                    item.savingsEndOfYear -
                      currentSaving -
                      yearlySaving * index -
                      yearlySaving
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {parseFloat(
                    currentSaving + yearlySaving * index + yearlySaving
                  ).toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

{
  /* <tr>
  <td>YEAR NUMBER</td>
  <td>TOTAL SAVINGS END OF YEAR</td>
  <td>INTEREST GAINED IN YEAR</td>
  <td>TOTAL INTEREST GAINED</td>
  <td>TOTAL INVESTED CAPITAL</td>
</tr>; */
}
