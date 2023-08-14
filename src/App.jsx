import RootLayout from './layout/RootLayout';
// import FilterableList from './pages/Practice/FilterableList';
// import Practice from './pages/Practice/Practice';
import Demo from './pages/Demo';

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Practice /> */}
        {/* <FilterableList /> */}
        <Demo />
      </RootLayout>
    </div>
  );
}

export default App;