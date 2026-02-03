import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, TextInput } from "react-native";

const ScheduleVisit = ({ route }) => {
  const { id } = route.params;  
  const [visitDate, setVisitDate] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [isError, setIsError] = useState(false);

  const handleSchedule = () => {
    if (visitDate) {
      setConfirmationMessage(`Your visit for property ${id} is scheduled for ${visitDate}.`);
      setIsError(false);
    } else {
      setConfirmationMessage("Please select a date before confirming your visit.");
      setIsError(true);
    }
  };

  return (
    <View style={styles.scheduleVisit}>
      <Image
        source={require("./assets/downloadd.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Schedule a Visit for Property {id}</Text>

      
      <TextInput
        
        style={styles.dateInput}
        placeholder="Select Visit Date"
        value={visitDate}
        onChangeText={(text) => setVisitDate(text)}
        placeholderTextColor="#bbb"
        keyboardType="default"
      />

      <Button title="Confirm Visit" onPress={handleSchedule} color="#007BFF" />

      {confirmationMessage && (
        <View style={styles.confirmationMessageContainer}>
          <Text
            style={[styles.confirmationMessage, isError ? styles.errorMessage : styles.successMessage]}
          >
            {confirmationMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    height: 80,
    width: 100,
    marginBottom: 30,
    alignSelf: "center",
    transform: [{ scale: 1.4 }],
  },
  scheduleVisit: {
    padding: 30,
    maxWidth: 600,
    margin: 20,
    backgroundColor: "#1f1f1f",
    borderRadius: 8,
    textAlign: "center",
  },
  title: {
    color: "#f1f1f1",
    fontSize: 22,
    marginBottom: 30,
  },
  dateInput: {
    width: "100%",
    padding: 15,
    backgroundColor: "#2b2b2b",
    color: "#fff",
    borderColor: "#555",
    borderRadius: 5,
    fontSize: 16,
    marginBottom: 20,
  },
  confirmationMessageContainer: {
    marginTop: 20,
    textAlign: "center",
  },
  confirmationMessage: {
    fontSize: 25,
    fontWeight: "bold",
  },
  successMessage: {
    color: "green",
  },
  errorMessage: {
    color: "red",
  },
});

export default ScheduleVisit;
