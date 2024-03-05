import { Slot } from "expo-router"

import {
    useFonts,
    Poppins_400Regular,
    Poppins_700Bold,
    Poppins_500Medium,
} from "@expo-google-fonts/poppins"

export default function Layout() { /* The underscore preceding the file name denotes it as a configuration/interface file for Expo Router. */
    const [fontsLoaded] = useFonts({
        Poppins_400Regular,
        Poppins_700Bold,
        Poppins_500Medium,
    })

    if(!fontsLoaded){
        return
    }
    return fontsLoaded ? <Slot /> : null
}