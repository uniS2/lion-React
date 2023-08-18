import Logo from "../components/logo";

function Home() {
  return (
  <div>
    <h2>홈페이지</h2>

    <Logo />
    <Logo color="yellowgreen" size={25} />
    <Logo color="cornflowerblue" />
    <Logo color="pink" size={108} />
  </div>
  )
}

export default Home;