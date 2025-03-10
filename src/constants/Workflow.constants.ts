import { Edge, Node } from "@xyflow/react";

export const initialNodes:Node [] =  [
    { id: '1', data: { amount: 10, }, position: { x: 100, y: 100 }, type: 'paymentInit'},
    { id: '2', data:{ currency:'$', country:'United States', countryCode:'US'}, position: { x: 300, y: 100 }, type: 'paymentCountry'},
    { id: '3', data:{ currency:'£', country:'England', countryCode:'GB'}, position: { x: 200, y: 100 }, type: 'paymentCountry'},
    { id: '4', data:{ name:'Google Pay', code: 'Gp'}, position: { x: 400, y: 100 }, type: 'paymentProvider'},
    { id: '5', data:{ name:'Stripe', code: 'St'}, position: { x: 500, y: 100 }, type: 'paymentProvider'},
    { id: '7', data:{},position:{x:0,y:0},type:'paymentProviderSelect'}

];

export const initialEdges:Edge [] =  [
    
];