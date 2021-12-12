import './App.css';
import Auth from './AuthComponent/Auth';
import Main from './MainComponent/Main';

var isAuthenticated = true;


function App() {
  return (
    <div className="App">
      <nav></nav>
      <div>
        <section>
          {isAuthenticated
            ? <Main />
            : <Auth/>
          }
        </section>
      </div>
      
    </div>
  );
}

export default App;
