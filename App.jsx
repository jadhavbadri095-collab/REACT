import StudentInfo from './recordbook/pratical01'
import PracticalCard from './recordbook/pratical02'
import venomImage from './assets/venom.jpg'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <header className="component">
        <h1>My Website</h1>
      </header>
      <section className="cards">
        <PracticalCard
          title="JavaScript"
          description="A simple card component demonstration."
          img={venomImage}
          link="https://deogiricollege.com"
        />
      </section>

      <StudentInfo />
    </main>
  )
}

export default App;
