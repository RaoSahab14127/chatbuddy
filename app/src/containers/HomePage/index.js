import React, { useEffect, useState } from 'react';
import './style.css';
import Layout from '../../components/Layout';




const User = (props) => {


  const { user, onClick } = props;

  return (
    <div onClick={() => onClick("")} className="displayName">
      <div className="displayPic">
        <img src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg" alt="" />
      </div>
      <div style={{ display: 'flex', flex: 1, justifyContent: 'space-between', margin: '0 10px' }}>

      </div>
    </div>
  );
}

const HomePage = (props) => {

  const [chatStarted, setChatStarted] = useState(false);

  const [message, setMessage] = useState('');
  let unsubscribe;




  //console.log(user);





  const submitMessage = (e) => {



    //console.log(msgObj);

  }


  return (
    <Layout>
      <section className="container">

        <div className="listOfUsers">
          users
        </div>

        <div className="chatArea">

          <div className="chatHeader">

          hammad
          </div>
          <div className="messageSections">

          hammad


          </div>
          {/* {
            chatStarted ?
              <div className="chatControls">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write Message"
                />
                <button onClick={submitMessage}>Send</button>
              </div> : null
          } */}

        </div>
      </section>
    </Layout>
  );
}

export default HomePage;