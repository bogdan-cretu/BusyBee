export default {
    name: 'coletare',
    title: 'Coletare',
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
                    {title: "coletare", value: "coletare"},
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