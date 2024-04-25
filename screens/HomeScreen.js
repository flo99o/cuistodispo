import { View,Text } from 'react-native'
import { OfferSearch } from '../components/OfferSearch'
import { CardOffer } from '../components/CardOffer'

export const HomeScreen = () => {
  return (
    <View>
        <OfferSearch/>
        <CardOffer/>
    </View>
  )
}
