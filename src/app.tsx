import { useEffect } from "react"
// import { customAxios } from "./utils/customAxios"

import { customAxios } from "./utils/customAxios"

const getBlack = async () => {
  try {
    const response = await customAxios.get('/cookie')
    console.log(response)
  }
  catch (err) {
    console.log(err)
  }

}

function App() {
  useEffect(() => {
    getBlack()

  }, [])
  return (
    <>
      <h1>App</h1>

    </>
  )
}

export default App
