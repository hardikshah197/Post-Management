# PostManagement

## Aim of this Project

The aim of this project is to demostrate the approach being used for the communication of data among components and component management. 

### Approaches
1. First approach (used in this project): Data has been sent and received among components using @Input and @Output directives.

2. Using RouteParams: Data can also being shared as RouteParams, user id and post id have been shared and picked by components through route, to fetch user and post data from APIs (Not a best way to make API calls for smaller things)

3. Using Cookies: Cookies can also being used here to store current user and post data or ids.


## Components
1. User Component: User component handles the users and to show them as list.
2. Post Component: Post component handles the recent posts of Selected/Currently clicked User, present all the recent posts in the list form.
3. Modal Component: Modal component is the child component of Post component.
4. App Component: App component is the core main component, having User and Post components as it's child.

## Services
1. User Service: Service Injector created to Get users list, get, create, update, and remove user.
2. Post Service: Service Injector created to Get posts list, get, create, update, and remove post.

## Data Flow
1. User information is being first fetched from User API in user component.
2. When user click on any of User card, the data from user component is being passed from User (Child) component to App(Parent) component by using @Output Decorator (EventEmitter) and App component passes it to Post(Another Child) Component by using @Input Decorator.
3. While create new post, user details(User id) is being passed to Modal component from Post component by using @Input Decorator.
______________________________________________________________________________________
## Angular Project Guide

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
