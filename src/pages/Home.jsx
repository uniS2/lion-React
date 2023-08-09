import Logo from "../components/logo";

function Home() {
  return (
  <div>
    <h2>홈페이지</h2>

    <Logo />
    <Logo color="blue" size={12} />
    <Logo color="sky" />
    <Logo color="blue" size={108} />
  </div>
  )
}

export default Home;