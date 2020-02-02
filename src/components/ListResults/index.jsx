// @flow

import * as React from "react";
import _isEmpty from "lodash/isEmpty";
import ListItem from "./ListItem";
import { StyledList } from "./styles";

function ListResults({ list }: { list: ?Object }) {
  if (_isEmpty(list)) {
    console.error("List of results is empty");
  }

  return (
    <StyledList>
      {list.map((item, index) => (
        <ListItem
          key={`${item.title}-${index * 2}`}
          domProps={{
            id: `${item.title}-${index * 2}`
          }}
          title={item.title}
          snippet={item.snippet}
        />
      ))}
    </StyledList>
  );
}
export default ListResults;
