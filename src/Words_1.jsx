import Header from "./Header"; 
import './index.css';
import { Link } from 'react-router-dom';

import { array_of_words } from './Array_of_words'; 

export let num = 0



function Words_1() {

  return (

    <div>

      <Header />

      <audio id="player_1" src={array_of_words[num][0][5]} />
      {/* <audio id="player_2" src={array_of_words[0][2][5]} controls />
      <audio id="player_3" src={array_of_words[0][3][5]} controls />
      <audio id="player_4" src={array_of_words[0][4][5]} controls />
      <audio id="player_4" src={array_of_words[0][5][5]} controls />
      <audio id="player_4" src={array_of_words[0][7][5]} controls /> */}

      <p>Words_1</p>

      <button onClick={() => {


         // document.getElementById('player_1').src = './sounds/words/english_words_rick/add.mp3';
         // document.getElementById('player_2').src = 'sounds/words/english_words_rick/adapt.mp3';
         // document.getElementById('player_3').src = 'sounds/words/english_words_rick/adept.mp3';
         // document.getElementById('player_4').src = 'sounds/words/english_words_rick/afford.mp3';

         num += 1

         document.getElementById('player_1').src = array_of_words[num][0][5];

         let audio = document.getElementsByTagName('audio');

         audio[0].play();

         // for (let i = 0; i < audio.length - 1; i++) {

         //     audio[i].addEventListener('ended', function() {

         //         audio[i + 1].play();

         //     });

         // }  

      }}>Нажать</button>

      <Link onClick={() => {num = 112}} to='/words_2' id="sasd">Words_2</Link>
        
    </div>

  );

}

export default Words_1;

















