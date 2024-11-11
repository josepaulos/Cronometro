import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botaoVai: 'Vai',
      ultimo: null
    }
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpa = this.limpa.bind(this);

  }
  vai() {

    if (this.timer != null) { // timer está girando
      // Para o timer
      clearInterval(this.timer);
      this.timer = null; // reseta a variavel de controle
      this.setState({ botaoVai: 'Vai' })
    } else {
      // incrementa o state em passos de 0.1 (100 ms) 
      // atribui o resultado do setInterval() a variavel "timer"
      this.timer = setInterval(() => {
        this.setState({ numero: this.state.numero + 0.1 })
      }, 100);
      this.setState({ botaoVai: 'Parar' })
    }
  }

  limpa() {
    if (this.timer != null) {//timer está girando
      clearInterval(this.timer);
      this.timer = null;//reseta a variavel de controle 
    }
    this.setState({
      ultimo: this.state.numero,
      botaoVai: 'Vai',
      numero: 0
    })
  }


  render() {

    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/cronometro.png')}
          style={styles.cronometro}
        />
        <Text style={styles.timer}>
          {this.state.numero.toFixed(2)}
        </Text>

        <View style={styles.btnArea}>
          <TouchableOpacity style={styles.btn} onPress={this.vai}>
            <Text style={styles.btnTexto}>{this.state.botaoVai}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={this.limpa}>
            <Text style={styles.btnTexto}>LIMPA</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ultArea}>
          <Text style={styles.ultTxt}>
            {this.state.ultimo > 0 ? 'Ultimo tempo: ' + this.state.ultimo.toFixed(2) : ''}
          </Text>

        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00aeef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cronometro: {
    width: 250,
    height: 250
  },
  timer: {
    marginTop: -160,
    color: '#FFF',
    fontSize: 65,
    fontWeight: 'bold'
  },
  btnArea: {
    flexDirection: 'row',
    marginTop: 70,
    height: 40
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    height: 40,
    margin: 17,
    borderRadius: 9
  },
  btnTexto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00aeef'
  },
  ultArea: {
    marginTop: 40
  },
  ultTxt: {
    fontSize: 25,
    fontStyle: 'italic',
    color: '#FFF'
  }


});

export default App;