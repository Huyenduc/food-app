import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { FC } from 'react'
import { categoryData } from '../constants';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Animated, { FadeInDown } from 'react-native-reanimated';
interface Props {
  activeCategory: string;
  setsetActiveCategory: React.Dispatch<React.SetStateAction<string>>;
}

const Categories: FC<Props> = ({activeCategory, setsetActiveCategory}) => {
  return (
    <Animated.View entering={FadeInDown.duration(500)}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='space-x-4 '
        contentContainerStyle={{ paddingHorizontal: 15 }}
      >
        {
          categoryData.map((item, index) => {
            let isActive = activeCategory === item?.name;
            let activeButton = isActive ? 'bg-amber-400' : 'bg-black/10';
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setsetActiveCategory(item?.name)}
                className='items-center  space-y-1'>
                <View className={'rounded-full p-[6px] ' + activeButton}>
                  <Image
                    source={{ uri: item?.image }}
                    style={{ width: hp(6), height: hp(6) }}
                    className='rounded-full'
                  />
                </View>
                <Text className='text-neutral-600' style={{ fontSize: hp(1.5) }}> {item?.name}</Text>
              </TouchableOpacity>
            )
          })
        }
      </ScrollView>
    </Animated.View>
  )
}

export default Categories;