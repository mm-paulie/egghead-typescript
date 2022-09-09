type Salutation = { greeting: string; name?: string };

function greet({ greeting, name = "Paulie" }: Salutation) {
  return `${greeting}, ${name}`;
}

const message: string = greet({ greeting: "Hallo" });

console.log(message);
