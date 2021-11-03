import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Button } from 'react-bootstrap';

import './styles.css';

function Panel({ items, newLeadPage, dragEnd }) {
    return (
        <div className="panel_page">
            <h2 className="text-center mb-5">Painel de Leads</h2>
            <Button className="mb-1" variant="outline-primary" onClick={newLeadPage}>Novo Lead</Button>
            
            <DragDropContext onDragEnd={dragEnd}>
                <div className="lead_list">
                    <div className="lead_column">
                        <span className="title">Cliente em potencial</span>
                        <Droppable droppableId="possible_client">
                            {(provided) => (
                                <ul className="droppable_area" 
                                    ref={provided.innerRef}>
                                    {items.possible_client.map(({ id, name }, index) => (
                                        <Draggable 
                                            key={id} 
                                            draggableId={id.toString()} 
                                            index={index}>
                                            {(provided) => (
                                                <li 
                                                    key={id} 
                                                    ref={provided.innerRef} 
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps}>{name}</li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                    <div className="lead_column">
                        <span className="title">Dados confirmados</span>
                        <Droppable droppableId="info_confirmed">
                            {(provided) => (
                                <ul className="droppable_area" 
                                    ref={provided.innerRef}>
                                    {items.info_confirmed.map(({ id, name }, index) => (
                                        <Draggable 
                                            key={id} 
                                            draggableId={id.toString()} 
                                            index={index}>
                                            {(provided) => (
                                                <li 
                                                    key={id} 
                                                    ref={provided.innerRef} 
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps}>{name}</li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                    <div className="lead_column">
                        <span className="title">Reunião agendada</span>
                        <Droppable droppableId="meeting_scheduled">
                            {(provided) => (
                                <ul className="droppable_area" 
                                    ref={provided.innerRef}>
                                    {items.meeting_scheduled.map(({ id, name }, index) => (
                                        <Draggable 
                                            key={id} 
                                            draggableId={id.toString()} 
                                            index={index}>
                                            {(provided) => (
                                                <li 
                                                    key={id} 
                                                    ref={provided.innerRef} 
                                                    {...provided.draggableProps} 
                                                    {...provided.dragHandleProps}>{name}</li>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </ul>
                            )}
                        </Droppable>
                    </div>
                </div>
            </DragDropContext>
        </div>
    );
}

export default Panel;