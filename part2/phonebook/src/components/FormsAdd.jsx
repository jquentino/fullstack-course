import React from 'react'

export const FormsAdd = (
	{
		handleSubmit,
		newName,
		handleNameChange,
		newNumber,
		handleNumberChange
	}) => {
	return (
      <form onSubmit={handleSubmit}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
	)
}
