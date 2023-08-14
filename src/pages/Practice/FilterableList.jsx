import styles from '@/styles/FilterableList.module.css';

console.log(styles)

function FilterableList() {
  return (
    <>
      <form>
        <div>
          <label htmlFor="todo"></label>
          <input
            id="todo"
            type="text"
            placeholder="휴일에 할 일"
            // className={`accnet ${styles.accent}`}
          />
        </div>
        <button type="submit" className="accent">추가</button>
      </form>
    </>
  )
}

export default FilterableList