import React from 'react'
import { useEffect } from 'react';

function About() {

    useEffect(() => {
        document.title = "about me!";
    }, []);

  return (
    <div class="normalPage">
        <h1>about me!</h1>
        <img src="/lisa_photo.png" alt="tapi" width="200" height="auto" />
        <p>
        ₓ˚. ୭ ˚○◦˚.˚◦○˚ ୧ .˚ₓ
        </p>

        <p>
            hi hi! welcome to my about page, featuring the only good picture of me for the past 13 months :p
        </p>

        <p>
            personally, i'm someone intersted in 100 different things at once, but i've been consistently invested in tech, art, 
            long walks around cities, aquariums, all things food, hanging out with friends, and so so much more! you can find me trying new
            restaurants on a minimum wage salary,  playing with apis in the physics building, and 4am revenge-bedtime-procrastinating my way through life.
        </p>

        <p>
            while i'm still trying to figure things out, i'm trying new things at every opportunity and pushing myself out of my comfort zone. i can't wait to see myself in the future, wherever it may take me!
        </p>

        <p>
            <b>currently, i'm</b>
        </p>

        <p>
            a 1st-year student at {" "}
            <a className="import" href="https://www.harvard.edu/" target="_blank" rel="noreferrer">
                harvard university
            </a>
            , planning on obtaining an ab/sm in cs with a secondary in an undecided field.

            <br/>
            <br/>

            interested in developments in ml/ai and their applications, working with apis, diversity in tech, and education.
            
            <br/>
            <br/>

            working as a product management intern, increasing access to mentorship with {" "}

            <a class="import" href="https://bobatalks.com/" target="_blank" rel="noreferrer"> BobaTalks</a>
            .
            <br/>
            <br/>

            this summer, i'll be working at {" "}
            <a class="import" href="https://www.axleapi.com/" target="_blank" rel="noreferrer">
                Axle
            </a>
            , working on a universal data platform for trucking!
            <br/>
            <br/>
        </p>

        <p>
            <b>at uni, i</b>
        </p>

        <p>
            <ul>
                <li>
                    <strike>became an admissions officer </strike>make youtube videos for harvard 
                       <ul>
                            <li>
                                <a href="https://www.youtube.com/watch?v=ckB02ExJeFI" class="clickable" target="_blank" rel="noreferrer"> 
                                harvard students react to r/a2c
                                </a> 
                            </li>
                            <li>
                                <a href="https://www.youtube.com/watch?v=67XjW6rmths" class="clickable" target="_blank" rel="noreferrer"> 
                                WECode 2023 vlog
                                </a> 
                            </li>
                        </ul>
                </li>
                <li>
                    <strike>stole free merch</strike> help run the largest student-run women in tech conference (
                        <a 
                        href="https://www.harvardwecode.com/" class="clickable" target="_blank" rel="noreferrer">
                        Harvard WECode
                        </a>
                    )
                </li>
                <li>
                    <strike>misspelled china multiple times</strike> plan transformative international conferences (
                        <a href="https://www.hauscr.org/" class="clickable" target="_blank" rel="noreferrer">
                        HAUSCR    
                        </a>
                    )
                </li>
                <li>
                    <strike>quit cs</strike> indulge my middle school prelaw dreams (
                        <a
                        href="https://hulr.org/technology-and-the-law-expert-interviews/big-speech-and-free-expression" class="clickable" target="_blank" rel="noreferrer">
                            HULR: Technology and the Law</a>
                    )
                </li>
                <li>
                    <strike>accidentally joind a consulting club</strike> explore product management ( 
                        <a href="https://www.hcsproductlab.org/" class="clickable" target="_blank" rel="noreferrer">Product Lab</a>
                    )
                </li>
                <li>
                    <strike>have an excuse to pull an all-nighter</strike> organizing hacker experience (
                        <a href="https://www.hackharvard.io/" class="clickable" target="_blank" rel="noreferrer">HackHarvard</a>
                    )
                </li>
            </ul>
        </p>

        <p>
            <b>previously, i've</b>
        </p>
        <p>
            <ul>
                <li>
                    taught web development to high schoolers (
                        <a href="https://www.kodewithklossy.com/" class="clickable" target="_blank" rel="noreferrer">Kode with Klossy</a>
                    )
                </li>
                <li>
                    helped the marketing team for a startup (
                        <a href="https://getpicnic.app/" class="clickable" target="_blank" rel="noreferrer">Picnic</a>
                    )
                </li>
                <li>
                    conducted research on visually imparied programmers and nlp (
                        <a href="https://www.unt.edu/" class="clickable" target="_blank" rel="noreferrer">Uuniversity of North Texas</a>
                    )
                </li>
                <li>
                    started an art business! 
                </li>
            </ul>
        </p>
    </div>
  );
}

export default About;