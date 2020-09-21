import React from 'react';
import { useLocalStorage } from "../../hooks";

function Cookies () {
  const [isAccepted, setIsAccepted] = useLocalStorage('cookies', false);
  if (isAccepted) return null;

  function acceptCookies () {
    setIsAccepted(true);
  }

  return (
    <div className="cookies">
      <p className="cookies_message">
        Our website uses cookies to improve your experience. To find out more about the cookies we use please see our Cookies Policy.
      </p>
      <button className="cookies_button btn_primary--dark" onClick={acceptCookies}>
        ok
      </button>
    </div>
  );
}

export default Cookies