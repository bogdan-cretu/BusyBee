export default {
    name: 'gestiune',
    title: 'Gestiune',
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
                    {title: "gestiune", value: "gestiune"},
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