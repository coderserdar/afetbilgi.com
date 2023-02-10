import { MarkerData} from "../hooks";



export const filterType = (data: MarkerData["map_data"], type: string) =>  {
    return data.filter (item => isType(item, type))
}

const isType = (data : MarkerData["map_data"][0], type: string) => {
    return type === data.type

}


export const filterMultipleTypes = (data: MarkerData["map_data"], types: string[]) =>  {
    return data.filter (item => isOneOfTypes(item, types))
}

const isOneOfTypes = (data : MarkerData["map_data"][0], types: string[]) => {
    for(let i = 0; i < types.length; i+=1) {
        if( data.type === types[i] ) {
            return true;
        }
    }
    return false; 

}



export const searchText = ( typeData: MarkerData["map_data"][any], searchString: string, searchAttributes: string[] ) => {

    const searchStringLower = searchString.toLowerCase();
    return typeData.data.filter( item => doesContainInAttributes(item, searchStringLower, searchAttributes) )

} 


const doesContainInAttributes = ( item: MarkerData["map_data"][any]["data"][any], searchString: string, searchAttributes: string[]) => {
    if(searchAttributes.includes("name") && item.name.toLowerCase().includes(searchString)) {
        return true;
    }
    if(searchAttributes.includes("description") && item.description?.toLowerCase().includes(searchString)) {
        return true;
    }
    return false;
}







