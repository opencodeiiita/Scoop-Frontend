import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserById } from '../redux/userSlice';
import './Profile.css';

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const status = useSelector((state) => state.user.status);
  const error = useSelector((state) => state.user.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUserById(userId));
    }
  }, [status, dispatch, userId]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </head>
        <body style={{ backgroundColor: "#080404" }}>
          <div className="container">
            <div className="container1">
              <div className="circle"></div>
              <br />
              <div className="con1">
                <div className="om-text">
                  <b>{user.name}</b>
                </div>
                <div className="circle2">
                  <div id="om-text-1"><font size="1" color="#794bd0"> &nbsp;&nbsp;{user.status}</font></div>
                </div>
              </div>
              <div className="om-id">{user.username}</div>
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
