import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot, Router, UrlTree } from '@angular/router';
import { Observable} from 'rxjs';

// Define a custom type for your route guard function.
type MyCanActivate = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{
  sessionStorage: any;
  constructor(private router: Router) {}

  // Use the custom type for your canActivate function.
  canActivate: MyCanActivate = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) => {
    const isAuthenticated = this.checkIfUserIsAuthenticated();

    if (isAuthenticated) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  private checkIfUserIsAuthenticated(): boolean {
    // Check if the user is authenticated, for example by checking for a session storage variable.
    return sessionStorage.getItem('authenticated') === 'true';
  }

    // Add a method to clear the authentication status
    logout(): void {
      sessionStorage.removeItem('authenticated');
    }
}
