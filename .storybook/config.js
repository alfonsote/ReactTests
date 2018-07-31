import { configure } from '@storybook/react';
import '@storybook/addon-console';

function loadStories() {
  require('../src/stories/index.js');
}

configure(loadStories, module);
