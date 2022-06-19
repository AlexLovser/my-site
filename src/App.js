import './App.css';
import Header from './components/header/Header';
import { useSelector } from 'react-redux';


export default function App() {
  const {selectedValue} = useSelector(state => state.header)

  return (
    <body className="container">
        <Header />
        <div>

        </div>
    </body>
  );
}
