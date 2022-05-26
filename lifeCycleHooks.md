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


### Child Component

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
### ngOnChanges

Whenever a  Input property is changed

### ngDoCheck ->

Everytime, any change occured

### ngAfterContentInit ->

### ngAfterContentChecked ->

If Data is changed

### ngAfterViewInit ->

After view is intinialised 

### ngAfterViewChecked ->.

## ngOnDestroy ->

Called whenever the component is removed from the dom.

### Child Component

constructor () {
  console.log("Child Constructor is called");
}

ngOnInit(): void {
  console.log("Child OnInit is called");
}

ngOnDestroy() {
  console.log("Child Ondestroy is called");
}



References [Life cycle Hooks](https://www.youtube.com/watch?v=kKtrHrciIVs)
Documentation [Angular] (https://angular.io/guide/lifecycle-hooks).
            
