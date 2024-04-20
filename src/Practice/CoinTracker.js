import {useState, useEffect} from "react";
/*
이 코드에서 주목할 점
1.  <select> <option> </opotion> </select> 에서 선택한 옵션을 state 에서 다루기 위해
select 의 어트리뷰트에 value={coin.quotes.USD.price} 한 부분 

*/


function CoinTracker() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    const [selectedCoin, setSelectedCoin] = useState();
    const [amount, setAmount] = useState();
    const [invert, setInvert] = useState(false);

    //useEffect 를 통해 fetch 를 한번만 실행하게 함
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => { 
            setCoins(json)
            setLoading(false);
        });
    }, []);


    

    const handleCoin = (event) => {
        setSelectedCoin(event.target.value);
    }

    const handleAmount = (event) => {
        setAmount(event.target.value);  
    }

    const handleInvert = (event) => {
        reset();
        setInvert((current) => (!current));
    }

    function reset() {
        setAmount(0);
    }

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? 
                <strong>Loading...</strong> 
                : 
                <select onChange={handleCoin}>
                    {coins.map((coin) => 
                    // select 내부에서 고른 값(option) 을 외부에서 사용하기 위해 option 의 프로퍼티 value 에 원하는 값을 넣었음!!!
                        <option key={coin.id} value={coin.quotes.USD.price}>
                            {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                        </option>
                    )}
                </select>
            }
            <label htmlFor="amount">보유 화폐</label>
            <input 
                id="amount" 
                value={invert ? selectedCoin / amount : amount} 
                onChange={handleAmount}
                type="number"
                disabled={invert}
            >
            </input>
            <br/>
            <label htmlFor="purchase">구매 가능한 코인</label>
            <input 
                id="purchase" 
                value={!invert ? Math.floor(amount / selectedCoin) : amount} 
                onChange={handleAmount}
                type="number"
                disabled={!invert}
            >
            </input>
            <br/>
            <button
                onClick={handleInvert}
            >{!invert ? "Invert" : "Turn back"}
            </button>
            <button
                onClick={reset}
            >reset
            </button>
        </div>
    )

}

export default CoinTracker;