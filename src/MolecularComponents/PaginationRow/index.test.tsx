import React from "react";
import PaginationRow from "./index";
import testRenderer, { act } from "react-test-renderer";
import { Pagination } from "antd";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import expect from "expect";
import { shallowToJson } from "enzyme-to-json";

configure({ adapter: new Adapter() });

describe("TableRowComponent", () => {
  it("Should render pagination row component", async () => {
    const component = testRenderer.create(
      <PaginationRow onClickParent={(data) => {}} current={1} count={100} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should render pagination with 500 of elements", async () => {
    const component = testRenderer.create(
      <PaginationRow onClickParent={(data) => {}} current={1} count={500} />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("Should simulate on Change Event", async () => {
    const event = {
      target: { page: 2, pageSize: 100 },
    } as any;
    const onClickParent = jest.fn().mockImplementation((event) => {
      return {
        page: event.target.page,
        pageSize: event.target.pageSize,
      };
    });
    let component: any;
    act(() => {
      component = testRenderer.create(
        <PaginationRow onClickParent={onClickParent} current={4} count={3900} />
      );
    });
    const testInstance = component.root;
    act(() => {
      testInstance.findByType(Pagination).props.onChange(event);
      component.update(
        <PaginationRow
          onClickParent={() => onClickParent(event)}
          current={2}
          count={3900}
        />
      );
      expect(onClickParent).toBeCalled();
      expect(onClickParent.mock.calls.length).toEqual(1);
      expect(onClickParent(event)).toEqual({ page: 2, pageSize: 100 });
      let tree = component.toJSON();
      expect(tree).toMatchSnapshot();
    });
  });
  it("Should simulate on Click Button", async () => {
    const onClickParent = jest
      .fn((event) => event)
      .mockImplementation(({ page, pageSize }) => {
        return {
          page,
          pageSize,
        };
      });
    const component = mount(
      <PaginationRow onClickParent={onClickParent} current={4} count={3900} />
    );
    component.find(".ant-pagination-item-2").simulate("click");
    expect(
      component.find(".ant-pagination-item-active").children().find("a").text()
    ).toEqual("2");
    act(() => {
      expect(shallowToJson(component)).toMatchSnapshot();
    });
  });
});
