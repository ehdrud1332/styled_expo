import React, {useState} from 'react';
import {
    Dimensions,
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
import themes from '../config/themes'
const w = Dimensions.get('screen').width;
const tabs = ['All recipes', 'Meat', 'Salads', 'Soups']

import TapContents from "./TapContents";

const TapRecipe = ({onPress}) => {

    const [selected, setSelected] = useState(0);

    // const onScroll = ({nativeEvent}) => {
    //     const index = Math.round(nativeEvent.contentOffset.x / (w - 20));
    //
    //     SetSelected(index)
    // };
    const onScroll = ({nativeEvent}) => {
        const index = Math.round(nativeEvent.contentOffset.x / (w - 20));

        setSelected(index);
    };


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {tabs.map((e, i) => (
                    <Pressable onPress={() => setSelected(i)}>
                         <Text
                            style={[
                                styles.title,
                                selected == i && {color: themes.colors.main},
                            ]}>
                             {e}
                         </Text>
                        {selected == i && <View style={styles.line}/>}
                    </Pressable>
                ))}
            </View>
            <ScrollView
                horizontal
                pagingEnabled
                snapToAlignment='center'
                onScroll={onScroll}
                decelerationRate='fast'
            >
                <TapContents onPress={onPress}/>
                <TapContents onPress={onPress}/>
                <TapContents onPress={onPress}/>
                <TapContents onPress={onPress}/>
            </ScrollView>
        </View>
    );
};

export default TapRecipe;

const styles = StyleSheet.create({
    title: {
        fontSize: 17,
        fontWeight: '600',
        color: 'gray',
    },
    starCon: {
        flexDirection: 'row',
        marginVertical: 9,
    },
    star: {
        marginRight: 5,
    },
    titleItem: {
        fontSize: 16,
        fontWeight: '600',
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    body: {
        paddingHorizontal: 20,
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    line: {
        width: 30,
        height: 2,
        backgroundColor: themes.colors.main,
        alignSelf: 'center',
        marginTop: 3,
    },
    image: {
        width: w / 3.8,
        height: w / 3.8,
        borderRadius: 10,
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerCard: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    footerItemText: {
        fontSize: 14,
        color: 'gray',
        marginLeft: 10,
        fontWeight: '500',
    },
    iconHeart: {
        tintColor: themes.colors.main,
    },
    buttonHeart: {
        position: 'absolute',
        right: 15,
        top: 1,
    },
});