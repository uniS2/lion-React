import styles from '@/styles/FilterableList.module.css';
// import SideEffect from '@/components/SideEffect';
import Switcher from '@/components/Switcher';

console.log(styles)

function FilterableList() {
  return (
    <>
    <Switcher>on</Switcher>
    <Switcher>off</Switcher>
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