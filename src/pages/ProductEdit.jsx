import { useEffect, useId, useState } from "react";
import { useParams } from "react-router-dom";
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

  if (isLoading) {
    return <Spinner size={120} />;
  }

  // 1. value => defaultValue
  // 2. {formState.title || ""} null 값 이벤트 방지
  if (data) {
    return (
      <>
        <h2 className="text-2xl text-center">{data.title} 수정 폼</h2>
        <form>
          {/* title */}
          <div>
            <label htmlFor={titleId}>타이틀</label>
            <input
              type="text"
              name="title"
              id={titleId}
              default={formState.title || ""}
              onChange={handleChangeInput}
            />
          </div>
          {/* color */}
          {/* price */}
        </form>
      </>
    );
  }
}

export default ProductEdit;
