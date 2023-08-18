import Spinner from "@/components/Spinner";
import useFetchData from "@/hooks/useFetchData";
import { useEffect, useState } from "react";

const PB_PRODUCTS_ENDPOINT = `
  http://127.0.0.1:8090/api/collections/products/records
  `;

function LearnStateAndEffects() {
  const { data, isLoading, error } = useFetchData(PB_PRODUCTS_ENDPOINT);

  if(isLoading) {
    return <Spinner size={100} title="데이터 가져오는 중이에요." />
  }

  if(error){
    return (
      <div role="alert">
        <h2>{error.type}</h2>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <div className="m-10 flex flex-col gap-2 items-start">
      <h2 className={`text-indigo-600 font-suit text-2xl`}>
        상태 및 이펙트 학습하기
      </h2>
      {
        data && (
          <ul>
            {data.items?.map((item) => (  // 객체
              <li key={item.id}>
                <label>
                <input type="checkbox" checked={item.done} readOnly /> {item.title}
              </label>
                </li>
            ))}
          </ul>
        )
      }
     
    </div>
  );
}

export default LearnStateAndEffects;