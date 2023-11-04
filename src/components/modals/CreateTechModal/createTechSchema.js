import {z} from "zod";

export const createTechFormSchema = z.object({
    title: z.string().min(1, "Titulo nao pode esta vazio"),
    status: z.string().min(1, "Deve selecionar o nivel"),

});