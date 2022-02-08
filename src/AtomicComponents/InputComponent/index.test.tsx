import React from "react";
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
configure({ adapter: new Adapter() });
import renderer from "react-test-renderer";
import { mount } from "enzyme";
import InputComponent from "./index";
import { SearchOutlined } from "@ant-design/icons";

describe("InputComponent", () => {
  it("Should render Input component", () => {
    const component = renderer.create(
      <InputComponent
        id={"testInput"}
        placeholder={"search"}
        onKeyUpFunction={() => {}}
        prefix={<SearchOutlined />}
      />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should send keyup event", () => {
    const mockCallBack = jest.fn();
    const component = mount(
      <InputComponent
        id={"testInput"}
        placeholder={"search"}
        onKeyUpFunction={(event: React.FormEvent<HTMLInputElement>) =>
          mockCallBack(event)
        }
        prefix={<SearchOutlined />}
      />
    );
    component.find("span").find("input").simulate("keyUp", { keyCode: 9 });
    expect(mockCallBack).toHaveBeenCalledTimes(1);
  });
});
