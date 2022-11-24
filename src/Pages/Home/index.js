import * as React from 'react';
import html5 from "../../utils/html5.svg"
import css from "../../utils/css.svg"
import js from "../../utils/js.svg"
import node from "../../utils/node.svg"
import sass from "../../utils/sass.svg"
import react from "../../utils/react.svg"
import typescript from "../../utils/typescript.svg"
import { Main,DivWelcome,DivLanguages,Grid} from "./style"
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
function Home() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [open, setOpen] = React.useState(false);
    const [text,setText] = React.useState("")
    const popUp = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => newPlacement);
        setText(event.currentTarget.alt)
    };
    return(
     <>
     <Main>
        <DivWelcome>
            <h1>
            Bem Vindo ao Meu <span>PortFólio</span> 
            </h1>
            <h3>
                Eu amo criar e desenvolver projetos, então aproveite para descobrir diversos projetos já feitos por mim.
            </h3>
        </DivWelcome>
        <DivLanguages>
            <h3>
                Essas são as linguagens e frameworks que conheço:
            </h3>
            <Grid>
                <div onMouseOut={popUp(false)}>
                <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                    <Paper>
                    <Typography sx={{ p: 1 }}>{text}</Typography>
                    </Paper>
                </Fade>
            )}
               </Popper>
                <img onMouseEnter={popUp(true)} src={html5} alt="HTML5"></img>
            </div>
            
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={css} alt="CSS3"></img>
            </div>
            
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={js} alt="JavaScript"></img>
            </div>
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={node} alt="Node.JS"></img>
            </div>
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={react} alt="React.JS"></img>
            </div>
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={sass} alt="Styled-Components"></img>
            </div>
            <div onMouseOut={popUp(false)}>
            <Popper open={open} anchorEl={anchorEl} placement={"bottom"} transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper>
            </Paper>
          </Fade>
        )}
      </Popper>
                <img onMouseEnter={popUp(true)} src={typescript} alt="TypeScript"></img>
            </div>
            </Grid>
        </DivLanguages>
     </Main>
     </>
    )
}

export default Home