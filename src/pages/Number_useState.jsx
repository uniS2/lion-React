import {useState, useId} from "react";

/* const getOne = () => 1; */

function LearnStateAndEffects() {
  // 지역 변수는 상태 변수??? NO!
  // 리액트 상태 변수는 useState 훅(함수) 사용한다.
  // Q. 컴포넌트 count 상태를 리액트에서 인식하도록 정의해봅니다.
  // let count = 100;
  // A. React.useState() 훅을 사용하세요.
  /* const [count1] = useState(100);
  const [count2] = useState(() => getOne())
  console.log(count1, count2) */

  const [count, setCount] = useState(100);
  const [step, setStep] = useState(12);

  // 상태 정의와 상태 변경 (update)

  // 관리가 까다로운 ID 속성 값을 자동 생성하는 훅
  const stepperId = useId();

  return (
    <div className="m-10 flex flex-col gap-2 items-start" lang="en">
      <h2 className="text-indigo-600 text-2xl uppercase">
        Learn State And Effects {count}
      </h2>
      <div className='flex flex-col gap-2 items-end'>
        <div className='flex gap-2 items-center'>
          <label htmlFor={stepperId} className='text-base'>step</label>
          <input
            id={stepperId}
            type="number"
            value={step}
            onChange={(e) => {
              const nextStep = Number(e.target.value);
              setStep(nextStep);
            }}

            className="w-12 py-1 px-2 border-slate-300 border rounded-xl"
          />
          <input
            type="number"
            defaultValue={12}
            className="w-12 py-1 px-2 border-slate-300 border rounded-full"
          />
        </div>
        <button
          type="button"
          onClick={() => setCount(count + step)}
          className="py-0.5 px-2.5 border rounded-md border-slate-600"
        >
          +{step}
        </button>
      </div>
    </div>
  );
}

export default LearnStateAndEffects;
