import React from 'react'

const Form = ({ onChange, formData, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      <input name="username" type="text" value={formData.username} onChange={onChange} />
      <input name="email" type="email" value={formData.email} onChange={onChange} />
      <input name="website" type="text" value={formData.website} onChange={onChange} />
      <input name="city" type="text" value={formData.address?.city} onChange={onChange} />
      <input type="submit" />
    </form>
  )
}

export default Form
