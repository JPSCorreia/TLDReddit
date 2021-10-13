import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import React from 'react';
import Comment from '../App/components/Comment';
configure({adapter: new Adapter()});


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


  it('Should render with FAKE test data', () => {

    const props = createTestProps();
    const component = shallow(<Comment {...props} />);
    expect(component).toMatchSnapshot();

  });


  it('Should render even with UNDEFINED test data', () => {

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


  it("renders Comment component header with id attribute being passed properly", () => {
    
    const props = createTestProps();
    const header = (<div class="comment" id='comment-r/worldnews-1-2'></div>);
    const component = shallow(<Comment {...props} />);
    expect(component.contains(header)).toEqual(true);

  });

});

