import React from 'react'
import Footer from '../Footer';
import HomePage from '../HomePage';
import ListIcon from '@mui/icons-material/List';
import "./Navbar.css";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';



const NavbarApp = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 ,
      height: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100%'
      ,
      background: 'linear-gradient(45deg,purple,whitesmoke)'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className='smallscreenmaindiv'>
      <div className='smallscreen'>
        <a href="#howItWorks" style={{
          fontWeight: 'bold', textDecoration: 'none',
          color: 'black', fontSize: 'calc(2vw+2vh)'
        }}
        > How it works</a>
      </div>
      <div className='smallscreenhamburger'  >
        <a className={'Navbar_sublist_home'}
          exact activeclassName="active" href="#Home">Who we are</a>
      </div>
      <div className='smallscreenhamburger' >
        <a className={'Navbar_sublist_home'}
          exact activeclassName="active" href="#Home"> What we do</a>
      </div>
      <div className='smallscreenhamburger'>
        <a className={'Navbar_sublist_home'} href="#Footer">Contact us</a>
      </div>
      </div>



    </Box >
  );

return (
  <>


    <div className={'Navbar_div'}>
      <div className='smallscreenhamburger' style={{ fontSize: 'calc(3vw + 2vh )', fontFamily: 'The Nautigal', fontWeight: 'bold' }}>

        <div>
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <ListIcon onClick={toggleDrawer(anchor, true)} />
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div style={{ fontSize: 'calc(3vw + 2vh )', fontFamily: 'The Nautigal', fontWeight: 'bold' }}>
        Grid
      </div>

      <div className='smallscreen'>
        <a href="#howItWorks" style={{
          fontWeight: 'bold', textDecoration: 'none',
          color: 'black', fontSize: 'calc(2vw+2vh)'
        }}
        > How it works</a>
      </div>
      <div className='smallscreen'  >
        <a className={'Navbar_sublist_home'}
          exact activeclassName="active" href="#Home">Who we are</a>
      </div>
      <div className='smallscreen' >
        <a className={'Navbar_sublist_home'}
          exact activeclassName="active" href="#Home"> What we do</a>
      </div>
      <div className='smallscreen'>
        <a className={'Navbar_sublist_home'} href="#Footer">Contact us</a>
      </div>
      <div >
        <a className={'Navbar_sublist'} href="#signin">Sign in</a>
      </div>

    </div>

    <div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" className={'Navbar_subheadings scrollspy-example'} tabindex="1">
      <h4 id="Home" style={{ textAlign: 'center', height: '0', overflow: 'hidden' }} >Home</h4>
      <HomePage />
      <h4 id="Footer" style={{ textAlign: 'center', height: '0', overflow: 'hidden' }} >Skills</h4>
      <Footer />

    </div>


  </>

)
}

export default NavbarApp
