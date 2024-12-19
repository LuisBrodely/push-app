import { View, Text } from 'react-native'
import React from 'react'
import { usePushNotification } from '@/hooks/usePushNotification'

const PushApp = () => {
  const {  } = usePushNotification()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Token: {}</Text>
    </View>
  )
}

export default PushApp