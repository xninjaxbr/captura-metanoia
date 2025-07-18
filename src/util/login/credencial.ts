type User = {
    email: string
}

export async function FindAdmin(email: string, password: string): Promise<User | null>{
    if(email === process.env.admin && password === process.env.pass){
        return {email} 
    }else{
        return null
    }

}