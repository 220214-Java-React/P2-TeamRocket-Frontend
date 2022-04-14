import {useQueryClient, useMutation} from 'react-query';

const BASE_API_URL = "http://localhost:8080";
const RESOURCE_URL = `${BASE_API_URL}/pokemon`;


export default function CreatePokemon() {
    const queryClient = useQueryClient();
    const {mutate: setNewPokemon} = useMutation(
        (newPokemon) => {
            fetch(RESOURCE_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: newPokemon,
            }).then(response => response.data);
        return {id: newPokemon};
        
        },
        {
            onSuccess: async (newPokemon) => {
                queryClient.setQueryData('pokemon', (old) => [...old, newPokemon]);
            },
        }
    );
}


// return useMutation(data=>
//     , {
//         onMutate:newPokemon => {
//             const oldPokemon = queryClient.getQueriesData('allPokemonData');
            
//             if(oldPokemon) {
//                 queryClient.setQueriesData('allPokemonData', oldPokemon =>[
//                     ...oldPokemon,
//                     newPokemon,
//                 ]);
//                 return;
//             }
//             return () => queryClient.setQueriesData('allPokemonData', oldPokemon);
//         },
//         onSettled: () => {
//             queryClient.invalidateQueries('allPokemonData')
//         },
//     });
// }

