import { Injectable } from '@angular/core';


@Injectable()
export class JwtService {

  getToken(){
    return localStorage.getItem('jwtToken');
  }

  saveToken(token: string) {
    localStorage.setItem('jwtToken' , token);
  }

  destroyToken() {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('refreshToken');
  }

  setRole(role: string){
    localStorage.setItem('user-role', role)
  }

}
