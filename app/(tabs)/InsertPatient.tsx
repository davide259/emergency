import * as React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

const symptoms = {
  Respiratory: ['Dyspnea', 'Rales', 'Cough', 'Cyanosis', 'Tachypnea'],
  Cardiac: ['Chest pain', 'Palpitations', 'Hypotension', 'Tachycardia', 'Absent pulse'],
  Neurological: ['Confusion', 'Loss of consciousness', 'Convulsions', 'Paralysis'],
  Cutaneous: ['Pallor', 'Cold sweats', 'Petechiae', 'Jaundice'],
  Gastrointestinal: ['Abdominal pain', 'Vomiting', 'Diarrhea', 'Blood in stool'],
  Trauma: ['Wounds', 'Fractures', 'Bruises', 'Immobility', 'Hemorrhages']
};

export default function SymptomsCheckboxList() {
  const [checkedItems, setCheckedItems] = React.useState({});

  const toggleCheckbox = (category, symptom) => {
    const key = `${category}-${symptom}`;
    setCheckedItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Object.entries(symptoms).map(([category, items]) => (
        <View key={category} style={styles.groupContainer}>
          <Text style={styles.categoryTitle}>{category}</Text>
          {items.map((symptom) => {
            const key = `${category}-${symptom}`;
            return (
              <View key={key} style={styles.checkboxContainer}>
                <Checkbox
                  status={checkedItems[key] ? 'checked' : 'unchecked'}
                  onPress={() => toggleCheckbox(category, symptom)}
                />
                <Text style={styles.label}>{symptom}</Text>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  groupContainer: {
    marginBottom: 30,
    width: '100%',
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    paddingLeft: 20,
  },
  label: {
    fontSize: 16,
  },
});
