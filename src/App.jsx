import { Button } from "./components/button"

function App() {
  return (
    <div>
      <form>
        <input  type="text" placeholder="First Name" /> <br />
        <input type="text" placeholder="Email" /> <br />
        <Button label="Submit" className="text-orange-500"/>
        <Button label="Click Here" className="text-red-500 bg-purple-700"/>
        <Button label="Read More"/>
      </form>
    </div>
  )
}

export default App