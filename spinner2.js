//Refactor the logic to remove the repeated setTimeout statements
const spins = ["|", "/", "-", "\\"];
for (const spin of spins) {
  setTimeout(() => {
    process.stdout.write(`\r${spin}   `);
  }, (spins.indexOf(spin) + 1) * 100);
}
