import React from "react";
import { Gato } from '../Gato';
import { Perro } from '../Perro';
import { Zoombies } from '../pluralsign/zoommbies';

import('../../node_modules/antd/dist/antd.css');
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { Button, Welcome } from '@storybook/react/demo';
storiesOf('Welcome', module).add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
storiesOf('Alfonso', module).add('Test Novosit', () =>    <Gato/>);
storiesOf('Alfonso', module).add('array', () =>    <Perro/>);
storiesOf('Pluralsign', module).add('Test Novosit', () =>    <Zoombies/>);

storiesOf('Button', module)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('with some emoji', () => (
    <Gato/>
  ));
