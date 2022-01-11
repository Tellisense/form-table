import { useEffect, useState } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Table from './components/Table'

const initialForm = {
  id: "",
  username: "",
  email: "",
  "website": "",
  address: {
    city: ""
  }
}

function App() {
  const [called, setCalled] = useState(false)
  const [tableData, setTableData] = useState([])
  const [formData, setFormData] = useState(initialForm)


  useEffect(() => {
    const apiCall = async () => {
      try {
        if (!called) {
          const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
          setTableData(data)
        }
        setCalled(true)

      } catch (error) {
        console.log(`api call error`, error)
      }
    }
    apiCall()
  }, [called])

  const handleChange = (e) => {
    if (e.target.name === 'city') {
      setFormData({
        ...formData,
        address: {
          [e.target.name]: e.target.value
        }
      })
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setTableData([{ ...formData, id: Math.floor(Math.random() * 1000), }, ...tableData])
    setFormData(initialForm)

  }

  return (
    <>
      <Form onChange={handleChange} formData={formData} onSubmit={handleSubmit} />
      <Table tableData={tableData} />
    </>

  );
}

export default App;
