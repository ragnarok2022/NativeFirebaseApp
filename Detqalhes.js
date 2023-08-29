import { StyleSheet, Text, View } from "react-native"

export default function Detalhes(){
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Detalhes do(a) usuário(a)</Text>
            <Text>Nome: Manoel</Text>
            <Text>Email: manoel@email.com</Text>
            <Text>Profissão: Cantor</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold'
    }
})