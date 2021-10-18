import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import React from 'react';
import Comment from '../App/components/Comment';
Enzyme.configure({ adapter: new Adapter() });


// Function to create test properties, spread props in the end allows changing of attributes.
const createTestProps = (props) => {
  return {
    commentData: {
      created_utc: 1634130100,
      author: 'test_author',
      ups: 5000,
      body: "this is a test for comment's body",
    },
    topicId: 'r/worldnews-1',
    dataKey: 2,
    ...props
  }
}

describe('Comment Component Testing:', () => {


  it('Should render with passed props data.', () => {

    const props = createTestProps();
    const component = shallow(<Comment {...props} />);
    expect(component).toMatchSnapshot();

  });


  it('Should render even with UNDEFINED passed props data.', () => {

    const props = createTestProps({
      commentData: {
        created_utc: undefined,
        author: undefined,
        ups: undefined,
        body: undefined
      },
      topicId: undefined,
      dataKey: undefined
    })

    const component = shallow(<Comment {...props} />);
    expect(component).toMatchSnapshot();

  });


  it('Should render div element with the expected id attribute.', () => {

    const props = createTestProps();
    const component = shallow(<Comment {...props} />);
    // find the div element using a css selector
    const divHeader = component.find('div.comment');
  
    expect(divHeader.props()).toHaveProperty('id', 'comment-r/worldnews-1-2');

  });

  it('Props passing successfully.', () => {

    const props = createTestProps();
    const component = mount(<Comment {...props} />);
  
    expect(component.props()).toEqual(props);

  });


});

