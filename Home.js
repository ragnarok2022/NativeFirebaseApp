import { useEffect, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import db from "./firebaseConfig";
import { collection, getDocs } from "@firebase/firestore";

export default function Home() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const buscaDados = async () => {
            try {
                const usuariosRef = collection(db, 'usuarios')
                const querySnapshot = await getDocs(usuariosRef)
                const dados = querySnapshot.docs.map(doc => doc.data());
                setUsuarios(dados);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            }
        };

        buscaDados();
    }, []);

    return (
        <View style={styles.container}>
            <Text>Sejam bem-vindos(as)</Text>
            {usuarios.map((item, index) => (
                <View key={index} style={styles.usuario}>
                    <Text>Nome: {item.nome}</Text>
                    <Text>E-mail: {item.email}</Text>
                    <Text>Profissão: {item.profissao}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    usuario: {
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'gray',
        padding: 10,
        borderRadius: 5,
    }
});