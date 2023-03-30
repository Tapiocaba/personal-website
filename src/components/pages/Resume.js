import React from 'react'
import { useEffect } from 'react'

function Resume() {
  useEffect(() => {
    document.title = "resume";
}, []);

  return (
    <div class="normalPage">
        <h1>resume</h1>
        <p> resumes: making college students look cooler since 2004 -(๑☆‿ ☆#)ᕗ </p>
        <p>made with&nbsp;

        <a class="clickable" href="https://www.resume.lol/" target="_blank" rel="noreferrer">
            resume.lol
        </a>
        ; updated 3/30/2023
        </p>


        <iframe
            src="https://drive.google.com/file/d/1LYvPasZEEuuLnKr7vFgf5bxZdnOXIzGw/preview"
            width="640"
            height="825"
            allow="autoplay"
            title="resume"
        ></iframe>
        
        <br/>
        <a href="/lisa_lin_resume.pdf"
        download="lisa_lin_resume.pdf"
        class="clickable"
        > download </a>

    </div>
  );
}

export default Resume