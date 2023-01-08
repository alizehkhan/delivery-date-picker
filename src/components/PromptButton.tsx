import { ReactComponent as Van } from '../images/van.svg'

const PromptButton = () => (
  <button className="prompt-button">
    <div className="prompt-button-left">
      <p>Thu 14 March</p>
      <div className="prompt-van-label">
        <Van />
        <p>Earliest delivery</p>
      </div>
    </div>
    <div className="prompt-button-right">
      <div className="prompt-calendar">14</div>
      <p>Change</p>
    </div>
  </button>
)

export default PromptButton
