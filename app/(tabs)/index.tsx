import React, { useMemo } from 'react';
import { View}  from 'react-native';
import { Stack } from 'expo-router';

import ExploreHeader from '@/components/ExploreHeader';
import Listings from '@/components/Listings';
import { useState } from 'react';
import listingsData from '@/assets/data/airbnb-listings.json';
 import listingsDataGeo from '@/assets/data/airbnb-listings.geo.json';
import ListingsMap from '@/components/ListingsMap'; 
import ListingsBottomSheet from '@/components/ListingsBottomSheet';
const Page=()=>{
    const [category,setCategory]=useState('Tiny homes');
    const items=useMemo(()=>listingsData as any,[]);
    const geoItems = useMemo(() => listingsDataGeo, []);
    const onDataChanged=(category:string)=>{
    //  console.log('CHANGED:',category);
     setCategory(category);
    };

    return(
   <View style={{flex:1,marginTop:130}}>
       <Stack.Screen options={{
        header:()=> <ExploreHeader onCategoryChanged={onDataChanged}/>,

       }}/>
       {/* <Listings listings={items} category={category}/> */}
       <ListingsMap listings={geoItems }/>
       <ListingsBottomSheet listings={items} category={category}/>
        </View>
    )
}

export default Page;