import React from "react";
import Link from "next/link";

import classNames from "classnames";
import { Select } from "antd";

import { SHOP } from "../../common/defines";

const ShopSidebar = ({ categories }) => {
  const { Option } = Select;
  // const dispatch = useDispatch();
  // const globalState = useSelector((state) => state.globalReducer);
  // const shopState = useSelector((state) => state.shopReducer);

  // const subCategory = SHOP.category.find(
  //   (item) => item.name.toLowerCase() === globalState.category.toLowerCase()
  // // );
  // const onChooseSubCategory = (data) => {
  //   if (!data || data === 'all') {
  //     return dispatch(setSubCategory(''));
  //   }
  //   return dispatch(setSubCategory(data));
  // };
  // const handleChange = (value) => {
  //   onChooseSubCategory(value);
  // };
  return (
    <div className="shop-sidebar">
      <h5>Category</h5>
      <div className="shop-sidebar__subcategory">
        <ul>
          <li>
            <Link href="">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  onChooseSubCategory("all");
                }}
              >
                <i className="icon_document_alt" />
                All Category
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                Sweater
                <i />
              </a>
            </Link>
          </li>
        </ul>
      </div>
      <div className="shop-sidebar__subcategory-mobile">
        <Select defaultValue="all" style={{ width: "100%" }}>
          <Option value="all">
            <i className="icon_document_alt" />
            All Category
          </Option>

          <Option>
            {" "}
            <i />
          </Option>
        </Select>
      </div>
    </div>
  );
};

export default ShopSidebar;
