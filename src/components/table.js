export default function Table({ tableContent, currentSaving, yearlySaving }) {
  const contentLength = tableContent.length;

  // tableContent에는 calculateHandler 함수가 form이 제출되면 바꿔준 정보가 들어있다. duration이 0 이하이면 대체 문구가 나타난다
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
              <tr key={item.year}>
                <td>{item.year}</td>
                <td>${parseFloat(item.savingsEndOfYear).toFixed(2)}</td>
                <td>${parseFloat(item.yearlyInterest).toFixed(2)}</td>
                <td>
                  $
                  {parseFloat(
                    item.savingsEndOfYear -
                      currentSaving -
                      yearlySaving * (index - 1)
                  ).toFixed(2)}
                </td>
                <td>
                  $
                  {parseFloat(
                    currentSaving + yearlySaving * (index + 1)
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
