import RootLayout from './layout/RootLayout';
// import FilterableList from './pages/Practice/FilterableList';
// import Practice from './pages/Practice/Practice';
import DemoPage from './pages/Demo';

function App() {
  return (
    <div className="App">
      <RootLayout>
        {/* <Practice /> */}
        {/* <FilterableList /> */}
        <DemoPage />
      </RootLayout>
    </div>
  );
}

export default App;