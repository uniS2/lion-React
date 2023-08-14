import RootLayout from './layout/RootLayout';
import FilterableList from './pages/Practice/FilterableList';
// import Practice from './pages/Practice/Practice';

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Practice /> */}
        <FilterableList />
      </RootLayout>
    </div>
  );
}

export default App;