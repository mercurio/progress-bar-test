import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import ProgressBar from '../components/ProgressBar';
import '../components/ProgressBar.css';

storiesOf('ProgressBar', module)
  .addDecorator(story => (
    <div style={{textAlign: 'center'}}>
      {story()}
    </div>
  ))
  .add('42 [default range] -> 42%', () => <ProgressBar value="42" />)
  .add('42 [40..400] -> 1%', () => <ProgressBar low="40" high="400" value="42" />)
  .add('40 [40..400] -> 0%', () => <ProgressBar low="40" high="400" value="40" />)
  .add('400 [40..400] -> 100%', () => <ProgressBar low="40" high="400" value="400" />)
  .add('-7 [-7..7] -> 0%', () => <ProgressBar low="-7" high="7" value="-7" />)
  .add('0 [-7..7] -> 50%', () => <ProgressBar low="-7" high="7" value="0" />)
  .add('7 [-7..7] -> 100%', () => <ProgressBar low="-7" high="7" value="7" />)
  .add('7 [-10..0] -> 100%', () => <ProgressBar low="-10" high="0" value="7" />)
  .add('-2.5 [-10..0] -> 75%', () => <ProgressBar low="-10" high="0" value="-2.5" />)
  .add('-3.5 [-11..-1] -> 75%', () => <ProgressBar low="-11" high="-1" value="-3.5" />)
  .add('0 [-7..7] -> 50% big', () => <ProgressBar width="400" height="50" low="-7" high="7" value="0" />)
  .add('0 [-7..7] -> 50% tiny', () => <ProgressBar width="40" height="5" low="-7" high="7" value="0" />)
  .add('-3.5 [-11..-1] -> 75% blue', () => <ProgressBar color="blue" low="-11" high="-1" value="-3.5" />)
