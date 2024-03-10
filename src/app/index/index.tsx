import { View, Text, ScrollView } from "react-native"

import { styles } from "./styles"

import { Ingredient } from "@/components/Ingredient"

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

            <ScrollView contentContainerStyle={styles.ingredients}>
                {Array.from({ length: 100 }).map((item, index) =>(
                    <Ingredient key={index} />
                ))}        
            </ScrollView>
        </View>
    )
} 