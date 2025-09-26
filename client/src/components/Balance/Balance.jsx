import { useState } from "react"


const Balance = () => {

    const [balance, setBalance] = useState(0);

  return (
    <div>
        Wallet: ${balance}
    </div>
  )
}

export default Balance
