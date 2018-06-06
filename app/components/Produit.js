import React from 'react';
import {
     StyleSheet, 
     Text, 
     View,
     TouchableOpacity,
     FlatList,
     Image,

} from 'react-native';

export default class Produit extends React.Component {
  render() {
    return (
 <View key={this.props.keyval} style={styles.tache}>
                <Text style={styles.tacheText}>{this.props.val.name}</Text>
                <Text style={styles.tacheText}>{this.props.val.price}</Text>
                <Image
                style={styles.Imageurl}
                source={{uri: this.props.val.imgUrl}}
              />
            </View>
    );
  }
}

const styles = StyleSheet.create({
    tache: {
        position: 'relative',
        padding: 20,
        paddingRight: 100,
        borderBottomWidth:2,
        borderBottomColor: '#ededed'
    },
    tacheText: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red',
    },
    Imageurl:{
        width: 50, 
        height: 50,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10
    }
});


