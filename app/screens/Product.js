import {View, Text, StyleSheet, Button} from 'react-native'

export const Product = ({navigation}) =>{
    return <View style={styles.container}> 
        <Text>Bienvenidos a mi tienda, soy fer</Text>
        <View>

            <Text style={styles.producto1} >azucar 0.50 </Text>
            <Text style={styles.producto2}>huevos 0.17</Text>
            <Text style={styles.producto3}>platanos 0.15</Text>
        </View>

        <Button
            title='HOME'
            onPress={()=>{
                navigation.navigate('WelcomeFernando');
            }}
        />
    </View>

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#68d13f',
      alignItems: 'center',
      justifyContent: 'center',
    },
    producto1:{
        color:"#8945b6"
    },
    producto2:{
        color:"#6e8716"
    },
    producto3:{
        color:"#c0b630"
    },
  });