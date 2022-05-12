import { View, Text } from 'react-native'
import React from 'react'
import { SIZES, FONTS, COLORS, SHADOWS, assets } from '../constants'

export const NFTTitle = () => {
  return (
    <View>
      <Text>Subinfo</Text>
    </View>
  )
}
export const ETHPrice = () => {
    return (
      <View>
        <Text>Subinfo</Text>
      </View>
    )
  }
  export const IMGcmp = () => {
    return (
     <Image
     source={imgUrl}
     resizeMode="contain"
     style={{
         width:48,
         height: 48,
         marginLeft:index === 0 ? 0:-SIZES.font
     }}
     />
    )
  }
  export const People = () => {
    return (
      <View style={{
          flexDirection:"row"
      }}>
        {[assets.person01, assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
            <IMGcmp imgUrl={imgUrl} index={index} key={`People-${index}`}/>
        ))}
      </View>
    )
  }
  export const Enddate = () => {
    return (
      <View>
        <Text>Subinfo</Text>
      </View>
    )
  }
  export const Subinfo = () => {
    return (
      <View style={{
          width:'100%',
          paddingHorizontal: SIZES.font,
          marginTop:-SIZES.extraLarge,
          flexDirection:"row",
          justifyContent:"space-between"
      }}>
        <People/>
        <Enddate/>
      </View>
    )
  }
  
  
  
  

