export default {
    name: 'strans',
    title: 'Strans',
    type: 'document',
    fields: [
        
        {
            name: 'nume',
            title: 'Nume',
            type: 'string',
        },
        {
            name: 'departament',
            title: 'Departament',
            type: 'string',
            initialValue: {
                title: "Dep"
            },
            options: {
                list: [
                    {title: "strans", value: "strans"},
                ]
            }
        },
        {
            name: 'concediu',
            title: 'Concediu',
            type: 'string',
            initialValue: {
                title: "Concediu"
            },
            options: {
                list: [
                    {title: "da", value: "da"},
                    {title: "nu", value: "nu"}
                ]
            }
        },
        
    ]
}