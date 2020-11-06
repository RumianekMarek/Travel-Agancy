import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component TripSummary', () => {
  it('should render right', () => {
    const component = shallow(<OrderOption name='name' type='type' setOrderOption='set' id='id'/>);
    expect(component).toBeTruthy();
  });

  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });


  it('should render name in title correctly', () => {
    const expectTitle = 'title';
    const component = shallow(<OrderOption name={expectTitle} type='type' setOrderOption='set' id='id'/>);
    expect(component.containsAllMatchingElements([
      <h3 key='title'>{expectTitle}</h3>,
    ]));
  });
});

const optionTypes = {
  dropdown: 'OrderOptionDropdown',
  icons: 'OrderOptionIcons',
  checkboxes: 'OrderOptionCheckboxes',
  number: 'OrderOptionNumber',
  text: 'OrderOptionName',
  date: 'OrderContactDate',
};

const mockProps = {
  id: 'abc',
  name: 'Lorem',
  values: [
    {id: 'aaa', icon: 'h-square', name: 'Lorem A', price: 0},
    {id: 'xyz', icon: 'h-square', name: 'Lorem X', price: 100},
  ],
  required: false,
  currentValue: 'aaa',
  price: '50%',
  limits: {
    min: 0,
    max: 6,
  },
};

const mockPropsForType = {
  dropdown: {},
  icons: {},
  checkboxes: {currentValue: [mockProps.currentValue]},
  number: {currentValue: '1'},
  text: {},
  date: {currentValue: new Date()},
};

const testValue = mockProps.values[1].id;
const testValueNumber = '1';

for(let type in optionTypes){
  describe(`Component OrderOption with type=${type}`, () => {
    /* test setup */
    let component;
    let subcomponent;
    let renderedSubcomponent;
    let mockSetOrderOption;

    beforeEach(() => {
      mockSetOrderOption = jest.fn();
      component = shallow(<OrderOption type={type} setOrderOption={mockSetOrderOption} {...mockProps} {...mockPropsForType[type]}/>);
      subcomponent = component.find(optionTypes[type]);
      renderedSubcomponent = subcomponent.dive();
      
    });

    /* common tests */
    it(`renders ${optionTypes[type]}`, () => {
      expect(subcomponent).toBeTruthy();
      expect(subcomponent.length).toBe(1);
    });

    /* type-specific tests */
    switch (type) {
      case 'dropdown': {
        /* tests for dropdown */
        it('contains select and options', () => {
          const select = renderedSubcomponent.find('select');
          expect(select.length).toBe(1);
        
          const emptyOption = select.find('option[value=""]').length;
          expect(emptyOption).toBe(1);
        
          const options = select.find('option').not('[value=""]');
          expect(options.length).toBe(mockProps.values.length);
          expect(options.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(options.at(1).prop('value')).toBe(mockProps.values[1].id);
        });

        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('select').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue });
        });
        break;
      }
      case 'icons': {
        it('contains Icon', () => {
          const icon = renderedSubcomponent.find('Icon');
          expect(icon.length).toBe(2);
          expect(icon.at(0).prop('name')).toBe(mockProps.values[0].icon);
          expect(icon.at(1).prop('name')).toBe(mockProps.values[1].icon);
        });

        it('should run setOrderOption function on click', () => {
          renderedSubcomponent.find('.iconActive').simulate('click', {currentTarget: {value: mockProps.values[0].id}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: mockProps.values[0].id});

          renderedSubcomponent.find('.icon').simulate('click', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(2);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
        });
        break;
      }
      case 'checkboxes': {
        it('contains all checkboxes', () => {
          const check = renderedSubcomponent.find('input');
          expect(check.length).toBe(2);
          expect(check.at(0).prop('value')).toBe(mockProps.values[0].id);
          expect(check.at(1).prop('value')).toBe(mockProps.values[1].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('[value="xyz"]').simulate('change', {currentTarget: {checked: true}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: [mockProps.currentValue, testValue]});
        });
        break;
      }
      case 'number': {
        it('contains input', () => {
          const element = renderedSubcomponent.find('input');
          expect(element.length).toBe(1);
          expect(element.prop('value')).toBe(testValueNumber);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValueNumber}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValueNumber});
        });
        break;
      }
      case 'text': {
        it('contains input', () => {
          const element = renderedSubcomponent.find('input');
          expect(element.length).toBe(1);
          expect(element.prop('value')).toBe(mockProps.values[0].id);
        });
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('input').simulate('change', {currentTarget: {value: testValue}});
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
        });
        break;
      }
      case 'date': {
        it('should run setOrderOption function on change', () => {
          renderedSubcomponent.find('a').simulate('change', testValue);
          expect(mockSetOrderOption).toBeCalledTimes(1);
          expect(mockSetOrderOption).toBeCalledWith({ [mockProps.id]: testValue});
        });
        break;
      }
    }
  });
}