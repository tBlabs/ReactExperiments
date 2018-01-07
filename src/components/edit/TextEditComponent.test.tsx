import { TextEditComponent } from './TextEditComponent';
import * as React from "react";
import { shallow } from 'enzyme';

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });


test('props.text change changes input.value', () =>
{
    const component = shallow(<TextEditComponent text="init" />);
    let componentInput = component.find('input').first();
    let inputValue = componentInput.props().value;

    expect(inputValue).toBe('init');
    
    component.setProps({ text: 'new' });
    
    componentInput = component.find('input').first(); // do not reuse previous instance - it will not
    inputValue = componentInput.props().value;

    expect(inputValue).toBe('new');
});