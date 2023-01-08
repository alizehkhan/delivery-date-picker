import PromptButton from './components/PromptButton'
import './stylesheets/index.scss'

const App = () => (
  <main>
    <div className="prompt-container">
      <h1 className="prompt-title">Choose your delivery day</h1>
      <p className="prompt-label">Delivery is always free</p>
      <PromptButton />
    </div>
  </main>
)

export default App
