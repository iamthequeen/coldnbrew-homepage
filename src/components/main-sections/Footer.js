import React from 'react'

function Footer()  {
    const textColData = [
      {
        heading: "Address",
        firstLine: "1090 Richmond Avenue,",
        secondLine: "Houston, Texas 7704 USA"
      },
      {
        heading: "Contact",
        firstLine: "+1 627 8907 1264",
        secondLine: "coldbrew@mail.com"
      },
      {
        heading: "Office",
        firstLine: "Monday - Saturday",
        secondLine: "9AM - 10PM"
      }
    ]
    
    const socialIconsData = [
      {
        name: "Instagram",
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01NS4wNCwxMC4zMmMtMjQuNjU2MjYsMCAtNDQuNzIsMjAuMDYzNzQgLTQ0LjcyLDQ0LjcydjYxLjkyYzAsMjQuNjU2MjYgMjAuMDYzNzQsNDQuNzIgNDQuNzIsNDQuNzJoNjEuOTJjMjQuNjU2MjYsMCA0NC43MiwtMjAuMDYzNzQgNDQuNzIsLTQ0Ljcydi02MS45MmMwLC0yNC42NTYyNiAtMjAuMDYzNzQsLTQ0LjcyIC00NC43MiwtNDQuNzJ6TTU1LjA0LDE3LjJoNjEuOTJjMjAuOTM3NSwwIDM3Ljg0LDE2LjkwMjUgMzcuODQsMzcuODR2NjEuOTJjMCwyMC45Mzc1IC0xNi45MDI1LDM3Ljg0IC0zNy44NCwzNy44NGgtNjEuOTJjLTIwLjkzNzUsMCAtMzcuODQsLTE2LjkwMjUgLTM3Ljg0LC0zNy44NHYtNjEuOTJjMCwtMjAuOTM3NSAxNi45MDI1LC0zNy44NCAzNy44NCwtMzcuODR6TTEyNy4yOCwzNy44NGMtMy43OTk3MiwwIC02Ljg4LDMuMDgwMjggLTYuODgsNi44OGMwLDMuNzk5NzIgMy4wODAyOCw2Ljg4IDYuODgsNi44OGMzLjc5OTcyLDAgNi44OCwtMy4wODAyOCA2Ljg4LC02Ljg4YzAsLTMuNzk5NzIgLTMuMDgwMjgsLTYuODggLTYuODgsLTYuODh6TTg2LDQ4LjE2Yy0yMC44NTc3MSwwIC0zNy44NCwxNi45ODIyOSAtMzcuODQsMzcuODRjMCwyMC44NTc3MSAxNi45ODIyOSwzNy44NCAzNy44NCwzNy44NGMyMC44NTc3MSwwIDM3Ljg0LC0xNi45ODIyOSAzNy44NCwtMzcuODRjMCwtMjAuODU3NzEgLTE2Ljk4MjI5LC0zNy44NCAtMzcuODQsLTM3Ljg0ek04Niw1NS4wNGMxNy4xMzk0OCwwIDMwLjk2LDEzLjgyMDUyIDMwLjk2LDMwLjk2YzAsMTcuMTM5NDggLTEzLjgyMDUyLDMwLjk2IC0zMC45NiwzMC45NmMtMTcuMTM5NDgsMCAtMzAuOTYsLTEzLjgyMDUyIC0zMC45NiwtMzAuOTZjMCwtMTcuMTM5NDggMTMuODIwNTIsLTMwLjk2IDMwLjk2LC0zMC45NnoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
      },
      {
        name: "Telegram",
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNDcuNDM0NTcsMjEuNTgzOThjLTIuMzgyMDIsLTAuMjUyNjMgLTQuOTcxMDksMC4xMTkzNyAtNy41NzI1OSwxLjE0Nzc5Yy0zLjIyNSwxLjI2ODUgLTUzLjc1ODc0LDIyLjUyNTk1IC0xMDAuODY1MjMsNDIuMzU2MTJsLTE1LjU2NTEsNi41NTA3OGMtNi4wMjcxNywyLjQ0MzgzIC05LjA3MDMxLDYuNDE4MzEgLTkuMDcwMzEsMTEuNzcxODFjMCwzLjc0ODE3IDEuNTg2Myw4LjgzMjE0IDkuMTU0MywxMS44Mjc3OWwyNi4yNzMxMSwxMC41MjYwNGMyLjI3MTgzLDYuODE1NTEgNy41NDg1MiwyMi42NDAxNyA4Ljg3NDM1LDI2Ljg0NzAxYzAuNzg4MzMsMi40OTQgMi43Nzk1NSw4Ljc3NjkzIDcuODEwNTUsMTAuMjQ2MWMxLjAzMiwwLjM1MTE3IDIuMTA4OSwwLjUzMTkgMy4yMDU0LDAuNTMxOWMzLjE3NDgzLDAgNS40NjA3OCwtMS40Nzc1NiA2LjU3ODc4LC0yLjMzNzU2bDE2LjY5ODg5LC0xNC4xMjMzN2wyMC4yODIyMywxOC43NTY1MWMwLjc4MTE3LDAuNzk1NSA0LjkxNTg5LDQuODE1MSAxMC40NzAwNiw0LjgxNTFjNi45MzAxNywwIDEyLjE4NzAyLC01Ljc2OTA1IDEzLjI4MzUyLC0xMS4zNTE4OWMwLjU5NDgzLC0zLjA2MDE3IDIwLjE1NjI1LC0xMDEuMjU3NSAyMC4xNTYyNSwtMTAxLjI0MzE3YzEuNzU1ODMsLTcuODc2MTcgLTEuNDAxMTksLTExLjk2MTk1IC0zLjQyOTM2LC0xMy43MDM0NWMtMS43Mzc5MiwtMS40ODcwOCAtMy45MDI4MSwtMi4zNjQ4OSAtNi4yODQ4MywtMi42MTc1MXpNMTQyLjY4OTQ1LDM3LjA2NTFjLTIuNzAxODMsMTMuNTQ1IC0xNy40MzAzNCw4Ny40Nzg5MSAtMTkuNjY2MzQsOTguMTM1NzRsLTI5LjY0NjQ5LC0yNy40MjA5bC0yMC4xMTQyNiwxNy4wMzQ4NGw1LjU3MDk3LC0yMS43OTM5NWMwLDAgMzguNDMxNTksLTM4LjkwMTY3IDQwLjc0NjQyLC00MS4xNjYzNGMxLjg2MzMzLC0xLjgxMzE3IDIuMjUzNTgsLTIuNDQ4NzYgMi4yNTM1OCwtMy4wNzk0M2MwLC0wLjgzODUgLTAuNDMxNTcsLTEuNDQxNzMgLTEuNDI3NzQsLTEuNDQxNzNjLTAuODk1ODMsMCAtMi4xMTI0OCwwLjg1ODQzIC0yLjc1NzQ4LDEuMjU5NzdjLTguMTkzOTksNS4xMDg1MiAtNDMuMDg1NDQsMjQuOTg2MjggLTYwLjI1ODc5LDM0Ljc1NTU0bC0yNC45MTUzNiwtOS45NTIxNWwxMi4wOTM3NSwtNS4wODEwNmMzMC44MDk1LC0xMi45NzE2NiA4NS42ODA0MSwtMzYuMDc1OTkgOTguMTIxNzQsLTQxLjI1MDMyeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"
      },
      {
        name: "LinkedIn",
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik01MS42LDE0My4zMzMzM2gtMjguNjY2Njd2LTg2aDI4LjY2NjY3ek0zNy4yNzI0LDQ1Ljg2NjY3Yy03LjkyOTIsMCAtMTQuMzM5MDcsLTYuNDI3MDcgLTE0LjMzOTA3LC0xNC4zMzkwN2MwLC03LjkxMiA2LjQyMTMzLC0xNC4zMjc2IDE0LjMzOTA3LC0xNC4zMjc2YzcuOTAwNTMsMCAxNC4zMjc2LDYuNDI3MDcgMTQuMzI3NiwxNC4zMjc2YzAsNy45MTIgLTYuNDI3MDcsMTQuMzM5MDcgLTE0LjMyNzYsMTQuMzM5MDd6TTE1NC44LDE0My4zMzMzM2gtMjcuNTYwMTN2LTQxLjg1MzMzYzAsLTkuOTgxNzMgLTAuMTg5MiwtMjIuODE4NjcgLTE0LjMyNzYsLTIyLjgxODY3Yy0xNC4zNTA1MywwIC0xNi41NTc4NywxMC44NzA0IC0xNi41NTc4NywyMi4wOTYyN3Y0Mi41NzU3M2gtMjcuNTU0NHYtODYuMDYzMDdoMjYuNDUzNnYxMS43NTkwN2gwLjM3MjY3YzMuNjgwOCwtNi43NjUzMyAxMi42NzY0LC0xMy44OTc2IDI2LjA5MjQsLTEzLjg5NzZjMjcuOTIxMzMsMCAzMy4wODEzMywxNy44MjQ5MyAzMy4wODEzMyw0MC45OTkwN3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
      },
      {
        name: "Twitter",
        imgSrc: "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCAxNzIgMTcyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBmb250LWZhbWlseT0ibm9uZSIgZm9udC13ZWlnaHQ9Im5vbmUiIGZvbnQtc2l6ZT0ibm9uZSIgdGV4dC1hbmNob3I9Im5vbmUiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMCwxNzJ2LTE3MmgxNzJ2MTcyeiIgZmlsbD0ibm9uZSI+PC9wYXRoPjxnIGZpbGw9IiNmZmZmZmYiPjxwYXRoIGQ9Ik0xNjAuNTMzMzMsMzkuNzcyMTNjLTUuNDg2OCwyLjQzNjY3IC0xMS4zODA2Nyw0LjA3NjQgLTE3LjU2NjkzLDQuODE2YzYuMzE4MTMsLTMuNzg0IDExLjE2MjgsLTkuNzc1MzMgMTMuNDQ0NjcsLTE2LjkxOTA3Yy01LjkwNTMzLDMuNTAzMDcgLTEyLjQ1MjgsNi4wNDg2NyAtMTkuNDI0NTMsNy40MjQ2N2MtNS41Nzg1MywtNS45NDU0NyAtMTMuNTI0OTMsLTkuNjYwNjcgLTIyLjMxOTg3LC05LjY2MDY3Yy0xNi44OTA0LDAgLTMwLjU4MTYsMTMuNjk2OTMgLTMwLjU4MTYsMzAuNTgxNmMwLDIuMzk2NTMgMC4yNzUyLDQuNzM1NzMgMC43OTEyLDYuOTY2Yy0yNS40MTU4NywtMS4yNzI4IC00Ny45NDc4NywtMTMuNDUwNCAtNjMuMDM4LC0zMS45NTc2Yy0yLjYyNTg3LDQuNTE3ODcgLTQuMTMzNzMsOS43Njk2IC00LjEzMzczLDE1LjM4MjUzYzAsMTAuNjA2NjcgNS4zOTUwNywxOS45NjkyIDEzLjU5OTQ3LDI1LjQ1MDI3Yy01LjAxMDkzLC0wLjE2MDUzIC05LjcyOTQ3LC0xLjUzNjUzIC0xMy44NTE3MywtMy44MjQxM2MwLDAuMTMxODcgMCwwLjI1MjI3IDAsMC4zODQxM2MwLDE0LjgyMDY3IDEwLjUzNzg3LDI3LjE4MTczIDI0LjUzMjkzLDI5Ljk4NTMzYy0yLjU2MjgsMC42OTk0NyAtNS4yNjg5MywxLjA3MjEzIC04LjA2MTA3LDEuMDcyMTNjLTEuOTY2NTMsMCAtMy44ODcyLC0wLjE5NDkzIC01Ljc1MDUzLC0wLjU0NDY3YzMuODkyOTMsMTIuMTQ4OTMgMTUuMTg3NiwyMC45OTU0NyAyOC41NjkyLDIxLjI0MmMtMTAuNDYzMzMsOC4yMDQ0IC0yMy42NSwxMy4wOTQ5MyAtMzcuOTgzMzMsMTMuMDk0OTNjLTIuNDY1MzMsMCAtNC45MDIsLTAuMTQzMzMgLTcuMjk4NTMsLTAuNDNjMTMuNTM2NCw4LjY3NDUzIDI5LjYwNjkzLDEzLjczNzA3IDQ2Ljg4MTQ3LDEzLjczNzA3YzU2LjI1NTQ3LDAgODcuMDA5MDcsLTQ2LjYwMDUzIDg3LjAwOTA3LC04Ny4wMTQ4YzAsLTEuMzI0NCAtMC4wMjg2NywtMi42NDMwNyAtMC4wODYsLTMuOTU2YzUuOTc5ODcsLTQuMzE3MiAxMS4xNjg1MywtOS43MDA4IDE1LjI2Nzg3LC0xNS44Mjk3M3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="
      }
    ]
    
    const otherCols = textColData.map(textCol => (
    <div className="col">
      <h3>{textCol.heading}</h3>
        <p>{textCol.firstLine}</p>
        <p>{textCol.secondLine}</p>
    </div>
    ))
    
    const socialMedia = socialIconsData.map(item => (
    <div className="social-media">
        <a href="#0"><img src={item.imgSrc} alt={item.name} className="social-icon"/></a>
    </div>
    ))
    
    return (
    <footer>
      <h2>ColdnBrew.</h2>
        <div className="columns">
          <div className="col">
            <p>Subscribe to our newsletter</p>
            <div className="input-and-btnlink">
              <input type="email" placeholder="Your email address"/>
              <a href="#0" >
              <div className="btn-link orange-btn">
                <div className="arrow-container">
            <button type="button" className="oh">  
    <svg class="arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 16">
      <path class="stem" d="M5.4995 14.5V0"/>
      <path class="leaf" d="M5.4995 15c-.5-3-2.9-5.6-4.5-6"/>
      <path class="leaf" d="M5.4995 15c.5-3 2.9-5.6 4.5-6"/>
    </svg>
  </button>
          </div>
              </div>
                
              </a>
            </div>
          </div>  
          {otherCols}
        </div>
        <hr/>
        <div id="footer-bottom" className="columns">
        <div className="columns social-icons">
          {socialMedia}
        </div>
          <div>
          <p>&copy; 2021 Copyright.<span>coldnbrew.co</span></p>
            
          </div>
          </div> 
    </footer>
    )
  }

export default Footer