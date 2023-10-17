import {z} from "zod";

export const registerInputs = {
    name: "name",
    email: "email",
    password: "password",
    confirmPassword: "confirmPassword",
    about: "about",
    contact: "contact",
    module: "curse_module",
}

export const registerFormSchema = z.object({
    [registerInputs.name]: z.string().min(1,"Forneça um nome"),
    [registerInputs.email]: z.string().min(1, "Este campo nao pode esta vazio").email("Forneça um email valido"),
    [registerInputs.about]: z.string().min(1, "O campo Bio é obrigatório"),
    [registerInputs.contact]: z.string().min(1, "O campo Contact é obrigatório"),
    [registerInputs.module]: z.string().min(1, "Escolha um dos modulos"),
    [registerInputs.password]: z.string().min(8, "É necessario pelo menus 8 digitos")
    .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
    .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
    .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    [registerInputs.confirmPassword]: z.string().min(1, "É necessário confirmar a senha"),

}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senha nao conferem",
    path: [registerInputs.confirmPassword],

});
