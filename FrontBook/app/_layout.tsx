import { Stack } from "expo-router"

// Cinfiguração básica para fazer navegação entre as paginas
export default function RootLayout() {
    return <Stack screenOptions={{headerShown: false}}/>
}