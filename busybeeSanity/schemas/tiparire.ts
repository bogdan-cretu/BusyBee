export default {
    name: 'tiparire',
    title: 'Tiparire',
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
                    {title: "tiparire", value: "tiparire"},
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