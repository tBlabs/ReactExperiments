import { TextEditComponent, TextEditProps, TextEditState } from './TextEditComponent';
import * as React from "react";
import { shallow, ShallowWrapper } from 'enzyme';

const enzyme = require("enzyme");
const Adapter = require("enzyme-adapter-react-16");
enzyme.configure({ adapter: new Adapter() });

describe(TextEditComponent.name, () =>
{
    let component: ShallowWrapper<TextEditProps, TextEditState>;
    const GetInputValue = (component) => component.find('input').first().props().value; // this is a function because it's only way to always get current value of the input

    beforeEach(() =>
    {
        component = shallow(<TextEditComponent text="init" />);
    });

    it('props.text change changes input.value', () =>
    {
        const initialInputValue = GetInputValue(component);
        expect(initialInputValue).toBe('init');
        
        component.setProps({ text: 'new' });
        
        const changedInputValue = GetInputValue(component);
        expect(changedInputValue).toBe('new');
    });

    it('props.text change changes input.value', () =>
    {
        let x=component.find('input').first().props().style;
        console.log(x);
    });

});