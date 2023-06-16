import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { RadioButton } from 'react-native-paper';

const App = ()  => {
  const [codigoAcesso, setCodigoAcesso] = useState('');
  const [senha, setSenha] = useState('');
  const [docente, setDocente] = useState('');
  const [unidadeTematica, setUnidadeTematica] = useState('');
  const [monitoriaResponsavel, setMonitoriaResponsavel] = useState('');
  const [tipoAtividade, setTipoAtividade] = useState('');
  const [turno, setTurno] = useState('');

  const handleLoginLinkPress = () => {
  };

  const handleCodigoAcessoChange = (text) => {
    setCodigoAcesso(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const handleDocenteChange = (text) => {
    setDocente(text);
  };

  const handleUnidadeTematicaChange = (text) => {
    setUnidadeTematica(text);
  };

  const handleMonitoriaResponsavelChange = (text) => {
    setMonitoriaResponsavel(text);
  };

  const handleTipoAtividadeChange = (text) => {
    setTipoAtividade(text);
  };

  const handleTurnoChange = (text) => {
    setTurno(text);
  };

  const handleSubmit = () => {
    const formData = {
      codigoAcesso,
      senha,
      docente,
      unidadeTematica,
      monitoriaResponsavel,
      tipoAtividade,
      turno,
    };

    fetch('http://192.168.15.9:3000/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Error');
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.formHeader}>Cadastro</Text>
        <View style={styles.inputGroup}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Código de Acesso</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua matrícula"
              required
              onChangeText={handleCodigoAcessoChange}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua Senha"
              required
              onChangeText={handleSenhaChange}
            />
          </View>
        </View>
        <View style={styles.inputGroup}>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Docente</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite nome completo"
              required
              onChangeText={handleDocenteChange}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Unidade Temática</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua disciplina"
              required
              onChangeText={handleUnidadeTematicaChange}
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Monitoria Responsável</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite o nome do monitor"
              required
              onChangeText={handleMonitoriaResponsavelChange}
            />
          </View>
        </View>
        <View style={styles.genderInputs}>
        <Text style={styles.genderTitle}>Tipo de Atividade</Text>
        <View style={styles.genderGroup}>
          <TouchableOpacity style={styles.genderInput} onPress={() => handleTipoAtividadeChange('Atividade Prática Regular')}>
            <RadioButton color="#ccc" value="Atividade Prática Regular" status={tipoAtividade === 'Atividade Prática Regular' ? 'checked' : 'unchecked'} />
            <Text style={[styles.radioButtonLabel, { color: tipoAtividade === 'Atividade Prática Regular' ? '#6c63ff' : '#000' }]}>Prática Regular</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.genderInput} onPress={() => handleTipoAtividadeChange('Atividade Extensionista')}>
            <RadioButton color="#ccc" value="Atividade Extensionista" status={tipoAtividade === 'Atividade Extensionista' ? 'checked' : 'unchecked'} />
            <Text style={[styles.radioButtonLabel, { color: tipoAtividade === 'Atividade Extensionista' ? '#6c63ff' : '#000' }]}>Extensionista</Text>
          </TouchableOpacity>
        </View>
        </View>
        <View style={styles.genderInputs}>
          <Text style={styles.genderTitle}>Turno</Text>
          <View style={styles.genderGroup}>
            <TouchableOpacity style={styles.genderInput} onPress={() => handleTurnoChange('Manhã')}>
              <RadioButton color="#ccc" value="Manhã" status={turno === 'Manhã' ? 'checked' : 'unchecked'} />
              <Text style={styles.radioButtonLabel}>Manhã</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.genderInput} onPress={() => handleTurnoChange('Noite')}>
              <RadioButton color="#ccc" value="Noite" status={turno === 'Noite' ? 'checked' : 'unchecked'} />
              <Text style={styles.radioButtonLabel}>Noite</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.paragraph}>
          Já tem uma conta? <Text style={styles.link} onPress={handleLoginLinkPress}>Acesse Aqui</Text>
        </Text>
        <TouchableOpacity style={styles.continueButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#6c63ff',
    justifyContent: 'center',
  },
  formImage: {
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  form: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
    elevation: 2,
    justifyContent: 'center',
  },
  formHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2b1cd1',
    marginBottom: 20,
  },
  inputGroup: {
    width: '100%',
    marginBottom: 20,
  },
  inputBox: {
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  selectBox: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  genderInputs: {
    marginBottom: 20,
  },
  genderTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  genderGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genderInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  radioButtonLabel: {
    marginLeft: 5,
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 10,
  },
  link: {
    color: '#2b1cd1',
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#6c63ff',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;