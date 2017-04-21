import * as Im from 'immutable';
import {List, ListItem} from 'material-ui/List';
import Paper from 'material-ui/Paper';
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
            <ListItem key={content.id} style={styles.listItem}>
              <Paper style={styles.paper}>
                <p>{content.id}</p>
                <p>{content.desc}</p>
              </Paper>
            </ListItem>
          );
        })
      }
    </List>
  );
};

const styles = {
  listItem: {
    width: '75%',
  },
  paper: {
    // display: 'inline-block',
    height: 800,
    margin: 0,
    textAlign: 'center',
    width: '95%',
  }
}

export default SearchResult;
