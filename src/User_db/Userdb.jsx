import './index.css'
import UserHeader from './UserHeader.jsx'
import Extrafoot from './Extrafoot.jsx'
import UserFooter from './UserFooter.jsx'
import Navigation from './Navigation.jsx'

function Userdb(){
    return (
        <>
        <UserHeader/>
        <Navigation/>
        <Extrafoot/>
        <UserFooter/>
        </>
    );
}

export default Userdb