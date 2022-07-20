import { Form } from 'semantic-ui-react';

import '../styles/loginForm.scss';

function LoginForm() {
return (
  <Form size='large' inverted>
    <Form.Input fluid label='Email' placeholder='Email' />
    <Form.Input fluid type='password' label='Mot de passe' placeholder='Mot de passe' />
    <Form.Button>C'est parti !</Form.Button>
  </Form>
);

}

export default LoginForm;