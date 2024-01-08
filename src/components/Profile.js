import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Profile.css';

const Profile = () => {
  const { profileId } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`/api/user/${profileId}`);
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [profileId]);
  
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style={{backgroundColor:"#080404"}}>
          <div className="container">
            <div className="container1">
              <div className="circle"></div>
              <br />
              <div className="con1">
                <div className="om-text">
                  <b>Om Buddhadev</b>
                </div>
                <div className="circle2">
                  <div id="om-text-1"><font size="1" color="#794bd0"> &nbsp;&nbsp;TRUSTWORTHY</font></div>
                </div>
              </div>
              <div className="om-id">0m-Budsman</div>
              <div><hr id="om-hr" /></div>
              <br />
              <div className="om-rep">
                <font color="white" size="1">Report User</font>
              </div>
            </div>
            <div className="container2">
              <div>
                    <input id="con2-in" type='text' placeholder='Find the scoop'></input>
              </div>
              <br />
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <br />
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <div className="container2-hr"><hr /></div>
              <br />
              <div className="con2">
                <div className="con2-1">
                  SAMPLE HEADLINE
                </div>
                <p className="con2-2">
                  <u><font size="2" >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae hic possimus sequi cupiditate asperiores velit laboriosam, dicta assumenda obcaecati vero, eaque tenetur beatae, temporibus repellendus est totam! Neque, perspiciatis non!
                  </font>
                  </u>
                </p>
              </div>
              <div className="container2-hr"><hr /></div>

            </div>
          </div>
        </body>
    </html>
    </>
  );
};
export default Profile;
