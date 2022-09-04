import SignUp from '../../components/sign-up-form/SignUp';
import SignIn from '../../components/sign-in-form/SignIn';
 import {AuthenticationContainer} from './Authentication.styled';

const Authentication = () => {

  return (
    <AuthenticationContainer>
      <SignIn/>
      
      <SignUp/>
    </AuthenticationContainer>
  )
}

export default Authentication
