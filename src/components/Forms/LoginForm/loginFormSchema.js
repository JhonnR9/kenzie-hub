import {z} from "zod";

export const inputs = {
    email: "email",
    password: "password"
}

export const loginFormSchema = z.object({
    [inputs.email]: z.string().min(1, "Email nao pode esta vazio").email("Forneça um email valido"),
    [inputs.password]: z.string().min(1, "Senha nao pode esta vazia"),

});




