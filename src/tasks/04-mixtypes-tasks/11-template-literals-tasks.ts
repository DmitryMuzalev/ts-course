export {};

type Style = 'none' | 'dotted' | 'dashed' | 'solid';

type StyleWithoutNone = Exclude<Style, 'none'>;

type Color = 'Red' | 'Green' | 'Blue' | 'Black' | 'White';

type BorderStyle = 'none' | `${StyleWithoutNone} ${Uncapitalize<Color>}`;

let borderStyle: BorderStyle = 'solid red';

let borderStyle2: BorderStyle = 'dashed white';
let borderStyle3: BorderStyle = 'none';
