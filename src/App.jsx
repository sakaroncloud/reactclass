import { Button } from "./components/button"
import { Card } from "./components/card"

function App() {
  const users = [{
    name: "chirinjivi",
    email: "chirinjivi@gmail.com"
  },
  {
    name: "sakar",
    email: "sakar@gmail.com"
  }
  ]
  return (
    <div>
      <form>
        <input type="text" placeholder="First Name" /> <br />
        <input type="text" placeholder="Email" /> <br />
        <Button label="Submit" className="text-orange-500" />
        <Button label="Click Here" className="text-red-500 bg-purple-700" />
        <Button label="Read More" />

        {/* card  zero*/}
        <div className="shadow-md rounded-lg w-80 border bg-slate-50 p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            {users[0].name}
          </h1>
          <p className="text-lg text-slate-600">
            {users[0].email}
          </p>
        </div>

        {/* card zero ends */}


        {/* card  one*/}
        <div className="shadow-md rounded-lg w-80 border bg-slate-50 p-8 text-center">
          <h1 className="text-2xl font-bold text-slate-800">
            {users[1].name}
          </h1>
          <p className="text-lg text-slate-600">
            {users[1].email}
          </p>
        </div>

        {/* card one ends */}


        {/* let's map the array */}

        <p className="my-20">Array is mapping</p>


        {users.map((item, index) => {
          return (
            <Card key={index} name={item.name} email={item.email} />
          )
        })}
      </form>
    </div>
  )
}

export default App