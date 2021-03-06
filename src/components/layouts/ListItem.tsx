import React from 'react';
import {StyleSheet} from 'react-native';
import {SectionItemText} from 'components/texts';
import {Row} from 'components/layouts/Row';

type Props = {
  isSelected?: boolean;
  style?: object;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 84,
  },
});

export function ListItem({isSelected, style, text}: Props) {
  return (
    <Row style={[styles.container, style]}>
      <SectionItemText isSelected={isSelected} text={text} />
    </Row>
  );
}
