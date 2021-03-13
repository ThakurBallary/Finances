import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useLanguage} from 'hooks';
import {TextButton} from 'components/buttons';
import TransactionItem from './Item';

type Props = {
  accountNumber: string;
};

const styles = StyleSheet.create({
  container: {
    marginTop: 32,
  },
  buttonText: {
    opacity: 0.6,
  },
});

export default function AddTransaction({accountNumber}: Props) {
  const language = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  function hideForm() {
    setIsVisible(false);
  }

  function showForm() {
    setIsVisible(true);
  }

  return (
    <View style={styles.container}>
      <TextButton
        onPress={showForm}
        text={language.addTransaction}
        textStyle={styles.buttonText}
      />
      {isVisible && (
        <View>
          <TransactionItem
            accountNumber={accountNumber}
            amount={0}
            date=""
            id=""
            isActive={true}
            mode=""
            title=""
            hideForm={hideForm}
          />
        </View>
      )}
    </View>
  );
}
