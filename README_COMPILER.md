# 🔥 GulfOfMexico Cursed Compiler 🔥

The most cursed compiler ever created! It tries its best to compile GulfOfMexico code, but things might get weird.

## Installation

```bash
npm install
```

Or just use it directly:

```bash
node compiler.js <input.db> [output.js]
```

## Usage

### Basic Compilation

```bash
# Compile a .db file to JavaScript
node compiler.js hello.db hello.js

# Output file is optional (defaults to .js)
node compiler.js hello.db
```

### Example

Create a file `test.db`:

```java
const const name = "Luke"!
print(name)!

funct add(a, b) => a + b!
print(add(2, 3))!
```

Compile it:

```bash
node compiler.js test.db test.js
```

Run the output:

```bash
node test.js
```

## Features

### ✅ Supported (kinda, maybe, probably)

- `const const`, `const var`, `var const`, `var var` declarations
- `funct` functions
- `when` conditionals (basic)
- `print()` statements
- Basic arithmetic

### 🔥 Cursed Syntax Support

- `kinda const` - Sort of constant, maybe
- `const-ish` - Const-like behavior
- `almost const` - Nearly constant
- `kinda funct` - Acts like a function, mostly
- `maybe()`, `probably()`, `approximately()` - Uncertain values
- Approximate operators: `+?`, `-?`, `*?`, `/?
- `==?` - Approximate equality

### ⚠️ Limitations

This compiler is CURSED. It:
- Might not work correctly
- Tries its best but things get weird
- Doesn't support all GulfOfMexico features
- Makes approximations for cursed syntax
- Might add randomness to approximate operators
- Could fail silently (but continues anyway)

## How It Works

1. Reads your `.db` file
2. Tries to parse GulfOfMexico syntax
3. Translates to JavaScript (approximately)
4. Outputs a `.js` file that might work

## Example Output

Input (`hello.db`):
```java
const const name = "Luke"!
print(name)!
```

Output (`hello.js`):
```javascript
// Compiled from GulfOfMexico (cursed mode)
// This might work, probably, maybe

const name = "Luke";
console.log(name);
```

## Cursed Features

The compiler handles cursed syntax by:
- Making `maybe()` values slightly random
- Adding small random variations to approximate operators
- Converting `kinda const` to regular `let` (because it's not really const)
- Trying its best to translate everything else

## Contributing

Want to make it more cursed? Feel free to add more cursed features!

## License

MIT (but it's cursed, so use at your own risk)

## Warning

⚠️ **This compiler is EXTREMELY CURSED.**
- Your code might not work
- Things might be approximate
- Randomness might be added
- Errors might be ignored
- Reality might collapse

**Use at your own risk!** 🔥

