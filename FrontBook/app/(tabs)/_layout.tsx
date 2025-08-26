import { Tabs } from "expo-router"
import { Ionicons, Ionicos } from "@expo/vector-icons"

export default function TabsLayout() {
    return(
        <Tabs screenOptions={{
            tabBarActiveTintColor:"#219f6f3",
            headerStyle: {
                backgroundColor: "#2196f3",
            }
        }}>
            <Tabs.Screen 
            name="index" 
            options={{
                title: "Timeline", 
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="home" size={size} color={color}/>
                )}}/>
            <Tabs.Screen 
            name="porfile" 
            options={{
                title: "Perfil", 
                tabBarIcon: ({color, size}) => (
                    <Ionicons name="person" size={size} color={color}/>
                )}}/>
        </Tabs>
    )
}
