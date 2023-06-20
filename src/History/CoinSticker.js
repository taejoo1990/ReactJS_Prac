
import { useEffect, useState } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(()=>{
    console.log("call API");
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then(response => response.json())
    .then((json)=>setCoins(json));
    setLoading(false);
  },[])
    return (
    <div>
        <h1>The Coins!</h1>
        <p>{loading?<strong>loading...</strong> : null }</p>
        <ul>
            {coins.map((coin)=> <li key={coin.id}>{coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD</li>)}
        </ul>
    </div>
  );
}
export default App;
