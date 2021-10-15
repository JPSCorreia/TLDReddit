import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import CommentHead from '../App/components/CommentHead';
Enzyme.configure({ adapter: new Adapter() });


// Function to create test properties, spread props in the end allows changing of attributes.
const createTestProps = (props) => {
  return {
    topicData: {
      selftext: "this is a test for comment's body",
    },
    topicId: 'r/worldnews-1',
    dataKey: 2,
    ...props
  }
}

describe('CommentHead Component Testing:', () => {


  it('Should render with passed props data.', () => {

    const props = createTestProps();
    const component = shallow(<CommentHead {...props} />);
    expect(component).toMatchSnapshot();

  });


  it('Should render even with UNDEFINED passed props data.', () => {

    const props = createTestProps({
      topicData: {
        selftext: undefined
      },
      topicId: undefined,
      dataKey: undefined
    })

    const component = shallow(<CommentHead {...props} />);
    expect(component).toMatchSnapshot();

  });


  it('Should render div element with the expected id attribute.', () => {

    const props = createTestProps();
    const component = shallow(<CommentHead {...props} />);
    // find the div element using a css selector
    const divHeader = component.find('div.comment-head');
  
    expect(divHeader.props()).toHaveProperty('id', 'comment-head-r/worldnews-1-2');

  });

  it('Props passing successfully.', () => {

    const props = createTestProps();
    const component = mount(<CommentHead {...props} />);
  
    expect(component.props()).toEqual(props);

  });


});