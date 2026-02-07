import { error } from "@sveltejs/kit";
import { cars } from "$lib/data/cars";


export const load = ({ params }: { params: { id: string } }) => {
    console.log("param id" , params.id)
    
    const car = cars.find((voiture) => voiture.slug=== params.id)
    if(!car){
        throw error(404, "vehicule introuvable")
    }
    return {car}
}