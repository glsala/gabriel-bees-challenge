import React from "react";
import TagsCSS from "./Tags.module.css";
import BreweryType from "./../../assets/icons/brewery-type.svg";
import Phone from "./../../assets/icons/phone.svg";
import PostalCode from "./../../assets/icons/postal-code.svg";

interface Props {
  content: any;
}

const Tags: React.FC<Props> = ({ content }) => {
  return (
    <>
      <ul className={TagsCSS.tags}>
        <li>
          <div className={TagsCSS.tag}>
            <img
              src={BreweryType}
              className={TagsCSS.tagIcon}
              alt="Brewery Type"
            />
            <span className={TagsCSS.tagText}>{content.brewery_type}</span>
          </div>
        </li>
        <li>
          <div className={TagsCSS.tag}>
            <img src={PostalCode} alt="Postal Code" />
            <span className={TagsCSS.tagText}>{content.postal_code}</span>
          </div>
        </li>
        <li>
          <div className={TagsCSS.tag}>
            <img src={Phone} alt="Phone" />
            <span className={TagsCSS.tagText}>{content.phone}</span>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Tags;
