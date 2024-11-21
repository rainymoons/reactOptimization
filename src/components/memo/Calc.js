import { useMemo, useState } from "react";

export default function Calc({ from, to }) {
  // from과 to가 같지않으면 아래 calculator 실행. 같으면 실행 x
  //const [amount, setAmount] = useState(0);

  let startTime = new Date().getMilliseconds();

  const calculator = useMemo(() => {
    let sum = 0;
    for (let i = from; i <= to; i++) {
      sum += i;
    }

    let endTime = new Date().getMilliseconds();
    console.log(endTime - startTime + "ms");

    return sum; // sum 값이 calculator로 전달됨.
  }, [from, to]);

  const [random, setRandom] = useState(0);

  const onClickHandler = () => {
    setRandom(Math.random()); // 클릭할때마다 난수가 들어가므로 매번 재실행된다.
    console.log(random);
  };

  return (
    <div>
      <div>{`${from} ~ ${to} 까지의 합은 ${calculator} 입니다.`}</div>
      <button onClick={onClickHandler}>계산하기</button>
    </div>
  );
}
