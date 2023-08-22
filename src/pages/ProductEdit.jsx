import { useEffect, useId, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProductItem from "@/hooks/useProductItem";
import Spinner from "@/components/Spinner";

const initialFormState = {
  title: "",
  color: "",
  price: 0,
};

function ProductEdit() {
  const titleId = useId();
  const priceId = useId();
  const colorId = useId();

  const { productId } = useParams();
  const navigate = useNavigate();
  const { isLoading, data } = useProductItem(productId);

  const [formState, setFormState] = useState(initialFormState);

  // 훅은 조건보다 위에
  // 업데이트
  useEffect(() => {
    // 성공적으로 데이터를 가져온 상태
    if (!isLoading && data) {
      setFormState({
        title: data.title,
        price: data.price,
        color: data.color,
      });
    }
  }, [isLoading, data]); // 조건 2개

  const handleChangeInput = ({ target }) => {
    // e.target.name
    setFormState({
      ...formState,
      [target.name]: target.value,
    });
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    //console.log(formState)  // 서버에 업데이트 요청할 데이터 (서버 전송 PATCH 요청)

    // client -> server(pb)
    // Content-Type: application/json
    fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(() => {
      navigate('/products');
    } ) /* ReadableStream  */
    .catch((error) => {
      console.error(error);
    })
  }

  const handleDeleteProduct = (e) => {
    e.preventDefault();

    const userConfirm = confirm('정...말로 지울건가요? 😿');
    if (userConfirm) {
      fetch(`${import.meta.env.VITE_PB_API}/collections/products/records/${productId}`, {
        method: 'DELETE'
      })
      .then(() => {
        // PB에서 지웠다(성공)
        // 제품 목록 페이지로 이동
        navigate('/products');
      })
      .catch(error => {
        console.error(error);
      });
    }
  }

  if (isLoading) {
    return <Spinner size={120} />;
  }

  // 1. value => defaultValue
  // 2. {formState.title || ""} null 값 이벤트 방지
  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title}({data.color}) 수정 폼</h2>
        <form onSubmit={handleEditProduct}>
          {/* title */}
          <div>
            <label htmlFor={titleId}>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              value={formState.title}
              onChange={handleChangeInput}
            />
          </div>
          {/* color */}
          <div>
            <label htmlFor={colorId}>타이틀</label>
            <input
              type="text"
              name="color"
              id={colorId}
              value={formState.color}
              onChange={handleChangeInput}
            />
          </div>
          {/* price */}
          <div>
            <label htmlFor={priceId}>타이틀</label>
            <input
              type="number"
              name="price"
              id={priceId}
              value={formState.price}
              onChange={handleChangeInput}
            />
          </div>
          <div className="flex gap-4">
            <button type="sumbit" className="border rounded-md px-1">수정</button>
            <button type="button" onClick={handleDeleteProduct} className="border rounded-md p-1">삭제</button>
          </div>
        </form>
      </>
    );
  }
}

export default ProductEdit;
