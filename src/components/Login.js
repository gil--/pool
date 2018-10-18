import React, { Component } from 'react';
import { Button, FormField, TextInputField, Textarea, Pane } from 'evergreen-ui';

class Login extends Component {
    render() {
        return <Pane margin={20} clearfix display="flex" alignItems="center">
            <Pane border width={'50%'} padding={20}>
              <form>
                <TextInputField label="Pool Name" name="pool-name" placeholder="My Fancy Pool" height={40} />
                <TextInputField label="Location" name="pool-location" placeholder="New York, New York" height={40} />
                <FormField
                    label="Description"
                >
                    <Textarea label="Description" name="pool-description" placeholder="" />
                </FormField>
                <Button marginRight={16} appearance="primary" height={56}>
                  Create Pool
                </Button>
              </form>
            </Pane>
          </Pane>;
    }
}

export default Login;
