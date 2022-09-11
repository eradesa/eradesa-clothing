import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.contexts";
import { signOutUser } from  '../../utils/firebase/firebase.utils'
import './navigation.styles.scss'

const Navigation = () => {
  const { currentUser }= useContext(UserContext);

  // const signOutHandler = async()=> {
  //   await signOutUser();
  //   setCurrentUser(null);
  //   //console.log(res);
  // };
  //console.log(currentUser);
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
                To do List
            </Link>
            <Link className='nav-link' to='/MenuItem5'>
                Blog
            </Link>
            {
              currentUser ? (
                <span className='nav-link' onClick={signOutUser}>SIGN OUT</span>
                ):(<Link className='nav-link' to='/auth'>
                  SIGN IN
                </Link>
              )
            }
            
          </div>
        </div>
        <Outlet />
      </Fragment>
    )
  
  };

export default Navigation;