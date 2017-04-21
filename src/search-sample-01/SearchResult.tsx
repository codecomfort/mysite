import * as Im from 'immutable';
import {List, ListItem} from 'material-ui/List';
import * as React from 'react';

interface IContent {
  id: number;
}

export class Content implements IContent {
  public id: number;
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}

interface IProps {
  contents: Content[];
}

export const SearchResult = (props: IProps) => {
  const {contents} = props;
  return (
    <List>
      {
        contents.map((content) => {
          return (
            <ListItem>
              <p>{content.id}</p>
              <p>{content.desc}</p>
            </ListItem>
          );
        })
      }
    </List>
  );
};

export default SearchResult;
