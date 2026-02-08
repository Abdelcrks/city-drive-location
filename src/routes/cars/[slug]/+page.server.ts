import { error } from "@sveltejs/kit";
import { cars } from "$lib/data/cars";


export const load = ({ params }: { params: { slug: string } }) => {
    console.log("param id" , params.slug)
    
    const car = cars.find((voiture) => voiture.slug=== params.slug)
    if(!car){
        throw error(404, "vehicule introuvable")
    }
    return {car}
}