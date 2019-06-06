import { users } from './../Models/Users.model';

export class Security{
    public static set(user: users, token: string) {
        const data = JSON.stringify(user);

        localStorage.setItem('tokenPontuaae', token);
        localStorage.setItem('userPontuaae',btoa(data));
    }

    public static setUser(user:users){
        const data = JSON.stringify(user);

        localStorage.setItem('userPontuaae',btoa(data)); 
    }

    public static setToken( token: string){
       
        localStorage.setItem('tokenPontuaae',token);
    }


    public static getUser(): users {
        const data = localStorage.getItem('userPontuaae');
        if (data) {
            return JSON.parse(atob(data));
            
        } else {
            return null;
        }
    }


    public static getToken(): string {
        const data = localStorage.getItem('tokenPontuaae');
        if (data) {
            return data;
        } else {
            return null;
        }
    }
    public static hasToken(): boolean {
        if (this.getToken())
            return true;
        else
            return false;
    }

    public static clear() {
        localStorage.removeItem('userPontuaae');
        localStorage.removeItem('tokenPontuaae');
    }

}