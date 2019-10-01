export class AuthService{
    // In a real world app this would handle the authentication/session logic to determine if a user is logged in, this is a routing demo so faking it for now
    loggedIn: boolean;

    isAuthenticated(){
        const promise = new Promise(
            (resolve,reject) => {
                setTimeout(() => {
                    resolve(this.loggedIn);
                },800);
            }
        );
        return promise;
    }

    login(){
        this.loggedIn = true;
    }

    logout(){
        this.loggedIn = false;
    }
}