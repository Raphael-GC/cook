import { View, Text } from "react-native"

import { styles } from "./styles"
import { Ingredients } from "@/components/Ingredients"

export default function Index(){ /*When we're using Expo Router, we SHOULD set this function as a DEFAULT function*/
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
                <Text style={styles.subtitle}>os produtos</Text>
            </Text>

            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu.
            </Text>

            <Ingredients />
        </View>
    )
} 