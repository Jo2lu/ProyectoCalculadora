import React, { Component } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Botones from "./components/Botones";
import Fila from "./components/Fila";
import Logica, { initialState } from "./until/Logica";

// create class component of App
export default class App extends Component {
  state = initialState;

  // handle tap method
  HandleTap = (type, value) => {
    this.setState((state) => Logica(type, value, state));
  };

  // render method
  render() {
    return (
      <View style={styles.container}>
        {/* Status bae here */}
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>
          <Text style={styles.value}>
            {parseFloat(this.state.currentValue).toLocaleString()}
          </Text>

        <SafeAreaView style={styles.fondoVerde}>
          {/* Do create componentRow */}
          <Fila >
            <Botones
              text="C"
              theme="secondary"
              onPress={() => this.HandleTap("clear")}
            />

            <Botones
              text="±"
              theme="secondary"
              onPress={() => this.HandleTap("posneg")}
            />

            <Botones
              text="%"
              theme="secondary"
              onPress={() => this.HandleTap("percentage")}
            />

            <Botones
              text="÷"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "/")}
            />
          </Fila>

          {/* Number */}
          <Fila >
            <Botones text="7" onPress={() => this.HandleTap("number", 7)} />
            <Botones text="8" onPress={() => this.HandleTap("number", 8)} />
            <Botones text="9" onPress={() => this.HandleTap("number", 9)} />
            <Botones
              text="x"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "*")}
            />
          </Fila>

          <Fila >
            <Botones text="4" onPress={() => this.HandleTap("number", 4)} />
            <Botones text="5" onPress={() => this.HandleTap("number", 5)} />
            <Botones text="6" onPress={() => this.HandleTap("number", 6)} />
            <Botones
              text="-"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "-")}
            />
          </Fila >

          <Fila >
            <Botones text="1" onPress={() => this.HandleTap("number", 1)} />
            <Botones text="2" onPress={() => this.HandleTap("number", 2)} />
            <Botones text="3" onPress={() => this.HandleTap("number", 3)} />
            <Botones
              text="+"
              theme="secondary"
              onPress={() => this.HandleTap("operator", "+")}
            />
          </Fila>

          <Fila >
            <Botones text="0" onPress={() => this.HandleTap("number", 0)} />
            <Botones text="." onPress={() => this.HandleTap("number", ".")} />
            <Botones
              text="="
              theme="accent"
              onPress={() => this.HandleTap("equal", "=")}
            />
          </Fila>
        </SafeAreaView>
      </View>
    );
  }
}

// create styles of app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4F4762",
    justifyContent: "flex-end",
  },
  value: {
    color: "#fff",
    fontSize: 70,
    textAlign: "right",
    marginRight: 20,
    marginBottom: 10,
  },
  fondoVerde: {
    backgroundColor: "#596643"
  },
});