import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Board from '.././components/Board';


describe ('testing Board component', () => {

  it('Board renders as a div', () => {
    const board = shallow(<Board />)
    expect(board.type()).toBe('div');
  });

});
