import React from 'react';
import Landing from "../pages/Landing";
import * as ReactDOM from 'react-dom';

test('Landing', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<Landing/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        
    })
})