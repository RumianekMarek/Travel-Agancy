import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

const tags =['beach'];

describe('Component TripSummary', () => {
  it('should render link', () => {
    const id = 'abc';
    const expectedLink = '/trip/abc';
    const component = shallow(<TripSummary id={id} image='image.jpg' tags={tags}/>);
    expect(component.find('.link').prop('to')).toEqual(expectedLink);
  });

  it('should correct image and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'name';
    const component = shallow(<TripSummary image='image.jpg' name='name' tags={tags}/>);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedAlt);
  });

  it('renders props correctli', () => {
    const name = 'Turky';
    const cost = '$3';
    const days = 3;
    const component = shallow(<TripSummary id='id' image='image.jpg' name={name} cost={cost} days={days} tags={tags}/>);
    expect(component.containsAllMatchingElements([
      <h3 key={name}>{name}</h3>,
      <span key={days}>{days} days</span>, 
      <span key={cost}>from {cost}</span>,
    ]));
  });

  it('should render without:(id, image, name, cost, days) without crashing', () => {
    const component = shallow(<TripSummary tags={tags} />);
    expect(component).toBeTruthy();
  });

  it('should render all tags in order', () =>{
    const tags =['beach','car' ,'kitchen'];
    const component = shallow(<TripSummary tags={tags} />);
    expect(component.find('.tag').at(0).props().children).toEqual('beach');
    expect(component.find('.tag').at(1).props().children).toEqual('car');
    expect(component.find('.tag').at(2).props().children).toEqual('kitchen');
  });
  
  it('should render wtih no props without crashing', () => {
    const component = shallow(<TripSummary/>);
    expect(component).toBeTruthy();
  });
}); 