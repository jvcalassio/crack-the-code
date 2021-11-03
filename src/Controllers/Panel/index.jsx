import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import Panel from '../../Views/Panel';

import { getCurrentUser } from '../../Services/Users';
import { getAllLeads, changeLeadStatus } from '../../Services/Leads';

// indica quais listas podem receber itens de determinada lista
const rules = {
    "possible_client": "info_confirmed",
    "info_confirmed": "meeting_scheduled"
}

function PanelController() {
    const history = useHistory();

    const [ items, setItems ] = useState({
        possible_client: getAllLeads('possible_client'),
        info_confirmed: getAllLeads('info_confirmed'),
        meeting_scheduled: getAllLeads('meeting_scheduled')
    });

    // click do botao de "Novo Lead"
    const newLeadPage = () => {
        history.push("/new");
    }

    const move = (source, destination, droppableSource, droppableDestination) => {
        const src = Array.from(source);
        const dst = Array.from(destination);

        // remove da primeira lista
        const [ removed ] = src.splice(droppableSource.index, 1);
        
        // adiciona na nova lista local e chama o service para atualizar
        removed.status = droppableDestination.droppableId;
        dst.splice(droppableDestination.index, 0, removed);
        changeLeadStatus(removed.id, droppableDestination.droppableId);

        let res = {...items};
        res[droppableSource.droppableId] = src;
        res[droppableDestination.droppableId] = dst;

        return res;
    }

    const dragEnd = (result) => {
        const { source, destination } = result;

        if(!destination) return;

        if(source.droppableId === destination.droppableId) {
            // removido ja que a ordem nao importa
            // const _changedItems = Array.from(items[source.droppableId]);
            // const [ reordered ] = _changedItems.splice(result.source.index, 1);
            // _changedItems.splice(result.destination.index, 0, reordered);

            // const newItems = {
            //     ...items
            // }
            // newItems[source.droppableId] = _changedItems;
            // setItems(newItems);
        } else if(rules[source.droppableId] === destination.droppableId) {
            const newItems = move(
                items[source.droppableId],
                items[destination.droppableId],
                source,
                destination
            );
            setItems(newItems);
        }

    };

    // se nao tem usuario
    if(getCurrentUser() == null) {
        history.push("/register");
        return null;
    }

    return <Panel items={items} newLeadPage={newLeadPage} dragEnd={dragEnd}/>
}

export default PanelController;