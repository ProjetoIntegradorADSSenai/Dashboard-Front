import { AgrupamentoPorHorario} from "@/types/api-response";
import axios from 'axios';

export async function getMaterials(): Promise<AgrupamentoPorHorario[]> {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/`);
    
    console.log("Response from getMaterials:", response.data);
    if (!response
    ) {
        throw new Error("Failed to fetch materials");
    }
    return response.data;
}