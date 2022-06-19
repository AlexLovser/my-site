import './App.css';
import Header from './components/header/Header';
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <body className="container">
      <video loop autoPlay muted style={{position: 'fixed', width: "100%", left: 0, top: 0}}>
        <source
          src={'https://media.istockphoto.com/videos/blue-and-purple-neon-smooth-liquid-waves-abstract-motion-background-video-id1172452110'}
          type='video/mov'
        />
        {/* <Header />
        <div className='page'>
          <Outlet />
        </div> */}
      </video>
      
    </body>
  );
}
