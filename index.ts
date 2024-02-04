// Import stylesheets
import Node from './node';
import './style.css';
import makeFactorTree, { display, getPrimeFactors } from './factor-tree';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `
<h1>Factor Trees in TypeScript</h1>
<h2> ** Prime Factorization ** </h2>
<code>
display(makeFactorTree(new Node(15)));<br>
Level: 0, Root Data: 15<br>
L:<br>
Level: 1, Root Data: 3<br>
R:<br>
Level: 1, Root Data: 5<br>

Prime Factors: ${getPrimeFactors(makeFactorTree(new Node(15)))}
</code>
`;

display(makeFactorTree(new Node(15)));
console.log(getPrimeFactors(makeFactorTree(new Node(15))));
