import * as React from 'react';
import { Checkbox } from 'react-native-paper';
import { View, Text, StyleSheet } from 'react-native';

export default function MyCheckbox() {
  const [group, setGroup] = React.useState({
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  });

  const toggleCheckbox = (key) => {
    setGroup({ ...group, [key]: !group[key] });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Respiratory</Text>
      <View style={styles.group}>
        <Text style={styles.label}>Dyspnea</Text>
        <Checkbox
          status={group.dyspnea ? 'checked' : 'unchecked'}
          onPress={() => toggleCheckbox('dyspnea')}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Rales</Text>
        <Checkbox
          status={group.rales ? 'checked' : 'unchecked'}
          onPress={() => toggleCheckbox('rales')}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Cough</Text>
        <Checkbox
          status={group.cough ? 'checked' : 'unchecked'}
          onPress={() => toggleCheckbox('cough')}
        />
      </View>

      <View style={styles.group}>
        <Text style={styles.label}>Cyanosis</Text>
        <Checkbox
          status={group.cyanosis ? 'checked' : 'unchecked'}
          onPress={() => toggleCheckbox('cyanosis')}
        />
      </View>

      <View style={styles.group}>
          <Text style={styles.label}>Tachypnea</Text>
          <Checkbox
            status={group.tachypnea ? 'checked' : 'unchecked'}
            onPress={() => toggleCheckbox('tachypnea')}
          />
    </View>

    <Text style={styles.label}>Respiratory</Text>
          <View style={styles.group}>
            <Text style={styles.label}>Dyspnea</Text>
            <Checkbox
              status={group.checkbox1 ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox('dyspnea')}
            />
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Rales</Text>
            <Checkbox
              status={group.checkbox2 ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox('rales')}
            />
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Cough</Text>
            <Checkbox
              status={group.checkbox3 ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox('cough')}
            />
          </View>

          <View style={styles.group}>
            <Text style={styles.label}>Cyanosis</Text>
            <Checkbox
              status={group.checkbox4 ? 'checked' : 'unchecked'}
              onPress={() => toggleCheckbox('cyanosis')}
            />
          </View>

          <View style={styles.group}>
              <Text style={styles.label}>Tachypnea</Text>
              <Checkbox
                status={group.checkbox4 ? 'checked' : 'unchecked'}
                onPress={() => toggleCheckbox('tachypnea')}
              />
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // centra verticalmente
    alignItems: 'center',     // centra orizzontalmente
    backgroundColor: '#fff',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
  },
});
