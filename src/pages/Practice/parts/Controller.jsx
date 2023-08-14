import GoToButton from "./GoToButton";
import { getNode } from '@/utils/getNode';

function Controller() {
  return (
    <div role="group" className="buttonGroup">
    <GoToButton 
        // onPointerEnter={() => console.log('pointer enter')}
        // onClick={function() {
        //   console.log('go to down')
        // }} 
        // onMouseEnter={() => {
        //   console.log('mouse enter');
        // }}
        // onMouseLeave={() => {
        //   console.log('mouse leave');
        // }}
        // onKeyDown={() => {
        //   console.log('key down');
        // }}
        // onKeyUp={() => {
        //   console.log('key up');
        // }}
        direction="down" 
        label="스크롤 다운" 
        onClick={() => {
          // (side effect)
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({top: 900, behavior: 'smooth'});
        }}
      />

      <GoToButton  
        direction="up" 
        label="스크롤 업" 
        onClick={() => {
          // (side effect)
          const practiceElement = getNode('.Practice');
          practiceElement.scroll({top: 0, behavior: 'smooth'});
        }}
      />
    </div>
  );
}

export default Controller;