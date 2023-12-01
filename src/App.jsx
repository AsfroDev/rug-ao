import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'


function App() {

  document.addEventListener('play', function(e){
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if(audios[i] != e.target){
        audios[i].pause();
      }
    }
  }, true);

  return (
    <>
      <Header />

      <Content />

      <Footer />

    </>
  )
}

export default App
