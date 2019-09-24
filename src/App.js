import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <body>
        <h1>The Digital Life and Mental Health</h1>
        <div class="content">
            <div>
                <h2>Introduction</h2>
                <p>Technology has provided us many positive changes as it has improved our lives and enhanced a lot of our experiences today. </p>
                <p>However, the easy access to technology has created many negative impacts as well. 
                    For children and young adults who are living in a prime digital life, being online and using social media has become an integral part of their daily lives.
                    This continuous interaction and reliance on social media is concerning as levels of anxiety and depression are rising significantly in this demographic. 
                    Social media platforms are unintentionally facilitating cyber bullying, distorted body image, and other disturbing mental health patterns in its users.</p> 
                <p>To give a more specific example, Instagram is one of the most used social media platforms amongst Gen Z and Millenials. Users are often too become too invested 
                    in their profiles and the number of likes their posts garner. Body image issues are on the rise as people compare themselves with others. Such negative impacts 
                    of the digital life has lead to many users feeling high levels of anxiety and depression. 

                </p>  
            </div>
            <div>
                <h2>The Stack Model</h2>
                <div class= "stackgallery">
                    <div class="box">
                        <center><p><b>User</b>: An NYU Shanghai Student</p></center>
                        <img src= "https://us.123rf.com/450wm/kakigori/kakigori1511/kakigori151100055/49282228-stock-vector-beautiful-brunette-teenager-girl-with-glasses-sitting-on-isolated-white-background.jpg?ver=6"/>
                    </div>    
                    <div class="box">
                        <center><p><b>Interface</b>: Instagram</p></center>
                        <img src="https://i.pinimg.com/originals/4f/01/49/4f0149647a160a47217615866f5469c4.png"/>
                    </div>
                    <div class="box">
                        <center><p><b>Address</b>: Wifi & VPN</p></center>
                        <a href="https://imggmi.com" target="_blank"><img src="https://cdn1.imggmi.com/uploads/2019/9/17/ff7b2746b408202e3766f663f8b083c0-full.png" border="0"/></a> </div>
                    </div>
                </div>
                <p></p>
                <div class="stackgallery1"> 
                    <div class="box1">
                        <center><p><b>City</b>: China Telecom & Cisco</p></center>
                        <a href="https://imggmi.com" target="_blank"><img src="https://cdn1.imggmi.com/uploads/2019/9/17/a8f03c586bbfa09f2f9093e58a05f321-full.png" border="0"/></a>
                    </div>
                    <div class="box1">
                        <center><p><b>Cloud</b>: Instagram Servers</p></center>
                        <img src= "https://media.idownloadblog.com/wp-content/uploads/2014/06/Facebook-data-center-North-Carolina-001.jpg"/>
                    </div>
                    <div class="box1">
                        <center><p><b>Earth</b>: Friends and Family Around the World</p></center>
                        <img src= "https://www.clipartwiki.com/clipimg/full/101-1015827_friends-raised-their-hands-to-celebrate-15001000-tongue.png"/>
                    </div>
                </div> 
                <p>The user, an NYU Shanghai student, is able to interact and utilizes the Interface, Instagram, through WiFi and VPN. These address layers, Wifi and VPN, are provided by 
                    China Telecom and Cisco AnyConnect, which are a part of the City layer. Instagram is then storing the data that it has collected from the NYU Shanghai student in servers around the world,
                    which we can consider as the Cloud layer. Lastly, the Earth layer consists of the NYU Shanghai students friends and family around the globe.</p>
        </div>
      </body>
    </div>
  );
}

export default App;
