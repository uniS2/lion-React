import { reactLibrary } from "./data";

function RenderingLists({ statusMessage, renderList }) {

  return (
    <>
      <dt>리스트 렌더링(list rendering)</dt>
      <dd>
        <p>상태 메시지(status message) 배열을 리스트 렌더링합니다.</p>
        {/* <ul className="renderList">{renderList({ reverse: false })}</ul> */}
        <ul className="renderList">
          {statusMessage.map((message) => {
            return <li key={message}>{message}</li>;
          })}
        </ul>
      </dd>
      <dd>
        <p>상태 메시지(status message) 배열을 역순 정렬하여 렌더링합니다.</p>
        <ul className="renderList">{renderList({ reverse: true })}</ul>
      </dd>
      <dd>
        <p>
          React 라이브러리(reactLibrary) 객체의 키, 값을 <q>설명 목록</q>으로
          렌더링합니다.
        </p>
        <dl className="reactLibrary">
          {/* 여기서 설명 목록으로 리스트 렌더링 합니다. */}
          {/* reactLibrary 객체를 순환해서 리스트 렌더링 */}
          {/* <pre>{JSON.stringify(reactLibrary, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify(Object.entries(reactLibrary), null, 2)}</pre> */}

          {Object.entries(reactLibrary).map(([key, value]) => {
            return (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
      </dd>
    </>
  );
}

export default RenderingLists;
