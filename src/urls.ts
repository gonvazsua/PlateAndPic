import { env } from "./environment";


export const urls = {

    emailAuthentication             : env.endpoint + 'authenticate/email',
    usernameAuthentication          : env.endpoint + 'authenticate/username',
    signup                          : env.endpoint + 'signup'

}