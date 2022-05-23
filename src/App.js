import Testimonio from "./component/testimonios";

import "./App.css";

function App() {
  return (
    <div className='App'>
      <div className='mainContent'>
        
        <h1>This is a short web page where you will be able to see a little about Diego's Trip Kiruna! enjoy it!</h1>
      <Testimonio
      imagen= 'AndFriends'
      name='Diego'
      subtitle= 'Meeting new friends!'
      text= 'Is the best part of doing this! Meet new friends and live this amazing experience with them was something that I never will forget'/>
      <Testimonio
      imagen= '1'
      name='Diego'
      subtitle= 'Meeting with the NorthLigths!'
      text= 'This is de amazing trip that Diego did when he was in Kiruna. Kiruna is a small town up the north of Sweden where is posible to see the amazing Northlights!'
       />
       <Testimonio
      imagen= 'Smiling'
      name='Diego'
      subtitle= 'Live your Dreams!!'
      text= 'The main experience that this trip gave me was to undertand that nothing is impossible and all your dreams can come true!'/>
      </div>
    </div>
  );
}

export default App;
