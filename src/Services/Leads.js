function addLead(lead) {
    let current = getLeadCount();

    localStorage.setItem('crack-the-code/leadSequence', current + 1);
    localStorage.setItem('crack-the-code/leads/' + current, 
                        JSON.stringify({id: current, ...lead, status: 'possible_client'}));

    // retorna status de erro ou sucesso. para este caso, sempre verdadeiro.
    return true;
}

function changeLeadStatus(id, to) {
    let lead = getLead(id);
        lead.status = to;
    localStorage.setItem('crack-the-code/leads/' + id, JSON.stringify(lead));
}

function getLeadCount() {
    if(localStorage.getItem('crack-the-code/leadSequence') != null)
        return parseInt(localStorage.getItem('crack-the-code/leadSequence'));
    return  0;
}

function getLead(id) {
    return JSON.parse(localStorage.getItem('crack-the-code/leads/' + id));
}

function getAllLeads(type = undefined) {
    const max = getLeadCount();
    let response = [];
    
    for(let i = 0; i < max; i++) {
        response.push(
            {...getLead(i), id: i}
        );
    }

    // filtra leads pelo tipo caso o parametro seja enviado
    if(type !== undefined) {
        return response.filter((item) => {
            return item.status === type;
        });
    }
    return response;
}

export {
    addLead,
    getLead,
    getAllLeads,
    changeLeadStatus
}