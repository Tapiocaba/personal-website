import React from 'react'
import { useEffect } from 'react'
import { NavLink } from "react-router-dom"

function Projects() {
    useEffect(() => {
        document.title = "projects";
      }, []);
  
    return (
        <div class="normalPage">
            <h1>projects</h1>
            <p>
                full projects section coming soon, pls let me cook ┬──┬ ¯\_(ツ)
            </p>
            <p>for now, feel free to look at my{" "}
                <a href="https://github.com/Tapiocaba" class="clickable" target="_blank" rel="noreferrer">
                    github
                </a>!
            </p>

            <p>.・。.・゜✭・.・✫・゜・。.</p>
            <p>
                <NavLink to="/" class="clickable">
                    <u>
                        <b> personal website </b>
                    </u>
                </NavLink>
                <br/>
                dis thing
            </p>

            <p>
                <a
                    href="https://github.com/Tapiocaba/graph-theory-pokemon" class="clickable" target="_blank" rel="noreferrer">
                    <b>pokèmon graph theory</b>
                </a>
                <br/>
                this isn't coding but i'm proud of it. makes me look 110x better at math than i actually am.
            </p>
            <p>
                <a
                    href="https://github.com/Tapiocaba/Blackjack50" class="clickable" target="_blank" rel="noreferrer">
                    <b>blackjack50</b>
                </a>
                <br/>
                cs50 final project. college-friendly gambling!
            </p>
            <p>
                <a
                    href="https://github.com/Tapiocaba/PlanTic-Pomodoro-Timer---KWK-Final-Project" class="clickable" target="_blank" rel="noreferrer">
                    <b>plantic pomodoro timer</b>
                </a>
                <br/>
                kode with klossy 2021 final project. tic, cuz it ticks like a clock.
            </p>
            <p>
                <a
                    href="https://github.com/racheltgunawan/Divercity---KWK-group-project
                    " class="clickable" target="_blank" rel="noreferrer">
                    <b>divercity iOS app</b>
                </a>
                <br/>
                kode with klossy 2020 final project. built with swift, now i don't use a mac.
            </p>
        </div>
    )
}

export default Projects;