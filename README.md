# Old Mac Donald Application

## Description

Single Page Application which

* shows five verses of the nursery rhyme "Old Mac Donald Had a Farm" with five animals
* generates a rhyme with given animal name and sound

The verse is repeated for each animal and its sound. 

## Example
For example if we give the name "cat" and sound "meow", the verse will be

```
Old MACDONALD had a farm, E-I-E-I-O
And on his farm he had a cat, E-I-E-I-O
With a meow meow here and a meow meow there,
Here a meow, there a meow, everywhere a meow meow,
Old MacDonald had a farm, E-I-E-I-O
```

The user can also create a rhyme of the song. This can be done by clicking on the "Add animal" button which is in the header.
The user will then be navigated to another page with a form. In this form he can give a name and sound of an animal. 
And after clicking "Add" a rhyme of the song will be generated with the entered animal and sound.

## Technologies used
* Angular v10

## Build
1. Install dependencies
```
npm install
```
2. Run Angular application
```
ng serve
```
