
export const FindInput = ({ inputValue, handleInputFunc }) => {
  return (
    <div>
      find countries <input type="text" value={inputValue} onChange={handleInputFunc}/>
    </div>
  )
}
