import React from 'react';
import {StyleSheet} from 'react-native';
import {SectionHeaderText} from 'components/texts';
import {icons} from 'assets';
import {SectionHeaderIcon} from 'components/icons';
import {Row} from 'components/layouts/Row';

type Props = {
  icon?: icons;
  text: string;
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingTop: 40,
  },
});

export function SectionHeader({icon, text}: Props) {
  return (
    <Row style={styles.container}>
      <SectionHeaderIcon icon={icon} />
      <SectionHeaderText text={text} />
    </Row>
  );
}
