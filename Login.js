import { useEffect, useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from './firebaseConfig'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const fazerLogin = async () => {
        try {
            const credencial = await signInWithEmailAndPassword(auth, email, senha)
            const usuario = credencial.user
            console.log('Usuário logado com sucesso', usuario)
            navigation.navigate('home')
        } catch (error) {
            console.error("Erro ao realizar o login")
            console.error("Mensagem: ", error.message)
            console.error("Código", error.code)
        }
    }

    const irTelaCadastro = () => {
        navigation.navigate("cadastro")
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="E-mail"
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.textinput}
                secureTextEntry={true}
                placeholder="Senha"
                value={senha}
                onChangeText={(text) => setSenha(text)}
            />
            <Button title="LOGIN" onPress={fazerLogin} />
            <View style={styles.space}></View>
            <Button title="CADASTRE-SE" onPress={irTelaCadastro} />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textinput: {
        width: '90%',
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 10,
        marginVertical: 10
    },
    space: {
        marginVertical: 5
    }
})