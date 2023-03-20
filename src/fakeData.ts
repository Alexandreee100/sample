interface Column {
    title: string;
    data: (Table | Expander)[]
}

interface Table {
    type: 'table';
    children: TableChild[]
}

interface TableChild {
    name: string;
    value: string;
}

interface Expander {
    type: 'expander';
    name: string;
    value: string;
    children: ExpanderChild[];
}

interface ExpanderChild {
    name: string;
    value: string;
}

interface Data {
    columns: Column[];
}

const data: Data = {
    "columns": [
        {
            "title": "title",
            "data": [
                {
                    "type": "expander",
                    "name": "Базовая ставка",
                    "value": "8%",
                    "children": [
                        {
                            "name": "Срок действия надбавки",
                            "value": "Весь срок вклада"
                        }
                    ]
                },
                {
                    "type": "table",
                    "children": [
                        {
                            "name": "Срок дней",
                            "value": "91"
                        },
                        {
                            "name": "Мин. сумма",
                            "value": "50 000 Р"
                        }
                    ]
                }
            ]
        }
    ]
}

export default data;