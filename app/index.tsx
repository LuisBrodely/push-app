import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { usePushNotification } from '@/hooks/usePushNotification'

const PushApp = () => {
  const { expoPushToken, notifications } = usePushNotification()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Token: {expoPushToken}</Text>

      <Text>Notifications:</Text>

      <FlatList
        data={notifications}
        renderItem={({ item }) => (
          <Text key={item.request.content.title}>
            {JSON.stringify(item.request.content)}
          </Text>
        )}

        keyExtractor={(item) => item.request.identifier}
      />
    </View>
  )
}

export default PushApp