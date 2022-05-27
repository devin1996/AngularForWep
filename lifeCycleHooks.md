#  Component Life cycle methods in the Angular

All components and Directives in Angular has LifeCycle Hooks (Create, Update and Destroy)\
Components have more Life Cycle than directives

- ngOnInit
- ngOnChanges
- ngDocCheck
- ngAfterContentInit (only Availble in Components)
- ngAfterContentChecked (only Availble in Components)
- ngAfterViewInit (only Availble in Components)
- ngAfterViewCheked (only Availble in Components)
- ngDestroy

*Constructor is not a Life Cycle hook it's a feature in typesscript*


## ngOnInit

This hook will be called once after the first ngOnChanges

 - Mostly we use this for intialise values

### Parent Component

constructor () {
  console.log("Parent Constructor is called");
}

ngOnInit(): void {
  console.log("Parent OnInit is called");
}


**child.component.ts**

constructor () {
  console.log("Child Constructor is called");
}

ngOnInit(): void {
  console.log("Child OnInit is called");
}

### Output Order

Parent Constructor is called
Child Constructor is called
Parent OnInit is called
Child OnInit is called

*Suppose if we call later Manually from a button child component after Parent component Initialised the out will be like this*

Parent Constructor is called
Parent OnInit is called
Child Constructor is called 
Child OnInit is called

Because of that we can understand that the once Constructor is loaded into dom, Child Constructor is called and child Onit is called

## ngOnChanges

Called once before ngOnInit() whenever the data bound input memmories changed

Data-bound input -  not the normal input in the same component, It should be something that coming out of component through and @Input

### Example

**child.component.html**

<h1>Child Component</h1>
<div>
  <h3>{{channelName}}</h3>
</div>

**child.component.ts**

channelName = "";

**parent.component.html**
<button click="toggleChild()">Toggle Child</button>
<input type="text" [(ngModel)]= "channelName">
<app-child ngIf="isChild" [channelName]="channelName"></app-child>

**parent.component.ts**

@Input

isChild = true;
channelName = "";

constructor () {
  console.log("Parent Constructor is called");
}

ngOnInit(): void {
  console.log("Parent OnInit is called");
}

ngOnChanges(changes: SimpleChanges) {
  console.log(changes);
  console.log("Parent ngOnChanges is called");
}

ngOnDestroy() {
  console.log("Child OnDestroy is called");
}

So every change will be detected so expensive operation like API Calls should not be done in here

### ngDoCheck ->

Everytime, any change occured

### ngAfterContentInit ->

### ngAfterContentChecked ->

If Data is changed

### ngAfterViewInit ->

After view is intinialised 

### ngAfterViewChecked ->.

## ngOnDestroy

Called whenever the component is removed from the dom.

**child.component.ts**

constructor () {
  console.log("Child Constructor is called");
}

ngOnInit(): void {
  console.log("Child OnInit is called");
}

ngOnDestroy() {
  console.log("Child OnDestroy is called");
}

* Suupose theser's toggle button to show component values on child component, after viewing and closing child component OnDestroy will be called *

### Avoid memmory leaks

ngOnInit(): void {
  console.log("Child OnInit is called");
  
  this.interval = setInterval(()=>{
    this.counter = this.counter + 1;
    console.log(this.counter);
    }, 1000);
}

ngOnDestroy() {
  clearInterval
  console.log("Child OnDestroy is called");
}

* If we didn't clear Intervals, Two Intervals will be handled *

References [Life cycle Hooks](https://www.youtube.com/watch?v=kKtrHrciIVs)
Documentation [Angular] (https://angular.io/guide/lifecycle-hooks).
            
