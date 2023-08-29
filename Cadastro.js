import { createUserWithEmailAndPassword, getAuth } from "@firebase/auth";
import { addDoc, collection } from "@firebase/firestore";
import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { db } from "./firebaseConfig";

export default function Cadastro({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [profissao, setProfissao] = useState('')
    const [senha, setSenha] = useState('')


    const cadastrar = async () => {
        try {
            const auth = getAuth()
            const credencial = await createUserWithEmailAndPassword(auth, email, senha)

            const usuario = {
                nome: nome,
                email: email,
                profissao: profissao
            }

            const usuarioRef = collection(db, 'usuarios')
            await addDoc(usuarioRef, usuario)
            console.log('Usuário cadastrado com sucesso', credencial.user)
            navigation.navigate('login')
        }
        catch (error) {
            console.error('Erro ao cadastrar o usuário: ', error)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textinput}
                placeholder="Seu nome"
                value={nome}
                onChangeText={setNome}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Seu e-mail"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.textinput}
                placeholder="Sua profissão"
                value={profissao}
                onChangeText={setProfissao}
            />
            <TextInput
                secureTextEntry={true}
                style={styles.textinput}
                placeholder="Sua senha"
                value={senha}
                onChangeText={setSenha}
            />
            <Button title="CADASTRAR" onPress={cadastrar} />
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
})