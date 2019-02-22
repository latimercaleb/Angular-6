# Angular The Complete Guide
- History
- Basics
- Components & Databinding
- Directives
- Services & Dependency Injection
- Routing
- Observables
- Forms
- Pipes
- Http
- Authentication
- Animations & Testing Practices
- Other

## Assignment Links:
- [App 1: Practicing Components](https://gist.github.com/latimeks/f57eaa2e7d507b88454bdece55f0f80d)
- [App 2: Practicing Databinding](https://gist.github.com/latimeks/8055c0a4c532669d245febd2420019d7)
- [App 3: Practicing Directives](https://gist.github.com/latimeks/0554e9d0b286b53226ccdd0cd1a8cc83)
- [App 4: Practicing Property & Event Binding and View Encapsulation]()

## TOC
1. [Use of the Angular-cli]()
2. [Angular Coding]()
  3. [Basics]()
  4. [Embedded Template]()
  5. [Styling the template]()
  6. [Binding]()
    7. [More on binding]()
    8. [String Interpolation vs Property Binding]()
  9. [Directives]()
    10. [Built-In]()
11. [Interview Q & A]()
12. []()

## History
Angular is a framework for front end reactive single page applications by Google, which started in 2009 as `AngularJS`. It allows JS to change the DOM via runtime and introduces many other development concepts such as dependancy injection, micro-service architecture and two-way data binding.

Angular works by using the framework to serve `index.html` and with that it actually self-wraps any dynamically injected script tags with it's process.

Verions have been AngularJS, Angular 2,4,5,6 and is at 7 at the time of writing.
- 2 was originally released in 2016 and has nothing much compared to Angular JS
- Starting with 2 Angular 2 is called **Angular** which is the start of a series of incremental improvements on top of each other. Not much syntax-wise or design wise changes from 2 and above.

Angular has 3 main dependacies that are used throughout the project and any project that uses the framework:
- `Typescript` a superset of JS with strong typing, abstractions, encapsulation and inheritance
- `RxJS` A reactive library for use of observables, async streams of data which you can subscribe to and then pipe different functions into emissions
- `ZoneJS` Execution context for async operations. Basically it listens to API & XMLHttpRequests and loads them in a `zone` after which it can provide hooks and monitoring on async stuff to provide messaging of state



## Use of the Angular-cli
Angular requires `npm install @angular/cli` to get started, There are several `ng-directives` but the ones to pay most attention to are:

| Command | Function|
| ------- | --------|
| ng new | Start a new project |
| ng generate | Adds a new component, service or test |
| ng build | Builds project & reports any errors |
| ng test | Runs all unit tests for project |
| ng serve | Serves app on port 4200 unless specified |
| ng help | Opens a help menu of all ng-directives |
| ng verion | Prints version of cli tool |
| ng update | Brings up an update of all dependencies |

## Angular Coding
`package.json` contains all dependancies and versions if there are any build issues most likely they can be resolved here.

`app.module.ts` contains info on all the components being used by the app

`app/` each component contains an html, css/less/scss, ts and spec.ts by default for the respective piece. app.html is what gets rendered into index.html so anything imported or customized via a component must be done via the app folder

### Basics
`main.ts` serves as entry point for js stuff which renders `app-module` which is the main thing that does all component modifications and processes

`app.component` serves as the root component in which all other components nest within. Components should be made to be re-used, similar to classes in OOP.

### Making components
 * Each component should have it's own folder.
 * Creating a component name should be **folder-name.component.ts**
A component is in short `a typescript class` that is exported and used in the project, components require a metadata config object called a `decorator` for Angular to interpret it as a component.

```typescript
import {Component} from '@angular/core';
@Component({
  selector:'app-server',
  templateUrl:'./server.component.html'
})
export class ServerComponent{

}
```
A component decorator looks like: `@Component({...})` and must be imported first into the typescript file by: `import {Component} from '@angular/core';` Within the `...` there are 3 important parameters being passed into this object:
* selector: usually in the format of `app-fldrName` and is the way you embed the ts into html
* templateUrl: A path to a css file for the template

To use a component it must be pulled into `app-module.ts` by importing it, and adding it to the `declarations: []`. It must be imported into `app.module.ts`

All of this can be automatically with the cli: `ng generate component comp-name` or `ng g c comp-name`. It will perform the foldering and updates to app-module for you.

Selectors in the decorator must be unique so as to not overwrite a built in selectors from HTML, in addition to that care must be given to not override selectors from Angular itself or other 3rd party tools

In CSS you can select elements by attribute, you can also do something similar in angular with `selector: '[app-servers]'` or `selector: '.app-servers'` doing this will tell angular to look for an html element with an app-servers property or class:

``` html
<div app-servers>
</div>

<!--or-->

<div class = 'app-servers'>
</div>
```

The above does not work with psudeo-classes(hover, selected, etc) or IDs and is commonly not used because it is preferred to create your own custom elements which is the default, but there are some use cases where you would want to use a different selector

### Embedded template
Instead of using `templateUrl` we can use `template` instead and write the code that way. **template or templateUrl MUST be present in each component decorator or it will not work**
``` typescript
template: '<app-server></app-server><h3>Mode on!</h3>'
```
To make a template use multi-lines use a template literal in backticks, best practice is to use a literal if more than 3 lines of html are being used

In a component the selector can be omitted as well as the styles, but a template **MUST** be in play.

### Styling the template
A third parameter in the `@Component({...})` decorator is `styleUrls: ['...']`. Within this array you can list paths to multiple css files to include in the template.

As an alternative the `styleUrls` can be replaced to `styles:['...']` and css can be added directly within the TS like:
``` typescript
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles:[`
    h3 {
      color: green;
    }
  `]
})
```
styleUrls and styles both can't be in play it has to be one or the other:
* styles is inline styles
* styleUrls is an external CSS file.

### Binding
Since AngularJS `data-binding` has always been one of the most core parts of the Angular application. Data-binding is the practice of connecting DOM(the data object model) with the template (HTML) by the component (the typscript in the app-component)
A simple example is:
``` html
<input type="text" [(ngModel)]='Intro' />
<p>{{Intro}}</p>
```

In this since the `<p>` and `[(ngModel)]` both are the same the text here is being bound from the input field to text field. Any changes made to the input field will change the text field

`ngModel` is a directive imported from `FormsModule`

There are 3 main types of data-binding:
- Event: App senses some users interaction and reacts `()`
- Property: Interpolation of CSS by JS in the component `[]`
- Two-way: Change in internal state gets reflected immediately in some part of the template `([])`
- Interpolation: Embedding JS values or expressions in template `{{}}`

#### More on data-binding
In Angular databinding is synonymous with communication between business logic and presentation template, TS file and html file in component.

- Interpolation `{{...}}` must always resolve in a string or something that can be evaluated to a string. Numbers are fine because they can be converted into strings.
- Property Binding `[...] = "..."` can be used to dynamically bind html properties to typescript variables. Some properties require booleans but other propeties may require other values. For example using: `[disabled]="allowNewServer"` or `[disabled]="!allowNewServer"` works this way assuming that you have `allowNewServer :boolean = false;` in the ts file
- Event Binding `(...)="..."` binds the name of an event to a typescript function call or typescript expression. It is possible to embed several lines of typescript logic inside a single call but this viewed as bad practice. If a function name is used it must have the `()` at the end for Angular to execute the call
*Any property or event in html is bindable in Angular*
  - Passing data in event-binding: Do this with `$event` being passed into the `()` with each event,
- Two-way binding: Combines property binding and two-way binding by use of ngModel like `[(ngModel)]="..."` where the ... is a typescript variable. ngModel is a directive that is part of the FormsModule described earlier.



##### String Interpolation vs Property Binding
Use string interpolation to output dynamic text to the template

Use property binding if you want to change a component, directive or html value

**DO NOT MIX THE TWO!** You cannot have `[disabled]="{{allowNewServer}}"` or something like that. Between the `="..."` on the right hand side Angular is already evaluating it as TS code. Adding non-TS code here will break the template.

## Directives
The 3rd key building block of Angular, Directives are a set of instructions in the DOM. `Components are a subset of directives but with templates`.

Example would be: `<p appBlinkRed>Test text</p>`.
Angular would store the director something like this:

``` typescript
@Directive({
  selector: '[appBlinkRed]'
  })
export class appBlinkRed{
  ...
}
```

Directives come in two types `Custom` & `Built-in`

### Built-in directives, structural directives
`*ngIf="..."` Renders section in the dom or doesn't based on boolean within quotes. Can be an expression, a method call or a typescript variable.

Viewing the source code will show you that the element is added or removed from DOM, it's not simply being hidden or delayed.

As with most if blocks, there is an else block used via `localReference` as shown below

``` typescript
<p *ngIf="serverCreated; else noServer">{{serverCreationStatus}} </p>
<ng-template #noServer>
  <p>No server is created</p>
</ng-template>
```
`#noServer` is called a local referrence. A local referrence is an indicator for binding to an `ng-template` we can then extend the `*ngIf` as shown above.

`ng-template` is just an inert section of the template that HTML can go inside of and Angular can read the referrence to do things with it.

`*ngFor="let ... of ..."` Replacing the `...` with first a temp variable to access in the template, and in the last piece the typescript structure to iterate over. This is an Angular iteration tool to focus on iterating a component or some HTML in the template depending on the typescript logic

This can  be extended with `*ngFor="let... of ...; let a = index"` to grab the index of the iteration. You can use `a` anywhere in the template for the loop and as a parameter to your typescript logic.

The `a` to get index is a part of Angular called `microsyntax` and with that you can declare template variables inside certain directives that the parser translates into TS local vars.

The local vars for ngFor are the same as ngForOf which is:
- index :number, current index in iterable, 0-indexed
- first :boolean, true if first item in iterable
- last :boolean, true if last item in iterable
- even :boolean
- odd  :boolean
- $implicit :T, value of individual item in iterable

### Built-in directives, Attribute directives
Attribute directives don't add or remove elements and can affect styles like CSS

`[ngStyle]="{...}"` is used like an html property and is used for property binding. Except the arguement it takes is a typescript object in a key-value pair.

The key must be wrapped in `' '` if it's something that's multi-word like `background-color` or it can be in camelCase `backgroundColor` and work fine. The value can be a standard css value or a typescript method. If a method is used `()` must be used

`ngStyle` is a directive that enables dynamic styling based on typescript logic

Similar to `ngStyle` there  is also `[ngClass] = "{...}"` which also uses a key/value design. But this time the keys are the classNames in CSS and the value is the conditional logic in typescript that decides if the class is attached or not.

ClassNames here follow the same rules as ng-style with using the `' '`if it's something that's multi-word like `my-class` or it can be in camelCase `myClass` and work fine.


## Course project recipe book & shopping list app

Two sections for list and book manage recipe from list and manage book from list

In planning apps like this start with figuring what components will be needed



## Interview Q & A
- **In terms of projects, interview questions etc. Learn the difference between the Angular & AngularJS**
