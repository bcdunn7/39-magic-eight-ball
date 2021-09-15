import EightBall from './EightBall';
import answers from './answers';

function App() {
  return (
    <div>
        <h1>Magic Eight Ball!</h1>
        <EightBall answers={answers}/>
    </div>
  );
}

export default App;
