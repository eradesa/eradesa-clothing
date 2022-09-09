import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'

const Navigation = () => {
    return (
      <Fragment>
        <div className='navigation'>
          <Link className='logo-container' to='/'>
            <CrwnLogo className='logo' />
          </Link>
          <div className='nav-links-container'>
            <Link className='nav-link' to='/shop'>
                SHOP
            </Link>
            <Link className='nav-link' to='/MenuItem2'>
                MENUITEM2
            </Link>
            <Link className='nav-link' to='/MenuItem3'>
                MENUITEM3
            </Link>
            <Link className='nav-link' to='/MenuItem4'>
                MENUITEM4
            </Link>
            <Link className='nav-link' to='/MenuItem5'>
                MENUITEM5
            </Link>
            <Link className='nav-link' to='/auth'>
                SIGN IN
            </Link>
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  
  };

export default Navigation;