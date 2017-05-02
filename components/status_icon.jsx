import React from 'react';

const StatusIcon = (state) => {
  if (state.status === "open") {
    return(
      <span id="primitive-dot" className="status">
      <svg id="primitive-dot" width="8px" height="16px" viewBox="0 0 8 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>primitive-dot</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Octicons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="primitive-dot" fill="#000000">
                  <path d="M0,8 C0,5.8 1.8,4 4,4 C6.2,4 8,5.8 8,8 C8,10.2 6.2,12 4,12 C1.8,12 0,10.2 0,8 L0,8 Z" id="Shape"></path>
              </g>
          </g>
      </svg>
      </span>
    );
  }
  else {
    return(
      <span id="circle-slash" className="status">
      <svg id="circle-clash" width="14px" height="16px" viewBox="0 0 14 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <title>circle-slash</title>
          <desc>Created with Sketch.</desc>
          <defs></defs>
          <g id="Octicons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
              <g id="circle-slash" fill="#000000">
                  <path d="M7,1 C3.14,1 0,4.14 0,8 C0,11.86 3.14,15 7,15 C10.86,15 14,11.86 14,8 C14,4.14 10.86,1 7,1 L7,1 Z M7,2.3 C8.3,2.3 9.5,2.74 10.47,3.47 L2.47,11.47 C1.74,10.5 1.3,9.3 1.3,8 C1.3,4.86 3.86,2.3 7,2.3 L7,2.3 Z M7,13.71 C5.7,13.71 4.5,13.27 3.53,12.54 L11.53,4.54 C12.26,5.51 12.7,6.71 12.7,8.01 C12.7,11.15 10.14,13.71 7,13.71 L7,13.71 Z" id="Shape"></path>
              </g>
          </g>
      </svg>
      </span>
    );
  }
}

export default StatusIcon;
