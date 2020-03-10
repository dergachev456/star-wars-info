import React from 'react'
import EntitiesListContainer from '../EntitiesList/EntitiesListContainer';
import EntityContainer from '../Entity/EntityContainer';

export default function EntitiesPage(props){
        const {data} = props;
        return (
            <div>
                    <EntitiesListContainer/>
                    <EntityContainer
                        data={data}
                    />
            </div>
        )
}